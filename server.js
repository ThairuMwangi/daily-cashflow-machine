const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3050;
const PUBLIC_DIR = path.join(__dirname, 'public');
const SITES_DIR = path.join(__dirname, 'generated-sites');
const EXPORTS_DIR = path.join(__dirname, 'exports');

for (const dir of [PUBLIC_DIR, SITES_DIR, EXPORTS_DIR]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Helper: parse JSON body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (data.length > 5e6) req.destroy();
    });
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(payload));
}

// Helper: fetch with timeout & user-agent
async function fetchWithTimeout(url, options = {}, timeoutMs = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) CashflowEngine/1.0',
        ...(options.headers || {})
      }
    });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

// ============================================================================
// ENGINE 1: REAL B2B BUSINESS LEAD FINDER & LIVE WEBSITE AUDITOR
// Uses OpenStreetMap Nominatim + Overpass API (100% Free, No API Key Required)
// ============================================================================
const CATEGORY_OSM_MAP = {
  dentist: '["amenity"="dentist"]',
  clinic: '["amenity"~"clinic|doctors|hospital"]',
  lawyer: '["office"~"lawyer|notary"]',
  accountant: '["office"~"accountant|tax_advisor|financial"]',
  real_estate: '["office"="estate_agent"]',
  car_repair: '["shop"="car_repair"]',
  salon: '["shop"~"hairdresser|beauty"]',
  hotel: '["tourism"~"hotel|guest_house"]',
  restaurant: '["amenity"="restaurant"]',
  plumber_trade: '["craft"~"plumber|electrician|roofer|carpenter|hvac|builder"]',
  gym: '["leisure"="fitness_centre"]',
  pharmacy: '["amenity"="pharmacy"]'
};

async function auditWebsiteLive(rawUrl) {
  if (!rawUrl) {
    return {
      hasWebsite: false,
      status: 'NO_WEBSITE',
      loadTimeMs: null,
      isHttps: false,
      hasMobileViewport: false,
      hasWhatsApp: false,
      hasBookingOrForm: false,
      extractedEmails: [],
      issues: ['No website listed publicly — losing 100% of Google searchers to competitors'],
      opportunityScore: 98,
      recommendedOffer: 'Instant Custom Website + Google Business Profile Optimization ($250 - $500)'
    };
  }

  let url = rawUrl.trim();
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

  const start = Date.now();
  try {
    const res = await fetchWithTimeout(url, { redirect: 'follow' }, 7000);
    const loadTimeMs = Date.now() - start;
    const html = await res.text();
    const lower = html.toLowerCase();

    const isHttps = res.url.startsWith('https://');
    const hasMobileViewport = lower.includes('name="viewport"') || lower.includes("name='viewport'");
    const hasWhatsApp = lower.includes('wa.me') || lower.includes('whatsapp.com') || lower.includes('whatsapp');
    const hasBookingOrForm = lower.includes('<form') || lower.includes('calendly') || lower.includes('book') || lower.includes('appointment');
    const hasMetaDesc = lower.includes('name="description"');

    // Extract emails from page
    const emailMatches = html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
    const extractedEmails = [...new Set(emailMatches.filter(e => !/\.(png|jpg|jpeg|gif|svg|webp|css|js)$/i.test(e)))].slice(0, 3);

    const issues = [];
    let score = 35;

    if (!isHttps) {
      issues.push('Not secure (Missing HTTPS/SSL — browsers show "Not Secure" warning)');
      score += 25;
    }
    if (!hasMobileViewport) {
      issues.push('Not mobile-friendly (Missing responsive viewport tag)');
      score += 25;
    }
    if (!hasWhatsApp) {
      issues.push('No instant WhatsApp / SMS chat widget for mobile visitors');
      score += 12;
    }
    if (!hasBookingOrForm) {
      issues.push('No online quote/booking form found on homepage');
      score += 15;
    }
    if (!hasMetaDesc) {
      issues.push('Missing SEO meta description tag');
      score += 8;
    }
    if (loadTimeMs > 3500) {
      issues.push(`Slow server response (${(loadTimeMs / 1000).toFixed(1)}s load time)`);
      score += 10;
    }

    if (issues.length === 0) {
      issues.push('Site works, but can upgrade with AI Lead Capture / Instant WhatsApp Funnel');
    }

    return {
      hasWebsite: true,
      url: res.url,
      status: res.ok ? 'LIVE' : `HTTP_${res.status}`,
      loadTimeMs,
      isHttps,
      hasMobileViewport,
      hasWhatsApp,
      hasBookingOrForm,
      extractedEmails,
      issues,
      opportunityScore: Math.min(96, score),
      recommendedOffer: score >= 65
        ? 'Modern Mobile Website Redesign + WhatsApp Lead Funnel ($300 - $600)'
        : 'Conversion Speed & WhatsApp Booking Widget Upgrade ($150 - $300)'
    };
  } catch (err) {
    return {
      hasWebsite: true,
      url,
      status: 'BROKEN_OR_OFFLINE',
      loadTimeMs: null,
      isHttps: url.startsWith('https'),
      hasMobileViewport: false,
      hasWhatsApp: false,
      hasBookingOrForm: false,
      extractedEmails: [],
      issues: ['Website is BROKEN, timed out, or offline — urgent fix needed!'],
      opportunityScore: 99,
      recommendedOffer: 'Emergency Website Replacement — Ready Today ($300 - $500)'
    };
  }
}

