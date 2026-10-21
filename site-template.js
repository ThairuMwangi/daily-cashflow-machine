// Multi-Variant High-End Editorial Website Generator
// Combines 4 Distinct Architectural Layouts + Rotating Verified Stock Photo Pools + Nielsen's 10 Usability Heuristics

const DESIGN_VARIANTS = [
  {
    id: 'emerald-botanical',
    label: 'Botanical Forest & Circular Collage',
    fontUrl: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap',
    headingFont: "'Plus Jakarta Sans', sans-serif",
    bodyFont: "'DM Sans', sans-serif",
    primary900: '#0B3629',
    primary800: '#114B3A',
    accent600: '#198754',
    accent500: '#22A065',
    accent100: '#E6F4ED',
    ctaGold: '#F5A623',
    ctaGoldHover: '#E09112',
    canvas50: '#F7F7F2',
    canvas100: '#EFEFE8',
    heroLayout: 'circular-collage',
    servicesLayout: 'overlapping-band',
    stepsLayout: 'circle-cards'
  },
  {
    id: 'nordic-sapphire',
    label: 'Nordic Royal Navy & Arch-Frame Editorial',
    fontUrl: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap',
    headingFont: "'Outfit', sans-serif",
    bodyFont: "'DM Sans', sans-serif",
    primary900: '#0C1F38',
    primary800: '#153259',
    accent600: '#1D4ED8',
    accent500: '#2563EB',
    accent100: '#DBEAFE',
    ctaGold: '#EA580C',
    ctaGoldHover: '#C2410C',
    canvas50: '#FAF8F5',
    canvas100: '#F2EFE9',
    heroLayout: 'arch-editorial',
    servicesLayout: 'horizontal-split',
    stepsLayout: 'minimal-numbered'
  },
  {
    id: 'modern-teal-slate',
    label: 'Ocean Teal & Staggered Dual-Column',
    fontUrl: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap',
    headingFont: "'Sora', sans-serif",
    bodyFont: "'DM Sans', sans-serif",
    primary900: '#082F36',
    primary800: '#0E4650',
    accent600: '#0D9488',
    accent500: '#14B8A6',
    accent100: '#CCFBF1',
    ctaGold: '#F59E0B',
    ctaGoldHover: '#D97706',
    canvas50: '#F4F8F8',
    canvas100: '#E6F0F0',
    heroLayout: 'staggered-columns',
    servicesLayout: 'overlapping-band',
    stepsLayout: 'minimal-numbered'
  }
];

// Rotating Pools of Verified 200-OK High-Resolution Stock Photos
const CLINICAL_PHOTO_POOLS = [
  {
    heroMain: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85',
    heroSub: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    safety: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=85',
    doctor: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80',
    serviceImgs: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80'
    ],
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    ]
  },
  {
    heroMain: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85',
    heroSub: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
    safety: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=85',
    doctor: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80',
    serviceImgs: [
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80'
    ],
    avatars: [
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    ]
  },
  {
    heroMain: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=85',
    heroSub: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
    safety: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=85',
    doctor: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80',
    serviceImgs: [
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=700&q=80'
    ],
    avatars: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    ]
  },
  {
    heroMain: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=85',
    heroSub: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80',
    safety: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=85',
    doctor: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80',
    serviceImgs: [
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80'
    ],
    avatars: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    ]
  }
];

const NICHE_CONTENT = {
  dentist: {
    eyebrow: 'PREMIER DENTAL & COSMETIC STUDIO',
    headlineMain: 'Gentle, Modern Dental Care You Can',
    headlineAccent: 'Trust.',
    subhead: 'Experience pain-free checkups, laser teeth whitening, zirconia crowns, and family dentistry in a calm, spotless clinical suite — with transparent pricing and instant booking.',
    yearsBadge: '15+',
    yearsLabel: 'Years of Clinical Excellence',
    aboutTitle: 'Leading the Way in Gentle Dental Excellence',
    aboutCopy: 'Our clinic combines experienced dental specialists, low-radiation digital imaging, and hospital-grade sterilization so every visit feels calm, predictable, and unhurried.',
    trustChecks: [
      'Licensed & Certified Dental Specialists',
      'Pain-Free Modern Local Anesthesia & Digital X-Rays',
      'Transparent Pricing — Insurance, Card & M-Pesa Accepted'
    ],
    safetyTitle: 'Following Strict Clinical Sterilization Protocols',
    safetyCopy: 'Every instrument undergoes multi-stage autoclave sterilization and sealed single-patient packaging to guarantee complete clinical safety for you and your family.',
    safetyChecks: [
      'Hospital-Grade Autoclave Instrument Sterilization',
      'HEPA-Filtered Private Treatment Suites',
      'Certified & Continuously Trained Dental Hygiene Team'
    ],
    offerTitle: 'Get 20% Off Your First Dental Checkup & Ultrasonic Scaling',
    offerBadge: '20% OFF',
    services: [
      { title: 'Scaling, Polishing & Whitening', category: 'cosmetic', price: 'Consultation + Cleaning', desc: 'Ultrasonic plaque removal, stain polishing, and enamel-safe laser whitening.' },
      { title: 'Emergency Toothache & Fillings', category: 'general', price: 'Same-Day Priority Slot', desc: 'Immediate pain relief, tooth-colored composite fillings, and gentle root canal care.' },
      { title: 'Dental Implants & Crowns', category: 'specialized', price: 'Full Assessment Included', desc: 'Natural-looking zirconia crowns, bridges, and permanent titanium dental implants.' },
      { title: 'Braces & Clear Aligners', category: 'cosmetic', price: 'Flexible Monthly Plans', desc: 'Modern orthodontic alignment for children, teens, and adults with discreet options.' }
    ]
  },
  clinic: {
    eyebrow: 'ACCREDITED MEDICAL & DIAGNOSTIC CENTER',
    headlineMain: 'Compassionate Healthcare You Can',
    headlineAccent: 'Rely On.',
    subhead: 'Attentive doctors, same-day laboratory diagnostics, and family wellness consultations with zero waiting-room stress and instant online appointment scheduling.',
    yearsBadge: '15+',
    yearsLabel: 'Years Caring for Families',
    aboutTitle: 'Patient-First Medical Excellence Without the Wait',
    aboutCopy: 'We combine senior physicians, rapid in-house lab testing, and digital medical records so you get accurate answers and a clear treatment plan on the very same day.',
    trustChecks: [
      'Board-Certified Physicians & Specialist Consultants',
      'Fast In-House Laboratory & Ultrasound Diagnostics',
      'Direct Insurance Billing, Card & Mobile Money Accepted'
    ],
    safetyTitle: 'Following International Clinical & Safety Protocols',
    safetyCopy: 'Our medical center adheres to strict WHO and Ministry of Health infection-control standards across every consultation suite and laboratory.',
    safetyChecks: [
      'ISO-Standard Calibrated Diagnostic Lab Equipment',
      'Sanitized Private Consultation Suites',
      'Strict Patient Data Privacy & Confidentiality'
    ],
    offerTitle: 'Get 20% Off Full Wellness & Executive Blood Checkup',
    offerBadge: '20% OFF',
    services: [
      { title: 'General & Family Consultation', category: 'general', price: 'Same-Day Appointment', desc: 'Thorough medical assessment, prescription care, and specialist referrals.' },
      { title: 'Full Wellness & Lab Panels', category: 'specialized', price: 'Results in 2–4 Hours', desc: 'Comprehensive blood work, organ function, thyroid, and preventive screening.' },
      { title: 'Pediatric & Child Wellness', category: 'general', price: 'Priority Family Slot', desc: 'Gentle pediatric checkups, vaccinations, and acute illness care for children.' },
      { title: 'Chronic & Specialist Care', category: 'specialized', price: 'Personalized Plan', desc: 'Dedicated management for blood pressure, diabetes, nutrition, and women’s health.' }
    ]
  }
};

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