async function findLocalLeads(city, categoryKey, limit = 20) {
  // Step 1: Geocode city bounding box via Nominatim
  const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`;
  const geoRes = await fetchWithTimeout(geoUrl, {}, 10000);
  const geoData = await geoRes.json();

  if (!geoData || geoData.length === 0) {
    throw new Error(`Could not locate city "${city}". Try adding the country (e.g. "Nairobi, Kenya" or "Austin, TX").`);
  }

  const place = geoData[0];
  const [south, north, west, east] = place.boundingbox.map(Number);
  const osmFilter = CATEGORY_OSM_MAP[categoryKey] || CATEGORY_OSM_MAP.dentist;

  // Step 2: Query Overpass API for businesses in bounding box
  const overpassQuery = `
    [out:json][timeout:20];
    (
      node${osmFilter}(${south},${west},${north},${east});
      way${osmFilter}(${south},${west},${north},${east});
    );
    out center ${Math.min(limit * 2, 50)};
  `;

  let elements = [];
  const overpassEndpoints = [
    'https://overpass-api.de/api/interpreter',
    'https://lz4.overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter'
  ];

  for (const endpoint of overpassEndpoints) {
    try {
      const ovRes = await fetchWithTimeout(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(overpassQuery)
      }, 15000);
      if (ovRes.ok) {
        const ovJson = await ovRes.json();
        elements = ovJson.elements || [];
        break;
      }
    } catch (_) {
      // try next mirror
    }
  }

  // Filter elements that have at least a name
  const named = elements.filter(el => el.tags && el.tags.name);

  // Prioritize leads that have contact info or website so the user can contact them immediately
  named.sort((a, b) => {
    const aHasPhone = Boolean(a.tags.phone || a.tags['contact:phone'] || a.tags.email || a.tags['contact:email'] || a.tags.website || a.tags['contact:website']);
    const bHasPhone = Boolean(b.tags.phone || b.tags['contact:phone'] || b.tags.email || b.tags['contact:email'] || b.tags.website || b.tags['contact:website']);
    return Number(bHasPhone) - Number(aHasPhone);
  });

  const selected = named.slice(0, limit);

  // Audit up to 8 websites in parallel to keep response snappy
  const leads = await Promise.all(selected.map(async (el, idx) => {
    const t = el.tags || {};
    const name = t.name;
    const phone = t.phone || t['contact:phone'] || t['contact:mobile'] || '';
    const website = t.website || t['contact:website'] || t.url || '';
    const email = t.email || t['contact:email'] || '';
    const street = [t['addr:housenumber'], t['addr:street'], t['addr:suburb'], t['addr:city'] || city].filter(Boolean).join(', ');

    let audit;
    if (website && idx < 10) {
      audit = await auditWebsiteLive(website);
    } else {
      audit = await auditWebsiteLive(website ? website : null);
    }

    const allEmails = [...new Set([email, ...(audit.extractedEmails || [])].filter(Boolean))];

    return {
      id: `lead_${el.id || idx}`,
      name,
      category: categoryKey,
      city: place.display_name.split(',')[0],
      address: street || place.display_name.split(',').slice(0, 2).join(', '),
      phone,
      email: allEmails[0] || '',
      website,
      audit
    };
  }));

  // Sort by highest opportunity score first
  leads.sort((a, b) => b.audit.opportunityScore - a.audit.opportunityScore);

  return {
    city: place.display_name,
    category: categoryKey,
    totalFound: leads.length,
    leads
  };
}

// ============================================================================
// ENGINE 2: INSTANT CLIENT WEBSITE GENERATOR + PITCH BUILDER
// Generates a complete, conversion-optimized HTML landing page for any business
// ============================================================================
const NICHE_THEMES = {
  dentist: {
    badge: 'Premier Dental Care & Cosmetic Dentistry',
    headline: 'Bright, Healthy Smiles With Gentle Same-Week Appointments',
    subhead: 'Modern, pain-free dental care for your entire family. Emergency appointments, teeth whitening, implants, and routine checkups.',
    accent: '#0ea5e9',
    accentDark: '#0284c7',
    bgHero: 'linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)',
    services: [
      { title: 'Teeth Cleaning & Whitening', desc: 'Professional scaling, polishing, and laser whitening for a confident smile in 1 visit.', price: 'Book Consultation' },
      { title: 'Emergency Toothache Relief', desc: 'Same-day priority appointments for severe dental pain, broken teeth, or fillings.', price: 'Same-Day Slot' },
      { title: 'Dental Implants & Crowns', desc: 'Long-lasting, natural-looking tooth replacements and porcelain veneers.', price: 'Free Assessment' }
    ]
  },
  clinic: {
    badge: 'Trusted Medical Clinic & Specialist Care',
    headline: 'Compassionate Healthcare With Zero Waiting Room Hassle',
    subhead: 'Experienced doctors, fast lab diagnostics, and family healthcare consultations you can book directly from your phone.',
    accent: '#10b981',
    accentDark: '#059669',
    bgHero: 'linear-gradient(135deg, #064e3b 0%, #0f172a 100%)',
    services: [
      { title: 'General & Family Consultations', desc: 'Thorough diagnosis, treatment plans, and preventive checkups for adults and children.', price: 'Book Online' },
      { title: 'Rapid Lab & Diagnostics', desc: 'Accurate blood work, wellness panels, and same-day digital test results.', price: 'Fast Results' },
      { title: 'Specialist & Chronic Care', desc: 'Dedicated follow-up care and personalized treatment support.', price: 'Schedule Visit' }
    ]
  },
  plumber_trade: {
    badge: 'Licensed & Insured Home Service Specialists',
    headline: 'Fast, Reliable Repairs & Installations — Done Right the First Time',
    subhead: 'Upfront pricing, rapid emergency response, and guaranteed workmanship across your local area.',
    accent: '#f59e0b',
    accentDark: '#d97706',
    bgHero: 'linear-gradient(135deg, #1e293b 0%, #78350f 100%)',
    services: [
      { title: '24/7 Emergency Callouts', desc: 'Rapid dispatch for urgent leaks, electrical faults, roof damage, or system breakdowns.', price: 'Fast Dispatch' },
      { title: 'New Installations & Upgrades', desc: 'Complete residential and commercial installations with full warranty coverage.', price: 'Free Quote' },
      { title: 'Preventive Maintenance Plans', desc: 'Annual inspections and servicing to prevent costly breakdowns before they happen.', price: 'Inspection' }
    ]
  },
  car_repair: {
    badge: 'Certified Auto Repair & Diagnostics Center',
    headline: 'Honest Mechanics. Transparent Pricing. Same-Day Turnaround.',
    subhead: 'Computerized engine diagnostics, brake servicing, suspension, and full maintenance without dealership markups.',
    accent: '#ef4444',
    accentDark: '#dc2626',
    bgHero: 'linear-gradient(135deg, #111827 0%, #7f1d1d 100%)',
    services: [
      { title: 'Full Service & Oil Change', desc: 'Complete multi-point safety inspection, premium oil & filter replacement.', price: 'Book Bay' },
      { title: 'Computerized Diagnostics', desc: 'Pinpoint engine, transmission, and electrical warning lights accurately.', price: 'Scan Today' },
      { title: 'Brakes, Tires & Suspension', desc: 'OEM-grade pads, discs, shock absorbers, and precision wheel alignment.', price: 'Free Estimate' }
    ]
  },
  real_estate: {
    badge: 'Premier Property & Real Estate Advisory',
    headline: 'Find, Buy, or Lease High-Value Properties With Zero Stress',
    subhead: 'Verified listings, transparent valuations, and dedicated property management tailored to your goals.',
    accent: '#6366f1',
    accentDark: '#4f46e5',
    bgHero: 'linear-gradient(135deg, #0f172a 0%, #312e81 100%)',
    services: [
      { title: 'Property Sales & Acquisitions', desc: 'Curated residential and commercial properties with full legal & title verification.', price: 'View Listings' },
      { title: 'Rental & Letting Management', desc: 'End-to-end tenant vetting, rent collection, and maintenance management.', price: 'Landlord Inquiry' },
      { title: 'Free Property Valuation', desc: 'Get an accurate current market appraisal for your home, land, or commercial unit.', price: 'Request Valuation' }
    ]
  },
  default: {
    badge: 'Top-Rated Local Professional Service',
    headline: 'Excellence, Reliability & Personalized Service You Can Trust',
    subhead: 'Connect with our team instantly online or via WhatsApp for priority scheduling and transparent pricing.',
    accent: '#3b82f6',
    accentDark: '#2563eb',
    bgHero: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
    services: [
      { title: 'Priority Consultation', desc: 'Speak directly with our senior specialists to get a tailored solution and quote.', price: 'Book Now' },
      { title: 'Full-Service Package', desc: 'End-to-end execution with dedicated support and guaranteed satisfaction.', price: 'Get Quote' },
      { title: 'Express Support & Follow-Up', desc: 'Fast turnaround times and direct WhatsApp communication from start to finish.', price: 'Instant Chat' }
    ]
  }
};

function generateClientWebsite({ name, category, city, phone, email, address, issues = [] }) {
  const theme = NICHE_THEMES[category] || NICHE_THEMES.default;
  const slug = (name || 'client-business')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'preview-site';

  const cleanPhone = (phone || '+1 (555) 234-5678').trim();
  const waDigits = cleanPhone.replace(/[^0-9]/g, '') || '15552345678';
  const cleanCity = city || 'Your City';
  const cleanAddress = address || cleanCity;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${name} | ${cleanCity} — Official Website & Online Booking</title>
  <meta name="description" content="${name} in ${cleanCity}. ${theme.subhead}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --accent: ${theme.accent};
      --accent-dark: ${theme.accentDark};
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; color: #0f172a; background: #f8fafc; line-height: 1.6; }
    .preview-banner {
      background: #fef3c7; border-bottom: 2px solid #f59e0b; color: #92400e;
      padding: 10px 20px; text-align: center; font-size: 13px; font-weight: 600;
    }
    header {
      background: rgba(15, 23, 42, 0.95); color: #fff; padding: 16px 5%;
      display: flex; justify-content: space-between; align-items: center;
      position: sticky; top: 0; z-index: 50; backdrop-filter: blur(8px);
    }
    .brand { font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
    .brand span { color: var(--accent); }
    .nav-cta {
      background: var(--accent); color: #fff; text-decoration: none;
      padding: 10px 18px; border-radius: 8px; font-weight: 600; font-size: 14px;
      transition: 0.2s;
    }
    .nav-cta:hover { background: var(--accent-dark); }
    .hero {
      background: ${theme.bgHero}; color: #fff; padding: 80px 5% 90px;
      display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center;
    }
    @media (max-width: 820px) { .hero { grid-template-columns: 1fr; padding: 50px 5%; } }
    .badge {
      display: inline-block; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
      padding: 6px 14px; border-radius: 999px; font-size: 13px; font-weight: 600; margin-bottom: 18px;
    }
    .hero h1 { font-size: clamp(30px, 4.5vw, 50px); line-height: 1.12; font-weight: 800; margin-bottom: 18px; }
    .hero p { font-size: 18px; color: #cbd5e1; margin-bottom: 28px; max-width: 600px; }
    .btn-row { display: flex; flex-wrap: wrap; gap: 14px; }
    .btn-primary {
      background: var(--accent); color: #fff; padding: 15px 26px; border-radius: 10px;
      font-weight: 700; text-decoration: none; font-size: 16px; display: inline-flex; align-items: center; gap: 8px;
    }
    .btn-wa {
      background: #22c55e; color: #fff; padding: 15px 26px; border-radius: 10px;
      font-weight: 700; text-decoration: none; font-size: 16px; display: inline-flex; align-items: center; gap: 8px;
    }
    .booking-card {
      background: #fff; color: #0f172a; padding: 28px; border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.25);
    }
    .booking-card h3 { font-size: 20px; margin-bottom: 6px; }
    .booking-card p { font-size: 13px; color: #64748b; margin-bottom: 18px; }
    .form-group { margin-bottom: 12px; }
    .form-group label { display: block; font-size: 12px; font-weight: 600; color: #475569; margin-bottom: 4px; }
    .form-group input, .form-group select {
      width: 100%; padding: 11px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px;
    }
    .form-submit {
      width: 100%; background: var(--accent); color: #fff; border: none; padding: 13px;
      border-radius: 8px; font-weight: 700; font-size: 15px; cursor: pointer; margin-top: 6px;
    }
    .section { padding: 70px 5%; max-width: 1200px; margin: 0 auto; }
    .section-title { text-align: center; margin-bottom: 45px; }
    .section-title h2 { font-size: 32px; font-weight: 800; margin-bottom: 10px; }
    .section-title p { color: #64748b; font-size: 16px; }
    .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
    .card {
      background: #fff; padding: 28px; border-radius: 14px; border: 1px solid #e2e8f0;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(15,23,42,0.08); }
    .card h3 { font-size: 19px; margin-bottom: 10px; }
    .card p { color: #475569; font-size: 14px; margin-bottom: 18px; }
    .card-tag {
      display: inline-block; font-size: 13px; font-weight: 700; color: var(--accent);
      background: #f1f5f9; padding: 6px 12px; border-radius: 6px;
    }
    .trust-strip {
      background: #fff; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;
      padding: 28px 5%; display: flex; flex-wrap: wrap; justify-content: space-around; gap: 20px; text-align: center;
    }
    .stat strong { display: block; font-size: 26px; font-weight: 800; color: var(--accent); }
    .stat span { font-size: 13px; color: #64748b; font-weight: 500; }
    footer {
      background: #0f172a; color: #94a3b8; padding: 50px 5%; text-align: center; font-size: 14px;
    }
    footer strong { color: #fff; }
  </style>
</head>
<body>
  <div class="preview-banner">
    ✨ LIVE PREVIEW PREPARED FOR <strong>${name.toUpperCase()}</strong> (${cleanCity}) — Mobile-Optimized + Instant WhatsApp Booking Ready
  </div>
  <header>
    <div class="brand">${name}<span>.</span></div>
    <a href="tel:${cleanPhone}" class="nav-cta">📞 Call ${cleanPhone}</a>
  </header>

  <section class="hero">
    <div>
      <div class="badge">📍 Serving ${cleanCity} • ${theme.badge}</div>
      <h1>${theme.headline}</h1>
      <p>${theme.subhead}</p>
      <div class="btn-row">
        <a href="#booking" class="btn-primary">📅 Book Appointment Online</a>
        <a href="https://wa.me/${waDigits}?text=${encodeURIComponent(`Hi ${name}, I found your website and would like to book/inquire.`)}" target="_blank" class="btn-wa">💬 Chat on WhatsApp</a>
      </div>
    </div>

    <div class="booking-card" id="booking">
      <h3>Request Priority Callback / Quote</h3>
      <p>Fill out in 30 seconds — our team at ${name} will confirm immediately.</p>
      <form onsubmit="event.preventDefault(); alert('Demo Booking Captured! When connected, this sends directly to ${name} via WhatsApp & Email.');">
        <div class="form-group">
          <label>Your Full Name</label>
          <input type="text" placeholder="e.g. Sarah Jenkins" required />
        </div>
        <div class="form-group">
          <label>Phone / WhatsApp Number</label>
          <input type="tel" placeholder="e.g. +1 555 019 2834" required />
        </div>
        <div class="form-group">
          <label>How Can We Help You?</label>
          <select>
            ${theme.services.map(s => `<option>${s.title}</option>`).join('')}
            <option>General Inquiry / Custom Quote</option>
          </select>
        </div>
        <button type="submit" class="form-submit">Get Instant Confirmation →</button>
      </form>
    </div>
  </section>

  <div class="trust-strip">
    <div class="stat"><strong>4.9 ★</strong><span>Customer Satisfaction</span></div>
    <div class="stat"><strong>Same-Day</strong><span>Response & Scheduling</span></div>
    <div class="stat"><strong>100%</strong><span>Verified Local Specialists</span></div>
    <div class="stat"><strong>${cleanCity}</strong><span>Convenient Location</span></div>
  </div>

  <section class="section">
    <div class="section-title">
      <h2>Our Core Services at ${name}</h2>
      <p>Tailored solutions backed by professional care and transparent pricing.</p>
    </div>
    <div class="grid-3">
      ${theme.services.map(s => `
        <div class="card">
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <span class="card-tag">${s.price} →</span>
        </div>
      `).join('')}
    </div>
  </section>

  <footer>
    <p><strong>${name}</strong> • 📍 ${cleanAddress} • 📞 ${cleanPhone} ${email ? `• ✉️ ${email}` : ''}</p>
    <p style="margin-top:10px;">© ${new Date().getFullYear()} ${name}. All Rights Reserved.</p>
  </footer>
</body>
</html>`;

  const siteFolder = path.join(SITES_DIR, slug);
  if (!fs.existsSync(siteFolder)) fs.mkdirSync(siteFolder, { recursive: true });
  const filePath = path.join(siteFolder, 'index.html');
  fs.writeFileSync(filePath, html, 'utf-8');

  const previewUrl = `http://localhost:${PORT}/sites/${slug}/index.html`;
  const mainIssue = issues[0] || 'your current online presence is missing a fast mobile booking & WhatsApp capture page';

  const whatsappPitch = `Hi ${name} team! 👋 I was searching for ${category.replace('_', ' ')}s in ${cleanCity} today and noticed ${mainIssue.toLowerCase()}.\n\nSince I build high-converting sites for local businesses, I went ahead and mocked up a live, mobile-ready version specifically for *${name}* with instant WhatsApp booking built in:\n👉 [Paste Live Link / Screenshot]\n\nNo pressure at all—if you like how it looks, I can connect it to your domain and WhatsApp today for a flat one-time setup. Want me to send a quick 30-second video walkthrough?`;

  const emailSubject = `Built a new mobile booking page preview for ${name} (${cleanCity})`;
  const emailPitch = `Hi ${name} Team,\n\nI was looking at ${name} in ${cleanCity} and noticed that ${mainIssue}.\n\nInstead of sending a generic pitch, I went ahead and built a working mobile website preview customized for ${name}—complete with an instant quote/appointment form and click-to-WhatsApp button:\n\nLive Preview: ${previewUrl} (or attach screenshot)\n\nIf you want it, I can have it live on your domain within 24 hours for a flat $295 one-time fee (no expensive agency retainers).\n\nWould you be open to a quick 5-minute chat today?\n\nBest regards,`;

  const callScript = `"Hi, is this the owner/manager at ${name}? Great—I'll be super brief. I noticed when people look up ${name} in ${cleanCity} on their phone, ${mainIssue}. I actually already built a modern mobile version of your site with an instant WhatsApp booking form this morning so you can see it live. Can I text or WhatsApp you the preview link right now to check out?"`;

  return {
    slug,
    filePath,
    previewUrl,
    pitches: {
      whatsappPitch,
      whatsappSendUrl: waDigits ? `https://wa.me/${waDigits}?text=${encodeURIComponent(whatsappPitch)}` : null,
      emailSubject,
      emailPitch,
      callScript
    }
  };
}

// ============================================================================
// ENGINE 3: REAL-TIME FREELANCE GIG SNIPER (Reddit Hiring + RemoteOK)
// Fetches live paying gigs posted in the last 72h that Antigravity can build
// ============================================================================
async function fetchLiveGigs() {
  const subreddits = ['forhire', 'slavelabour', 'DoneDirtCheap', 'freelance_forhire'];
  const allGigs = [];

  await Promise.all(subreddits.map(async (sub) => {
    try {
      const url = `https://www.reddit.com/r/${sub}/new.json?limit=25`;
      const res = await fetchWithTimeout(url, {}, 8000);
      if (!res.ok) return;
      const data = await res.json();
      const posts = (data?.data?.children || []).map(c => c.data);

      for (const p of posts) {
        const title = p.title || '';
        const lowerTitle = title.toLowerCase();
        // Only keep [Hiring] or [Task] posts, exclude [For Hire] or [Offer]
        const isBuyer = lowerTitle.includes('[hiring]') || lowerTitle.includes('[task]') || lowerTitle.startsWith('hiring');
        const isSeller = lowerTitle.includes('[for hire]') || lowerTitle.includes('[offer]');
        if (!isBuyer || isSeller) continue;

        const text = (p.selftext || '').slice(0, 600);
        const combined = (title + ' ' + text).toLowerCase();

        // Classify gig type & speed score
        let category = 'General Digital Task';
        let canAutoBuild = 'High';
        if (/scrape|scraping|crawler|extract|csv|excel|spreadsheet|data|lead/.test(combined)) {
          category = '🕸️ Scraping / Data / Excel';
          canAutoBuild = '⚡ Instant (5 mins with Antigravity)';
        } else if (/website|landing page|html|react|nextjs|wordpress|frontend|web app|script|python|bot|automation|api/.test(combined)) {
          category = '💻 Code / Website / Automation';
          canAutoBuild = '⚡ Instant (10 mins with Antigravity)';
        } else if (/video|edit|shorts|reels|tiktok|caption|subtitle|audio|ffmpeg/.test(combined)) {
          category = '🎬 Video / Shorts (RTX 4060 + FFmpeg)';
          canAutoBuild = '🔥 Fast (Local GPU Pipeline)';
        }

        allGigs.push({
          id: p.id,
          source: `r/${sub}`,
          title: title.replace(/&amp;/g, '&'),
          description: text.replace(/&amp;/g, '&'),
          author: p.author,
          url: `https://www.reddit.com${p.permalink}`,
          createdUtc: p.created_utc,
          ageMinutes: Math.max(1, Math.round((Date.now() / 1000 - p.created_utc) / 60)),
          category,
          canAutoBuild
        });
      }
    } catch (_) {
      // Ignore single subreddit timeout
    }
  }));

  allGigs.sort((a, b) => a.ageMinutes - b.ageMinutes);
  return allGigs.slice(0, 40);
}