function renderHeroVisual(v, photos, c, cleanName) {
  if (v.heroLayout === 'arch-editorial') {
    return `
      <div class="hero-arch-wrap">
        <img src="${photos.heroMain}" alt="${cleanName}" class="arch-main-img" loading="eager" />
        <img src="${photos.heroSub}" alt="${cleanName} Suite" class="arch-sub-img" loading="eager" />
        <div class="arch-glass-card">
          <div style="font-size:22px; font-weight:800; color:var(--primary-900);">4.9 ★ Rated</div>
          <div style="font-size:12px; color:var(--slate-700); font-weight:600;">${c.yearsBadge} ${c.yearsLabel}</div>
        </div>
      </div>
    `;
  }
  if (v.heroLayout === 'magazine-frame') {
    return `
      <div class="hero-mag-wrap">
        <img src="${photos.heroMain}" alt="${cleanName}" class="mag-main-img" loading="eager" />
        <div class="mag-pill-top">✦ Private Executive Suites</div>
        <div class="mag-card-bottom">
          <img src="${photos.doctor}" alt="Lead Specialist" />
          <div>
            <strong>${c.yearsBadge} ${c.yearsLabel}</strong>
            <span>Verified Specialists • Same-Day Booking</span>
          </div>
        </div>
      </div>
    `;
  }
  if (v.heroLayout === 'staggered-columns') {
    return `
      <div class="hero-stagger-wrap">
        <img src="${photos.heroMain}" alt="${cleanName}" class="stagger-col-1" loading="eager" />
        <img src="${photos.heroSub}" alt="${cleanName} Care" class="stagger-col-2" loading="eager" />
        <div class="stagger-center-badge">
          <strong>${c.yearsBadge}</strong>
          <span>${c.yearsLabel}</span>
        </div>
      </div>
    `;
  }
  // Default: circular-collage
  return `
    <div class="hero-collage">
      <img src="${photos.heroMain}" alt="${cleanName} Specialist Team" class="collage-main" loading="eager" />
      <img src="${photos.heroSub}" alt="${cleanName} Modern Care" class="collage-sub" loading="eager" />
      <div class="collage-badge">
        <strong>${c.yearsBadge}</strong>
        <span>${c.yearsLabel}</span>
      </div>
    </div>
  `;
}