// ============================================================================
// ENGINE 4: CSV / EXCEL READY EXPORT & DIGITAL PRODUCT PACKAGER
// ============================================================================
function exportLeadsToCsv(leads, city, category) {
  const headers = ['Business Name', 'Category', 'City', 'Address', 'Phone', 'Email', 'Website', 'Website Status', 'Opportunity Score', 'Top Issue', 'Recommended Offer'];
  const rows = leads.map(l => [
    l.name,
    l.category,
    l.city,
    l.address,
    l.phone,
    l.email,
    l.website,
    l.audit?.status || '',
    l.audit?.opportunityScore || '',
    (l.audit?.issues || [])[0] || '',
    l.audit?.recommendedOffer || ''
  ].map(val => `"${String(val || '').replace(/"/g, '""')}"`).join(','));

  const csvContent = [headers.join(','), ...rows].join('\r\n');
  const fileName = `leads_${category}_${city.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${Date.now()}.csv`;
  const filePath = path.join(EXPORTS_DIR, fileName);
  fs.writeFileSync(filePath, '\uFEFF' + csvContent, 'utf-8'); // BOM for Excel compatibility
  return { fileName, filePath, downloadUrl: `/exports/${fileName}` };
}

// ============================================================================
// HTTP SERVER ROUTER
// ============================================================================
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = parsedUrl.pathname;

  try {
    // API: System Hardware & Stack Status
    if (pathname === '/api/status' && req.method === 'GET') {
      return sendJson(res, 200, {
        status: 'online',
        hardware: {
          cpu: '13th Gen Intel Core i7-13620H (10 Cores / 16 Threads)',
          gpu: 'NVIDIA GeForce RTX 4060 Laptop GPU (8GB VRAM)',
          ram: '16 GB DDR5',
          tools: ['Node.js v24', 'Python', 'FFmpeg', 'Git', 'Antigravity AI']
        },
        generatedSitesCount: fs.existsSync(SITES_DIR) ? fs.readdirSync(SITES_DIR).length : 0,
        exportsCount: fs.existsSync(EXPORTS_DIR) ? fs.readdirSync(EXPORTS_DIR).length : 0
      });
    }

    // API: Engine 1 - Search & Audit Local Business Leads
    if (pathname === '/api/leads/search' && req.method === 'POST') {
      const body = await parseBody(req);
      const city = (body.city || 'Nairobi').trim();
      const category = (body.category || 'dentist').trim();
      const limit = Math.min(Number(body.limit) || 15, 30);
      const result = await findLocalLeads(city, category, limit);
      const exported = exportLeadsToCsv(result.leads, city, category);
      return sendJson(res, 200, { ...result, csvExport: exported });
    }

    // API: Engine 2 - Generate Custom Client Website + Pitches
    if (pathname === '/api/sites/generate' && req.method === 'POST') {
      const body = await parseBody(req);
      if (!body.name) return sendJson(res, 400, { error: 'Business name is required' });
      const site = generateClientWebsite(body);
      return sendJson(res, 200, site);
    }

    // API: List already generated client websites
    if (pathname === '/api/sites/list' && req.method === 'GET') {
      const slugs = fs.existsSync(SITES_DIR)
        ? fs.readdirSync(SITES_DIR).filter(f => fs.existsSync(path.join(SITES_DIR, f, 'index.html')))
        : [];
      return sendJson(res, 200, {
        sites: slugs.map(slug => ({
          slug,
          previewUrl: `http://localhost:${PORT}/sites/${slug}/index.html`
        }))
      });
    }

    // API: Engine 3 - Live Freelance Gig Sniper
    if (pathname === '/api/gigs/live' && req.method === 'GET') {
      const gigs = await fetchLiveGigs();
      return sendJson(res, 200, { count: gigs.length, gigs });
    }

    // Serve generated client websites under /sites/<slug>/index.html
    if (pathname.startsWith('/sites/')) {
      const rel = pathname.replace(/^\/sites\//, '');
      const safePath = path.normalize(path.join(SITES_DIR, rel));
      if (safePath.startsWith(SITES_DIR) && fs.existsSync(safePath) && fs.statSync(safePath).isFile()) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(fs.readFileSync(safePath));
      }
    }

    // Serve exported CSV files under /exports/<file>
    if (pathname.startsWith('/exports/')) {
      const rel = pathname.replace(/^\/exports\//, '');
      const safePath = path.normalize(path.join(EXPORTS_DIR, rel));
      if (safePath.startsWith(EXPORTS_DIR) && fs.existsSync(safePath) && fs.statSync(safePath).isFile()) {
        res.writeHead(200, {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="${path.basename(safePath)}"`
        });
        return res.end(fs.readFileSync(safePath));
      }
    }

    // Serve static frontend files from /public
    const filePath = pathname === '/'
      ? path.join(PUBLIC_DIR, 'index.html')
      : path.normalize(path.join(PUBLIC_DIR, pathname));

    if (filePath.startsWith(PUBLIC_DIR) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain; charset=utf-8' });
      return res.end(fs.readFileSync(filePath));
    }

    sendJson(res, 404, { error: 'Not found' });
  } catch (err) {
    sendJson(res, 500, { error: err.message || 'Internal Server Error' });
  }
});

server.listen(PORT, () => {
  console.log(`Daily Cashflow Command Center running at http://localhost:${PORT}`);
});