function renderServicesSection(v, servicesWithImgs, cleanName, waDigits) {
  if (v.servicesLayout === 'horizontal-split') {
    return `
      <section class="section" id="services" style="padding-top: 40px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:20px; margin-bottom:36px;">
          <div>
            <span class="eyebrow">OUR SPECIALTIES</span>
            <h2 style="font-size: clamp(28px, 3.2vw, 40px);">Tailored Care Designed Around You</h2>
          </div>
          <div class="filter-pills-light">
            <button class="filter-pill-light active" onclick="filterServices('all', this)">All Services</button>
            <button class="filter-pill-light" onclick="filterServices('general', this)">General & Priority</button>
            <button class="filter-pill-light" onclick="filterServices('cosmetic', this)">Cosmetic & Preventive</button>
            <button class="filter-pill-light" onclick="filterServices('specialized', this)">Specialized</button>
          </div>
        </div>
        <div class="horiz-grid">
          ${servicesWithImgs.map(s => `
            <div class="service-card horiz-card" data-category="${s.category}">
              <img src="${s.img}" alt="${s.title}" loading="lazy" />
              <div class="horiz-card-body">
                <div>
                  <span class="price-tag">${s.price}</span>
                  <h3 style="margin-top:6px;">${s.title}</h3>
                  <p>${s.desc}</p>
                </div>
                <button class="btn btn-outline" style="padding:8px 16px; min-height:38px; font-size:13px; width:fit-content;" onclick="selectService('${s.title.replace(/'/g, "\\'")}')">Select Service +</button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  if (v.servicesLayout === 'editorial-portrait') {
    return `
      <section class="section" id="services" style="background: var(--canvas-100); border-radius: 32px; margin: 20px auto;">
        <div style="text-align:center; max-width:660px; margin:0 auto 32px;">
          <span class="eyebrow">CURATED TREATMENTS & SERVICES</span>
          <h2 style="font-size: clamp(28px, 3.4vw, 42px); margin-bottom:12px;"> Bespoke Clinical & Aesthetic Care</h2>
          <div class="filter-pills-light" style="justify-content:center; margin-top:16px;">
            <button class="filter-pill-light active" onclick="filterServices('all', this)">All</button>
            <button class="filter-pill-light" onclick="filterServices('general', this)">General</button>
            <button class="filter-pill-light" onclick="filterServices('cosmetic', this)">Cosmetic</button>
            <button class="filter-pill-light" onclick="filterServices('specialized', this)">Specialized</button>
          </div>
        </div>
        <div class="services-cards-wrap" style="margin-top:0; padding:0;">
          ${servicesWithImgs.map(s => `
            <div class="service-card" data-category="${s.category}" style="border-radius: 22px;">
              <img src="${s.img}" alt="${s.title}" style="height:230px;" loading="lazy" />
              <div class="service-card-body">
                <div>
                  <h3>${s.title}</h3>
                  <p>${s.desc}</p>
                </div>
                <div class="service-card-footer">
                  <span class="price-tag">${s.price}</span>
                  <button class="plus-btn" onclick="selectService('${s.title.replace(/'/g, "\\'")}')">→</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  // Default: overlapping-band (GreenCare style)
  return `
    <section class="services-band" id="services">
      <div class="services-band-inner">
        <div>
          <span class="eyebrow" style="color:var(--accent-100);">WHAT WE OFFER</span>
          <h2>Professional Services Tailored for Every Need</h2>
        </div>
        <div class="services-band-right">
          <p>Select any service below to view transparent details or click the <strong>+</strong> button to pre-fill your booking request immediately.</p>
          <div class="filter-pills">
            <button class="filter-pill active" onclick="filterServices('all', this)">All Services</button>
            <button class="filter-pill" onclick="filterServices('general', this)">General & Priority</button>
            <button class="filter-pill" onclick="filterServices('cosmetic', this)">Cosmetic & Preventive</button>
            <button class="filter-pill" onclick="filterServices('specialized', this)">Specialized Care</button>
          </div>
        </div>
      </div>
    </section>

    <div class="services-cards-wrap">
      ${servicesWithImgs.map(s => `
        <div class="service-card" data-category="${s.category}">
          <img src="${s.img}" alt="${s.title}" loading="lazy" />
          <div class="service-card-body">
            <div>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
            <div class="service-card-footer">
              <span class="price-tag">${s.price}</span>
              <button class="plus-btn" title="Select ${s.title} for booking" onclick="selectService('${s.title.replace(/'/g, "\\'")}')">+</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function buildHighEndSiteHtml({ name, category, city, phone, email, address, variantIndex, watermark = true }) {
  const cleanName = (name || 'Premier Care Studio').trim();
  const hash = hashString(cleanName);

  const vIdx = typeof variantIndex === 'number' ? variantIndex % DESIGN_VARIANTS.length : hash % DESIGN_VARIANTS.length;
  const pIdx = (typeof variantIndex === 'number' ? variantIndex : Math.floor(hash / 3)) % CLINICAL_PHOTO_POOLS.length;

  const v = DESIGN_VARIANTS[vIdx];
  const photos = CLINICAL_PHOTO_POOLS[pIdx];
  const c = NICHE_CONTENT[category] || NICHE_CONTENT.dentist;

  const servicesWithImgs = c.services.map((s, i) => ({
    ...s,
    img: photos.serviceImgs[i % photos.serviceImgs.length]
  }));

  const cleanPhone = (phone || '+254 700 123 456').trim();
  const waDigits = cleanPhone.replace(/[^0-9]/g, '') || '254700123456';
  const cleanCity = (city || 'Nairobi').trim();
  const cleanAddress = (address || cleanCity).trim();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${cleanName} — ${cleanCity} | Official Website & Online Booking</title>
  <meta name="description" content="${cleanName} in ${cleanCity}. ${c.subhead}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${v.fontUrl}" rel="stylesheet">
  <style>
    :root {
      --primary-900: ${v.primary900};
      --primary-800: ${v.primary800};
      --accent-600: ${v.accent600};
      --accent-500: ${v.accent500};
      --accent-100: ${v.accent100};
      --gold-500: ${v.ctaGold};
      --gold-600: ${v.ctaGoldHover};
      --canvas-50: ${v.canvas50};
      --canvas-100: ${v.canvas100};
      --white: #FFFFFF;
      --slate-900: #111827;
      --slate-700: #374151;
      --slate-500: #6B7280;
      --border: #E5E7EB;
      --radius-lg: 20px;
      --radius-md: 14px;
      --shadow-soft: 0 12px 32px -8px rgba(15, 23, 42, 0.08);
      --shadow-card: 0 22px 48px -12px rgba(15, 23, 42, 0.15);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: ${v.bodyFont};
      background-color: var(--canvas-50);
      color: var(--slate-900);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    h1, h2, h3, h4 {
      font-family: ${v.headingFont};
      letter-spacing: -0.02em;
    }

    /* Top Utility Bar (Heuristic #1: Visibility of System Status) */
    .utility-bar {
      background: var(--white);
      border-bottom: 1px solid var(--border);
      padding: 10px 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 13px;
      color: var(--slate-700);
    }
    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: var(--accent-100);
      color: var(--primary-900);
      padding: 4px 12px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 12px;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      background: var(--accent-500);
      border-radius: 50%;
    }
    .utility-items { display: flex; gap: 24px; flex-wrap: wrap; align-items: center; }
    .utility-item strong { color: var(--slate-900); font-weight: 700; }

    header {
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(10px);
      padding: 16px 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 90;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    }
    .brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--primary-900); }
    .brand-mark {
      width: 40px; height: 40px; border-radius: 10px;
      background: var(--primary-900); color: var(--white);
      display: flex; align-items: center; justify-content: center;
      font-weight: 800; font-size: 18px;
    }
    .brand-name { font-size: 19px; font-weight: 800; line-height: 1.1; font-family: ${v.headingFont}; }
    .brand-name small {
      display: block; font-size: 11px; font-weight: 600;
      color: var(--accent-600); letter-spacing: 0.04em; text-transform: uppercase;
      font-family: ${v.bodyFont};
    }
    nav { display: flex; gap: 28px; align-items: center; }
    nav a { text-decoration: none; color: var(--slate-700); font-weight: 600; font-size: 14px; }
    nav a:hover { color: var(--accent-600); }
    .header-actions { display: flex; gap: 10px; align-items: center; }
    @media (max-width: 900px) { nav { display: none; } }

    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      min-height: 46px; padding: 12px 24px; border-radius: 10px;
      font-weight: 700; font-size: 14px; text-decoration: none;
      cursor: pointer; border: none; transition: 0.15s ease;
    }
    .btn-primary { background: var(--primary-900); color: var(--white); }
    .btn-primary:hover { background: var(--primary-800); box-shadow: 0 8px 20px rgba(0,0,0,0.18); }
    .btn-outline { background: var(--white); color: var(--primary-900); border: 1.5px solid var(--primary-900); }
    .btn-outline:hover { background: var(--accent-100); }
    .btn-gold { background: var(--gold-500); color: var(--white); }
    .btn-gold:hover { background: var(--gold-600); }
    .btn-wa { background: #1FAF5A; color: var(--white); }
    .btn-wa:hover { background: #18934A; }

    /* Hero Base */
    .hero {
      padding: 60px 6% 76px; max-width: 1320px; margin: 0 auto;
      display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center;
    }
    @media (max-width: 920px) { .hero { grid-template-columns: 1fr; padding: 40px 6% 56px; } }
    .eyebrow {
      display: inline-block; font-size: 12px; font-weight: 800;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--accent-600); margin-bottom: 14px;
    }
    .hero h1 { font-size: clamp(34px, 4.3vw, 52px); line-height: 1.12; margin-bottom: 20px; }
    .hero h1 span { color: var(--accent-600); }
    .hero p { font-size: 17px; color: var(--slate-700); margin-bottom: 30px; max-width: 540px; }
    .hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 28px; }
    .hero-reassurance { display: flex; gap: 20px; flex-wrap: wrap; font-size: 13px; font-weight: 600; color: var(--slate-700); }
    .check-circle {
      width: 20px; height: 20px; border-radius: 50%;
      background: var(--accent-100); color: var(--accent-600);
      display: inline-flex; align-items: center; justify-content: center;
      font-size: 12px; font-weight: 800;
    }

    /* Variant 1 Hero: Circular Collage */
    .hero-collage { position: relative; min-height: 430px; display: flex; align-items: center; justify-content: center; }
    .collage-main { width: 365px; height: 365px; border-radius: 50%; object-fit: cover; border: 8px solid var(--white); box-shadow: var(--shadow-card); }
    .collage-sub { width: 170px; height: 170px; border-radius: 50%; object-fit: cover; border: 6px solid var(--white); box-shadow: var(--shadow-card); position: absolute; bottom: 8px; left: 10px; }
    .collage-badge {
      position: absolute; bottom: 18px; right: 14px; width: 132px; height: 132px;
      border-radius: 50%; background: var(--white); box-shadow: var(--shadow-card);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center; padding: 12px; border: 4px solid var(--accent-100);
    }
    .collage-badge strong { font-size: 28px; font-weight: 800; color: var(--primary-900); line-height: 1; }
    .collage-badge span { font-size: 11px; font-weight: 700; color: var(--slate-700); margin-top: 4px; }

    /* Variant 2 Hero: Arch-Frame Editorial */
    .hero-arch-wrap { position: relative; min-height: 450px; display: flex; align-items: center; justify-content: center; }
    .arch-main-img {
      width: 340px; height: 430px; object-fit: cover;
      border-radius: 180px 180px 24px 24px;
      border: 8px solid var(--white); box-shadow: var(--shadow-card);
    }
    .arch-sub-img {
      width: 175px; height: 145px; object-fit: cover;
      border-radius: 18px; border: 5px solid var(--white);
      box-shadow: var(--shadow-card); position: absolute; bottom: 16px; left: 0;
    }
    .arch-glass-card {
      position: absolute; top: 32px; right: 0;
      background: rgba(255,255,255,0.95); backdrop-filter: blur(8px);
      padding: 16px 22px; border-radius: 16px; box-shadow: var(--shadow-card);
      border-left: 4px solid var(--accent-600);
    }

    /* Variant 3 Hero: Magazine Frame */
    .hero-mag-wrap { position: relative; }
    .mag-main-img {
      width: 100%; height: 420px; object-fit: cover;
      border-radius: 28px; box-shadow: var(--shadow-card); border: 6px solid var(--white);
    }
    .mag-pill-top {
      position: absolute; top: 20px; left: 20px;
      background: var(--primary-900); color: var(--white);
      padding: 8px 16px; border-radius: 999px; font-size: 12px; font-weight: 700;
    }
    .mag-card-bottom {
      position: absolute; bottom: -22px; right: 24px; left: 24px;
      background: var(--white); padding: 14px 20px; border-radius: 16px;
      box-shadow: var(--shadow-card); display: flex; align-items: center; gap: 14px;
    }
    .mag-card-bottom img { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; }
    .mag-card-bottom strong { display: block; font-size: 15px; color: var(--primary-900); }
    .mag-card-bottom span { font-size: 12.5px; color: var(--slate-500); }

    /* Variant 4 Hero: Staggered Dual Columns */
    .hero-stagger-wrap {
      display: grid; grid-template-columns: 1fr 1fr; gap: 18px;
      position: relative; align-items: center;
    }
    .stagger-col-1 {
      width: 100%; height: 360px; object-fit: cover;
      border-radius: 24px; box-shadow: var(--shadow-card); transform: translateY(-16px);
    }
    .stagger-col-2 {
      width: 100%; height: 360px; object-fit: cover;
      border-radius: 24px; box-shadow: var(--shadow-card); transform: translateY(16px);
    }
    .stagger-center-badge {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      width: 124px; height: 124px; border-radius: 50%;
      background: var(--white); box-shadow: var(--shadow-card);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center; padding: 10px; border: 4px solid var(--accent-100);
    }
    .stagger-center-badge strong { font-size: 26px; font-weight: 800; color: var(--primary-900); line-height: 1; }
    .stagger-center-badge span { font-size: 10.5px; font-weight: 700; color: var(--slate-700); margin-top: 3px; }

    /* Services Layouts */
    .services-band { background: var(--primary-900); color: var(--white); padding: 72px 6% 150px; }
    .services-band-inner { max-width: 1240px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 24px; }
    .services-band h2 { font-size: clamp(26px, 3.2vw, 38px); max-width: 480px; }
    .services-band-right { max-width: 460px; color: var(--accent-100); font-size: 14.5px; }
    .filter-pills, .filter-pills-light { display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap; }
    .filter-pill {
      background: rgba(255,255,255,0.1); color: var(--white);
      border: 1px solid rgba(255,255,255,0.2); padding: 8px 18px;
      border-radius: 999px; font-size: 13px; font-weight: 700; cursor: pointer;
    }
    .filter-pill.active, .filter-pill:hover { background: var(--accent-500); border-color: var(--accent-500); }
    .filter-pill-light {
      background: var(--white); color: var(--slate-700);
      border: 1px solid var(--border); padding: 8px 18px;
      border-radius: 999px; font-size: 13px; font-weight: 700; cursor: pointer;
    }
    .filter-pill-light.active, .filter-pill-light:hover { background: var(--primary-900); color: var(--white); border-color: var(--primary-900); }

    .services-cards-wrap {
      max-width: 1240px; margin: -105px auto 0; padding: 0 6%;
      display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 22px; position: relative; z-index: 10;
    }
    .service-card {
      background: var(--white); border-radius: var(--radius-md); overflow: hidden;
      box-shadow: var(--shadow-soft); border: 1px solid var(--border);
      display: flex; flex-direction: column; justify-content: space-between;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .service-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-card); }
    .service-card img { width: 100%; height: 195px; object-fit: cover; display: block; }
    .service-card-body { padding: 20px; display: flex; flex-direction: column; flex: 1; justify-content: space-between; }
    .service-card h3 { font-size: 17px; margin-bottom: 6px; }
    .service-card p { font-size: 13.5px; color: var(--slate-500); margin-bottom: 16px; }
    .service-card-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid var(--border); }
    .price-tag { font-size: 12.5px; font-weight: 700; color: var(--accent-600); }
    .plus-btn {
      width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid var(--border);
      background: var(--canvas-50); color: var(--primary-900); font-weight: 800; font-size: 18px;
      cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
    }
    .plus-btn:hover { background: var(--primary-900); color: var(--white); }

    /* Horizontal 2x2 Split Cards (Variant 2) */
    .horiz-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(460px, 1fr)); gap: 22px; }
    @media (max-width: 600px) { .horiz-grid { grid-template-columns: 1fr; } }
    .horiz-card { flex-direction: row; align-items: stretch; }
    .horiz-card img { width: 200px; height: auto; min-height: 190px; flex-shrink: 0; }
    @media (max-width: 520px) { .horiz-card { flex-direction: column; } .horiz-card img { width: 100%; height: 180px; } }
    .horiz-card-body { padding: 22px; display: flex; flex-direction: column; justify-content: space-between; gap: 12px; }

    /* Sections & Booking */
    .section { max-width: 1240px; margin: 0 auto; padding: 76px 6%; }
    .split-booking { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center; }
    @media (max-width: 900px) { .split-booking { grid-template-columns: 1fr; } }
    .check-list { list-style: none; margin: 24px 0 30px; display: flex; flex-direction: column; gap: 12px; }
    .check-list li { display: flex; align-items: center; gap: 12px; font-weight: 600; font-size: 15px; }

    .booking-card {
      background: var(--white); border-radius: var(--radius-lg);
      padding: 36px 32px; box-shadow: var(--shadow-card); border: 1px solid var(--border);
    }
    .booking-card h3 { font-size: 22px; text-align: center; margin-bottom: 6px; }
    .booking-card > p { text-align: center; font-size: 13.5px; color: var(--slate-500); margin-bottom: 22px; }
    .selected-service-pill {
      display: none; background: var(--accent-100); color: var(--primary-900);
      padding: 8px 14px; border-radius: 8px; font-size: 12.5px; font-weight: 700;
      margin-bottom: 14px; justify-content: space-between; align-items: center;
    }
    .form-field { margin-bottom: 15px; }
    .form-field label { display: block; font-size: 12.5px; font-weight: 700; color: var(--slate-700); margin-bottom: 6px; }
    .form-field input, .form-field select {
      width: 100%; padding: 12px 14px; border: 1.5px solid var(--border);
      border-radius: 10px; font-size: 14px; font-family: inherit; background: var(--canvas-50);
    }
    .form-field input:focus, .form-field select:focus { outline: none; border-color: var(--accent-600); background: var(--white); }
    .field-hint { font-size: 11.5px; color: var(--slate-500); margin-top: 4px; }
    .field-error { font-size: 11.5px; color: #DC2626; margin-top: 4px; display: none; font-weight: 600; }

    /* Steps Section */
    .steps-section {
      background: ${v.stepsLayout === 'dark-contrast-steps' ? 'var(--primary-900)' : 'var(--canvas-100)'};
      color: ${v.stepsLayout === 'dark-contrast-steps' ? 'var(--white)' : 'var(--slate-900)'};
      padding: 76px 6%;
    }
    .steps-inner { max-width: 1240px; margin: 0 auto; text-align: center; }
    .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-top: 44px; }
    .step-card {
      background: ${v.stepsLayout === 'dark-contrast-steps' ? 'rgba(255,255,255,0.07)' : 'var(--white)'};
      border: 1px solid ${v.stepsLayout === 'dark-contrast-steps' ? 'rgba(255,255,255,0.14)' : 'var(--border)'};
      border-radius: var(--radius-md); padding: 28px 22px; text-align: center;
    }
    .step-num {
      width: 48px; height: 48px; border-radius: 50%;
      background: var(--accent-100); color: var(--primary-900);
      font-weight: 800; font-size: 18px; display: inline-flex;
      align-items: center; justify-content: center; margin-bottom: 16px;
    }
    .step-card h4 { font-size: 16px; margin-bottom: 8px; }
    .step-card p { font-size: 13px; opacity: 0.82; }

    /* Safety + Promo + Reviews */
    .safety-grid { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 52px; align-items: center; }
    @media (max-width: 900px) { .safety-grid { grid-template-columns: 1fr; } }
    .safety-img-wrap img { width: 100%; height: 390px; object-fit: cover; border-radius: var(--radius-lg); box-shadow: var(--shadow-card); }

    .promo-banner {
      background: var(--primary-900); color: var(--white);
      border-radius: var(--radius-lg); max-width: 1240px; margin: 0 auto 70px;
      padding: 44px 6%; display: flex; justify-content: space-between;
      align-items: center; flex-wrap: wrap; gap: 28px;
    }
    .promo-right { display: flex; align-items: center; gap: 22px; }
    .promo-portrait { width: 130px; height: 130px; border-radius: 50%; object-fit: cover; border: 4px solid var(--accent-500); }
    .promo-circle {
      width: 96px; height: 96px; border-radius: 50%;
      background: var(--white); color: var(--primary-900);
      display: flex; align-items: center; justify-content: center;
      text-align: center; font-weight: 800; font-size: 18px; padding: 10px;
    }

    .reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 24px; margin-top: 38px; }
    .review-card { background: var(--white); border-radius: var(--radius-md); padding: 26px; box-shadow: var(--shadow-soft); border: 1px solid var(--border); }
    .reviewer { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
    .reviewer img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
    .stars { color: var(--gold-500); font-size: 14px; letter-spacing: 2px; margin-bottom: 10px; }

    .toast {
      position: fixed; bottom: 24px; right: 24px;
      background: var(--primary-900); color: var(--white);
      padding: 16px 22px; border-radius: 12px; box-shadow: var(--shadow-card);
      display: none; align-items: center; gap: 14px; z-index: 200; font-size: 13.5px;
    }

    footer { background: var(--primary-900); color: var(--accent-100); padding: 64px 6% 36px; }
    .footer-grid { max-width: 1240px; margin: 0 auto 40px; display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px; }
    @media (max-width: 820px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
    footer h4 { color: var(--white); margin-bottom: 14px; font-size: 15px; }
    footer ul { list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; }
    footer a { color: var(--accent-100); text-decoration: none; }
    .footer-bottom { max-width: 1240px; margin: 0 auto; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.12); text-align: center; font-size: 12.5px; color: #9CA3AF; }

    /* Daniel Thairu Designs Anti-Clone Watermark Overlay */
    .dt-watermark-overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      pointer-events: none;
      user-select: none;
      background-image: url('watermark.png');
      background-repeat: repeat;
      background-size: 560px auto;
      background-position: center;
      opacity: 0.25;
      mix-blend-mode: multiply;
    }
    .dt-watermark-badge {
      position: fixed;
      bottom: 18px;
      left: 18px;
      z-index: 10000;
      background: rgba(15, 23, 42, 0.88);
      color: #F8FAFC;
      backdrop-filter: blur(8px);
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 0.02em;
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
      pointer-events: none;
      user-select: none;
    }
  </style>
</head>
<body ${watermark ? 'oncontextmenu="return false;"' : ''}>
  ${watermark ? `
  <div class="dt-watermark-overlay" aria-hidden="true"></div>
  <div class="dt-watermark-badge">🔒 Protected Concept Preview • Daniel Thairu Designs (Watermark Removed Upon Final Handover)</div>
  ` : ''}

  <!-- Top Utility Bar -->
  <div class="utility-bar">
    <div class="status-pill">
      <span class="status-dot"></span>
      <span>Open Today • Same-Week & Priority Slots Available</span>
    </div>
    <div class="utility-items">
      <div class="utility-item">📞 Call Anytime: <strong>${cleanPhone}</strong></div>
      <div class="utility-item">🕒 Hours: <strong>Mon–Sat: 8:00 AM – 6:30 PM</strong></div>
      <div class="utility-item">📍 Location: <strong>${cleanAddress}</strong></div>
    </div>
  </div>

  <!-- Sticky Header -->
  <header>
    <a href="#" class="brand">
      <div class="brand-mark">✦</div>
      <div class="brand-name">
        ${cleanName}
        <small>${cleanCity}</small>
      </div>
    </a>
    <nav>
      <a href="#services">Services</a>
      <a href="#about">About Us</a>
      <a href="#process">How It Works</a>
      <a href="#safety">Safety Standards</a>
      <a href="#reviews">Client Reviews</a>
    </nav>
    <div class="header-actions">
      <a href="https://wa.me/${waDigits}?text=${encodeURIComponent(`Hi ${cleanName}, I would like to book an appointment / inquire about your services.`)}" target="_blank" class="btn btn-wa">💬 WhatsApp Us</a>
      <a href="#book" class="btn btn-primary">Book Appointment</a>
    </div>
  </header>

  <!-- 1. Hero Section (Dynamic Architectural Variant) -->
  <section class="hero">
    <div>
      <span class="eyebrow">${c.eyebrow}</span>
      <h1>${c.headlineMain} <span>${c.headlineAccent}</span></h1>
      <p>${c.subhead}</p>
      <div class="hero-ctas">
        <a href="#book" class="btn btn-primary">📅 Book Your Visit Online</a>
        <a href="#services" class="btn btn-outline">Explore Services</a>
      </div>
      <div class="hero-reassurance">
        <span><i class="check-circle">✓</i> Verified Specialists</span>
        <span><i class="check-circle">✓</i> Transparent Pricing</span>
        <span><i class="check-circle">✓</i> Instant WhatsApp Confirmation</span>
      </div>
    </div>

    ${renderHeroVisual(v, photos, c, cleanName)}
  </section>

  <!-- 2. Services Section (Dynamic Layout Variant) -->
  ${renderServicesSection(v, servicesWithImgs, cleanName, waDigits)}

  <!-- 3. About + Elevated Booking Card -->
  <section class="section split-booking" id="about">
    <div>
      <span class="eyebrow">ABOUT ${cleanName.toUpperCase()}</span>
      <h2 style="font-size: clamp(26px, 3vw, 36px); margin-bottom: 16px;">${c.aboutTitle}</h2>
      <p style="color: var(--slate-700); font-size: 15.5px;">${c.aboutCopy}</p>
      <ul class="check-list">
        ${c.trustChecks.map(item => `<li><span class="check-circle">✓</span> ${item}</li>`).join('')}
      </ul>
      <div style="display:flex; gap:14px; flex-wrap:wrap;">
        <a href="tel:${cleanPhone}" class="btn btn-primary">📞 Call ${cleanPhone}</a>
        <a href="#safety" class="btn btn-outline">Our Safety Standards</a>
      </div>
    </div>

    <div class="booking-card" id="book">
      <h3>Book an Appointment</h3>
      <p>Takes 30 seconds • Instant confirmation via WhatsApp or phone call</p>

      <div id="selectedBanner" class="selected-service-pill">
        <span id="selectedBannerText">Selected Service</span>
        <button type="button" onclick="clearSelectedService()" style="background:none;border:none;cursor:pointer;font-weight:800;">✕</button>
      </div>

      <form id="bookingForm" onsubmit="handleBookingSubmit(event)" novalidate>
        <div class="form-field">
          <label for="fName">Your Full Name *</label>
          <input type="text" id="fName" placeholder="e.g. Grace Wanjiku" required onblur="validateField('fName')" />
          <div class="field-error" id="err-fName">Please enter your name (at least 2 characters).</div>
        </div>

        <div class="form-field">
          <label for="fPhone">Phone / WhatsApp Number *</label>
          <input type="tel" id="fPhone" placeholder="e.g. 0712 345 678" required onblur="validateField('fPhone')" />
          <div class="field-hint">We will send your appointment confirmation to this number.</div>
          <div class="field-error" id="err-fPhone">Please enter a valid phone number (at least 9 digits).</div>
        </div>

        <div class="form-field">
          <label for="fDate">Preferred Day / Time</label>
          <input type="text" id="fDate" placeholder="e.g. Tomorrow Morning / Saturday 10 AM" />
        </div>

        <div class="form-field">
          <label for="fService">Choose a Service</label>
          <select id="fService">
            ${servicesWithImgs.map(s => `<option value="${s.title}">${s.title} (${s.price})</option>`).join('')}
            <option value="General Inquiry / Consultation">General Inquiry / Custom Quote</option>
          </select>
        </div>

        <button type="submit" class="btn btn-gold" style="width:100%; font-size:15px;">Submit Booking Request →</button>
      </form>
    </div>
  </section>

  <!-- 4. 4 Simple Steps -->
  <section class="steps-section" id="process">
    <div class="steps-inner">
      <span class="eyebrow" style="${v.stepsLayout === 'dark-contrast-steps' ? 'color:var(--accent-100);' : ''}">HOW IT WORKS</span>
      <h2 style="font-size: clamp(26px, 3vw, 36px);">Seamless Experience in 4 Simple Steps</h2>
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-num">01</div>
          <h4>Tell Us What You Need</h4>
          <p>Select your service online or send us a quick WhatsApp message with your question.</p>
        </div>
        <div class="step-card">
          <div class="step-num">02</div>
          <h4>Pick a Convenient Time</h4>
          <p>Choose a same-week, morning, or weekend slot that fits your schedule.</p>
        </div>
        <div class="step-card">
          <div class="step-num">03</div>
          <h4>Expert, Gentle Care</h4>
          <p>Arrive to a spotless suite with ZERO waiting room delays and attentive specialists.</p>
        </div>
        <div class="step-card">
          <div class="step-num">04</div>
          <h4>Lasting Peace of Mind</h4>
          <p>Enjoy transparent pricing, clear aftercare guidance, and dedicated follow-up support.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. Safety Standards -->
  <section class="section safety-grid" id="safety">
    <div class="safety-img-wrap">
      <img src="${photos.safety}" alt="${cleanName} Hygiene & Safety Standards" loading="lazy" />
    </div>
    <div>
      <span class="eyebrow">YOUR SAFETY IS OUR PRIORITY</span>
      <h2 style="font-size: clamp(26px, 3vw, 36px); margin-bottom: 16px;">${c.safetyTitle}</h2>
      <p style="color: var(--slate-700); font-size: 15.5px;">${c.safetyCopy}</p>
      <ul class="check-list">
        ${c.safetyChecks.map(item => `<li><span class="check-circle">✓</span> ${item}</li>`).join('')}
      </ul>
      <a href="#book" class="btn btn-primary">Schedule Your Visit Safely</a>
    </div>
  </section>

  <!-- Promo Banner -->
  <div style="padding: 0 6%;">
    <div class="promo-banner">
      <div style="max-width: 520px;">
        <span class="eyebrow" style="color: #FCD34D;">LIMITED TIME FIRST-VISIT OFFER</span>
        <h2 style="font-size: clamp(24px, 3vw, 34px); margin-bottom: 14px;">${c.offerTitle}</h2>
        <p style="color: var(--accent-100); margin-bottom: 22px; font-size: 15px;">Mention this online offer when booking via our website or WhatsApp to claim your priority discount.</p>
        <a href="#book" class="btn btn-gold">Book Now & Claim 20% Off</a>
      </div>
      <div class="promo-right">
        <img src="${photos.doctor}" alt="Specialist at ${cleanName}" class="promo-portrait" loading="lazy" />
        <div class="promo-circle">${c.offerBadge}</div>
      </div>
    </div>
  </div>

  <!-- 6. Reviews -->
  <section class="section" id="reviews" style="padding-top: 10px;">
    <div style="text-align:center; max-width:640px; margin:0 auto;">
      <span class="eyebrow">WHAT OUR CLIENTS SAY</span>
      <h2 style="font-size: clamp(26px, 3vw, 36px);">Trusted by Hundreds of Happy Clients in ${cleanCity}</h2>
    </div>
    <div class="reviews-grid">
      <div class="review-card">
        <div class="reviewer">
          <img src="${photos.avatars[0]}" alt="Client Review" loading="lazy" />
          <div>
            <strong>Sarah M.</strong>
            <div style="font-size:12px; color:var(--slate-500);">Verified Client • ${cleanCity}</div>
          </div>
        </div>
        <div class="stars">★★★★★</div>
        <p style="font-size:14px; color:var(--slate-700);">"Booking online took less than a minute and the team confirmed on WhatsApp right away. Spotless environment, very gentle, and transparent pricing."</p>
      </div>

      <div class="review-card">
        <div class="reviewer">
          <img src="${photos.avatars[1]}" alt="Client Review" loading="lazy" />
          <div>
            <strong>David K.</strong>
            <div style="font-size:12px; color:var(--slate-500);">Business Owner • ${cleanCity}</div>
          </div>
        </div>
        <div class="stars">★★★★★</div>
        <p style="font-size:14px; color:var(--slate-700);">"Zero waiting time! I walked in at my scheduled slot and was attended to immediately. Highly professional specialists who explain every step clearly."</p>
      </div>

      <div class="review-card">
        <div class="reviewer">
          <img src="${photos.avatars[2]}" alt="Client Review" loading="lazy" />
          <div>
            <strong>Amina N.</strong>
            <div style="font-size:12px; color:var(--slate-500);">Family Client • ${cleanCity}</div>
          </div>
        </div>
        <div class="stars">★★★★★</div>
        <p style="font-size:14px; color:var(--slate-700);">"Brought my family here and couldn't be happier. Clean, modern equipment and very warm reception. Will definitely be our go-to in ${cleanCity}."</p>
      </div>
    </div>
  </section>

  <!-- Toast -->
  <div id="uxToast" class="toast">
    <span id="uxToastText">Request captured!</span>
    <button onclick="document.getElementById('uxToast').style.display='none'" style="background:none;border:none;color:#fff;cursor:pointer;font-weight:800;">✕</button>
  </div>

  <!-- Footer -->
  <footer>
    <div class="footer-grid">
      <div>
        <h4>✦ ${cleanName}</h4>
        <p style="font-size:13.5px; max-width:300px; margin-bottom:14px; opacity:0.85;">${c.subhead}</p>
        <p style="font-size:13px;">📍 ${cleanAddress}</p>
        <p style="font-size:13px;">📞 ${cleanPhone}</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#process">How It Works</a></li>
          <li><a href="#safety">Safety & Hygiene</a></li>
          <li><a href="#reviews">Client Reviews</a></li>
        </ul>
      </div>
      <div>
        <h4>Core Services</h4>
        <ul>
          ${servicesWithImgs.map(s => `<li><a href="#book" onclick="selectService('${s.title.replace(/'/g, "\\'")}')">${s.title}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <h4>Instant Booking</h4>
        <p style="font-size:13px; margin-bottom:12px;">Prefer WhatsApp? Tap below to chat directly with our reception desk:</p>
        <a href="https://wa.me/${waDigits}?text=${encodeURIComponent(`Hi ${cleanName}, I would like to book an appointment.`)}" target="_blank" class="btn btn-wa" style="width:100%;">💬 Chat on WhatsApp</a>
      </div>
    </div>
    <div class="footer-bottom">
      © ${new Date().getFullYear()} ${cleanName} (${cleanCity}). All Rights Reserved.
    </div>
  </footer>

  <script>
    function showToast(msg) {
      const t = document.getElementById('uxToast');
      document.getElementById('uxToastText').innerText = msg;
      t.style.display = 'flex';
      setTimeout(() => { t.style.display = 'none'; }, 5000);
    }

    function filterServices(cat, btn) {
      btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.service-card').forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function selectService(serviceTitle) {
      const sel = document.getElementById('fService');
      for (let i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value === serviceTitle) {
          sel.selectedIndex = i;
          break;
        }
      }
      const banner = document.getElementById('selectedBanner');
      document.getElementById('selectedBannerText').innerText = '✓ Selected: ' + serviceTitle;
      banner.style.display = 'flex';
      document.getElementById('book').scrollIntoView({ behavior: 'smooth' });
      showToast('Selected "' + serviceTitle + '" — enter your name & phone to confirm.');
    }

    function clearSelectedService() {
      document.getElementById('selectedBanner').style.display = 'none';
    }

    function validateField(id) {
      const el = document.getElementById(id);
      const err = document.getElementById('err-' + id);
      if (!el || !err) return true;
      const val = el.value.trim();
      let valid = true;
      if (id === 'fName') valid = val.length >= 2;
      if (id === 'fPhone') valid = val.replace(/[^0-9]/g, '').length >= 9;
      err.style.display = valid ? 'none' : 'block';
      el.style.borderColor = valid ? 'var(--accent-600)' : '#DC2626';
      return valid;
    }

    function handleBookingSubmit(e) {
      e.preventDefault();
      const v1 = validateField('fName');
      const v2 = validateField('fPhone');
      if (!v1 || !v2) return;

      const name = document.getElementById('fName').value.trim();
      const phone = document.getElementById('fPhone').value.trim();
      const date = document.getElementById('fDate').value.trim() || 'Flexible';
      const service = document.getElementById('fService').value;

      showToast('✅ Booking Request Ready! Opening WhatsApp to confirm your slot...');
      const waMsg = 'Hi ${cleanName.replace(/'/g, "\\'")}, my name is ' + name + ' (' + phone + '). I would like to book: ' + service + ' (Preferred time: ' + date + ').';
      setTimeout(() => {
        window.open('https://wa.me/${waDigits}?text=' + encodeURIComponent(waMsg), '_blank');
      }, 900);
    }
  </script>
</body>
</html>`;
}

module.exports = { buildHighEndSiteHtml, DESIGN_VARIANTS };

if (require.main === module) {
  const fs = require('fs');
  const path = require('path');
  const sites = [
    {
      slug: 'dr-tim-s-dental-clinic',
      name: "Dr. Tim's Dental Clinic",
      category: 'dentist',
      city: 'Kilimani, Nairobi',
      address: 'Regent Court House, Kilimani, Nairobi',
      phone: '+254 759 601 460',
      variantIndex: 0
    },
    {
      slug: 'the-nairobi-dental-suite',
      name: 'The Nairobi Dental Suite',
      category: 'dentist',
      city: 'Kilimani, Nairobi',
      address: 'Adlife Plaza, Kilimani, Nairobi',
      phone: '+254 706 100 995',
      variantIndex: 1
    },
    {
      slug: 'kilimani-dental-clinic',
      name: 'Kilimani Dental Clinic',
      category: 'dentist',
      city: 'Kilimani, Nairobi',
      address: 'Paresia Center (Opposite Uchumi Hyper), Kilimani, Nairobi',
      phone: '+254 723 781 369',
      variantIndex: 2
    },
    {
      slug: 'primecare-dental-studio',
      name: 'PrimeCare Dental Studio',
      category: 'dentist',
      city: 'Westlands, Nairobi',
      address: 'Mpaka Road, Westlands, Nairobi',
      phone: '+254 712 345 678',
      variantIndex: 3
    },
    {
      slug: 'primecare-healthcare',
      name: 'PrimeCare Medical & Diagnostics',
      category: 'clinic',
      city: 'Nairobi, Kenya',
      address: 'Upper Hill, Nairobi',
      phone: '+254 700 123 456',
      variantIndex: 1
    }
  ];

  const wmSource = path.join(__dirname, 'public', 'watermark.png');
  for (const s of sites) {
    const folder = path.join(__dirname, 'generated-sites', s.slug);
    fs.mkdirSync(folder, { recursive: true });
    if (fs.existsSync(wmSource)) {
      fs.copyFileSync(wmSource, path.join(folder, 'watermark.png'));
    }
    fs.writeFileSync(path.join(folder, 'index.html'), buildHighEndSiteHtml({ ...s, watermark: true }), 'utf-8');
    const vIdx = s.variantIndex % DESIGN_VARIANTS.length;
    console.log(`Rebuilt [${s.slug}] with Variant #${vIdx + 1} (${DESIGN_VARIANTS[vIdx].label}) + Daniel Thairu Designs Watermark`);
  }
}
