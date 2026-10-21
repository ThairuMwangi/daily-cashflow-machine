// High-End Editorial Service Website Generator
// Inspired by the GreenCare Reference Layout + Nielsen's 10 Usability Heuristics ("Usable, Useful, Used")

const NICHE_CATALOG = {
  dentist: {
    eyebrow: 'PROFESSIONAL DENTAL & COSMETIC CARE',
    headlineMain: 'Gentle, Modern Dental Care You Can',
    headlineAccent: 'Trust.',
    subhead: 'We deliver painless checkups, laser teeth whitening, implants, and family dentistry in a calm, spotless clinical environment — with transparent pricing and instant booking.',
    yearsBadge: '15+',
    yearsLabel: 'Years of Clinical Excellence',
    guaranteeBadge: '100%',
    guaranteeLabel: 'Sterilization & Hygiene Standard',
    heroImgMain: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85',
    heroImgSub1: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    heroImgSub2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    safetyImg: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=85',
    tipsImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80',
    promoDoctorImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80',
    aboutTitle: 'Leading the Way in Gentle Dental Excellence',
    aboutCopy: 'Our clinic combines experienced dental specialists, digital X-ray diagnostics, and hospital-grade sterilization so every visit is comfortable, predictable, and unhurried.',
    trustChecks: [
      'Licensed & Certified Dental Specialists',
      'Pain-Free Modern Local Anesthesia & Digital Imaging',
      'Upfront Pricing — Insurance, Card & M-Pesa Accepted'
    ],
    safetyTitle: 'Following Strict Clinical Sterilization Standards',
    safetyCopy: 'Every instrument undergoes multi-stage autoclave sterilization and sealed single-patient packaging to guarantee complete clinical safety for you and your family.',
    safetyChecks: [
      'Hospital-Grade Autoclave Instrument Sterilization',
      'HEPA-Filtered Clinical Treatment Rooms',
      'Certified & Continuously Trained Dental Hygiene Team'
    ],
    offerTitle: 'Get 20% Off Your First Dental Checkup & Scaling',
    offerBadge: '20% OFF',
    services: [
      {
        title: 'Scaling, Polishing & Whitening',
        category: 'cosmetic',
        price: 'Consultation + Cleaning',
        desc: 'Ultrasonic plaque removal, stain polishing, and enamel-safe laser whitening.',
        img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80'
      },
      {
        title: 'Emergency Toothache & Fillings',
        category: 'general',
        price: 'Same-Day Priority Slot',
        desc: 'Immediate pain relief, tooth-colored composite fillings, and gentle root canal care.',
        img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80'
      },
      {
        title: 'Dental Implants & Crowns',
        category: 'specialized',
        price: 'Full Assessment Included',
        desc: 'Natural-looking zirconia crowns, bridges, and permanent titanium dental implants.',
        img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80'
      },
      {
        title: 'Braces & Clear Aligners',
        category: 'cosmetic',
        price: 'Flexible Monthly Plans',
        desc: 'Modern orthodontic alignment for children, teens, and adults with discreet options.',
        img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80'
      }
    ],
    tips: [
      { title: 'Brush Gently Twice Daily', desc: 'Use a soft-bristled brush at a 45-degree angle for two full minutes to protect enamel.' },
      { title: 'Floss Before Bedtime', desc: 'Clears 40% of tooth surfaces that regular brushing cannot reach between teeth.' },
      { title: '6-Month Preventive Scaling', desc: 'Routine professional cleaning prevents gum inflammation and costly emergencies.' }
    ]
  },

  clinic: {
    eyebrow: 'TRUSTED MEDICAL CLINIC & DIAGNOSTICS',
    headlineMain: 'Compassionate Healthcare You Can',
    headlineAccent: 'Rely On.',
    subhead: 'Experienced doctors, same-day laboratory diagnostics, and family wellness consultations with zero waiting-room stress and instant online appointment scheduling.',
    yearsBadge: '15+',
    yearsLabel: 'Years Caring for Families',
    guaranteeBadge: '100%',
    guaranteeLabel: 'Confidential & Accredited Care',
    heroImgMain: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=85',
    heroImgSub1: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    heroImgSub2: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80',
    safetyImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=85',
    tipsImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
    promoDoctorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80',
    aboutTitle: 'Patient-First Medical Excellence Without the Wait',
    aboutCopy: 'We combine attentive physicians, rapid in-house lab testing, and digital medical records so you get accurate answers and a clear treatment plan on the very same day.',
    trustChecks: [
      'Board-Certified Physicians & Specialist Consultants',
      'Fast In-House Laboratory & Ultrasound Diagnostics',
      'Direct Insurance Billing, Card & Mobile Money Accepted'
    ],
    safetyTitle: 'Following International Clinical & Safety Protocols',
    safetyCopy: 'Our medical center adheres to strict WHO and Ministry of Health infection-control standards across every consultation room and laboratory.',
    safetyChecks: [
      'ISO-Standard Calibrated Diagnostic Lab Equipment',
      'Sanitized Private Consultation Suites',
      'Strict Patient Data Privacy & Confidentiality'
    ],
    offerTitle: 'Get 20% Off Full Wellness & Executive Blood Checkup',
    offerBadge: '20% OFF',
    services: [
      {
        title: 'General & Family Consultation',
        category: 'general',
        price: 'Same-Day Appointment',
        desc: 'Thorough medical assessment, prescription care, and specialist referrals.',
        img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=80'
      },
      {
        title: 'Full Wellness & Lab Panels',
        category: 'specialized',
        price: 'Results in 2–4 Hours',
        desc: 'Comprehensive blood work, organ function, thyroid, and preventive screening.',
        img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80'
      },
      {
        title: 'Pediatric & Child Wellness',
        category: 'general',
        price: 'Priority Family Slot',
        desc: 'Gentle pediatric checkups, vaccinations, and acute illness care for children.',
        img: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=700&q=80'
      },
      {
        title: 'Chronic & Specialist Care',
        category: 'specialized',
        price: 'Personalized Plan',
        desc: 'Dedicated management for blood pressure, diabetes, nutrition, and women’s health.',
        img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80'
      }
    ],
    tips: [
      { title: 'Annual Preventive Screening', desc: 'Early blood pressure and metabolic checks catch 80% of silent conditions early.' },
      { title: 'Stay Hydrated Before Lab Tests', desc: 'Drinking plain water makes blood draws faster and more comfortable.' },
      { title: 'Keep Digital Copies of Prescriptions', desc: 'Bring or WhatsApp your current medication list for safer, faster consultations.' }
    ]
  },

  default: {
    eyebrow: 'PROFESSIONAL LOCAL SERVICES',
    headlineMain: 'Reliable Professional Services You Can',
    headlineAccent: 'Trust.',
    subhead: 'We deliver spotless workmanship, transparent upfront quotes, and on-time service with every visit — whether for your home, office, or commercial space.',
    yearsBadge: '15+',
    yearsLabel: 'Years of Proven Experience',
    guaranteeBadge: '100%',
    guaranteeLabel: 'Satisfaction Guarantee',
    heroImgMain: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85',
    heroImgSub1: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
    heroImgSub2: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    safetyImg: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=85',
    tipsImg: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80',
    promoDoctorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    aboutTitle: 'Leading the Way in Service Excellence',
    aboutCopy: 'Our vetted professionals combine modern equipment, eco-friendly practices, and strict quality checklists so your project is completed right the first time.',
    trustChecks: [
      'Trained & Background-Checked Specialists',
      'Modern Commercial-Grade Equipment & Materials',
      '100% Satisfaction Guarantee & Upfront Quotes'
    ],
    safetyTitle: 'Following Strict Health & Safety Standards',
    safetyCopy: 'We follow rigorous safety, hygiene, and property-protection protocols on every single job site.',
    safetyChecks: [
      'Full Safety & Property Protection Compliance',
      'Sanitized, Professional-Grade Equipment',
      'Dedicated Quality Supervisor on Every Booking'
    ],
    offerTitle: 'Get 20% Off Your First Service Booking',
    offerBadge: '20% OFF',
    services: [
      {
        title: 'Residential Service Package',
        category: 'general',
        price: 'Fast Free Quote',
        desc: 'Complete, detail-oriented home service tailored to your schedule.',
        img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80'
      },
      {
        title: 'Commercial & Office Solutions',
        category: 'specialized',
        price: 'Custom Plan',
        desc: 'Reliable after-hours or daytime service for offices, clinics, and retail spaces.',
        img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80'
      },
      {
        title: 'Deep Inspection & Overhaul',
        category: 'cosmetic',
        price: 'Priority Booking',
        desc: 'Intensive top-to-bottom restoration and preventive maintenance.',
        img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80'
      },
      {
        title: 'Emergency Same-Day Dispatch',
        category: 'general',
        price: 'Rapid Response',
        desc: 'Urgent same-day callouts when you need immediate professional assistance.',
        img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80'
      }
    ],
    tips: [
      { title: 'Share Photos on WhatsApp', desc: 'Send a quick photo of what you need so we can give you an exact quote in 5 minutes.' },
      { title: 'Book Preventive Maintenance', desc: 'Routine servicing saves up to 60% compared to emergency repairs.' },
      { title: 'Ask About Monthly Plans', desc: 'Commercial and family maintenance plans include priority scheduling and discounts.' }
    ]
  }
};

function buildHighEndSiteHtml({ name, category, city, phone, email, address }) {
  const c = NICHE_CATALOG[category] || NICHE_CATALOG.default;
  const cleanName = (name || 'Premier Care Studio').trim();
  const cleanPhone = (phone || '+254 700 123 456').trim();
  const waDigits = cleanPhone.replace(/[^0-9]/g, '') || '254700123456';
  const cleanCity = (city || 'Nairobi').trim();
  const cleanAddress = (address || cleanCity).trim();
  const cleanEmail = (email || `bookings@${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '')}.co.ke`).trim();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${cleanName} — ${cleanCity} | Official Website & Online Booking</title>
  <meta name="description" content="${cleanName} in ${cleanCity}. ${c.subhead}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --forest-900: #0B3629;
      --forest-800: #114B3A;
      --emerald-600: #198754;
      --emerald-500: #22A065;
      --emerald-100: #E6F4ED;
      --gold-500: #F5A623;
      --gold-600: #E09112;
      --cream-50: #F7F7F2;
      --cream-100: #EFEFE8;
      --white: #FFFFFF;
      --slate-900: #111827;
      --slate-700: #374151;
      --slate-500: #6B7280;
      --border: #E5E7EB;
      --radius-lg: 20px;
      --radius-md: 14px;
      --shadow-soft: 0 12px 32px -8px rgba(11, 54, 41, 0.08);
      --shadow-card: 0 20px 45px -12px rgba(11, 54, 41, 0.14);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'DM Sans', sans-serif;
      background-color: var(--cream-50);
      color: var(--slate-900);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    h1, h2, h3, h4, .brand-font {
      font-family: 'Plus Jakarta Sans', sans-serif;
      letter-spacing: -0.02em;
    }

    /* Nielsen Heuristic #1: Visibility of System Status — Top Utility Bar */
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
      background: var(--emerald-100);
      color: var(--forest-900);
      padding: 4px 12px;
      border-radius: 999px;
      font-weight: 600;
      font-size: 12px;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      background: var(--emerald-500);
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(34, 160, 101, 0.25);
    }
    .utility-items {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      align-items: center;
    }
    .utility-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .utility-item strong { color: var(--slate-900); font-weight: 700; }

    /* Sticky Main Navigation */
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
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: var(--forest-900);
    }
    .brand-mark {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: var(--forest-900);
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 18px;
    }
    .brand-name {
      font-size: 19px;
      font-weight: 800;
      line-height: 1.1;
    }
    .brand-name small {
      display: block;
      font-size: 11px;
      font-weight: 600;
      color: var(--emerald-600);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    nav {
      display: flex;
      gap: 28px;
      align-items: center;
    }
    nav a {
      text-decoration: none;
      color: var(--slate-700);
      font-weight: 600;
      font-size: 14px;
      transition: color 0.15s;
    }
    nav a:hover { color: var(--emerald-600); }
    .header-actions {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    @media (max-width: 900px) {
      nav { display: none; }
      .utility-items { gap: 12px; font-size: 12px; }
    }

    /* Buttons (Minimum 44x44px touch target — Heuristic #7) */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 46px;
      padding: 12px 24px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
      cursor: pointer;
      border: none;
      transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
    }
    .btn:active { transform: translateY(1px); }
    .btn-forest {
      background: var(--forest-900);
      color: var(--white);
    }
    .btn-forest:hover {
      background: var(--forest-800);
      box-shadow: 0 8px 20px rgba(11, 54, 41, 0.22);
    }
    .btn-outline {
      background: var(--white);
      color: var(--forest-900);
      border: 1.5px solid var(--forest-900);
    }
    .btn-outline:hover { background: var(--emerald-100); }
    .btn-gold {
      background: var(--gold-500);
      color: var(--slate-900);
    }
    .btn-gold:hover {
      background: var(--gold-600);
      color: var(--white);
    }
    .btn-wa {
      background: #1FAF5A;
      color: var(--white);
    }
    .btn-wa:hover { background: #18934A; }

    /* ================================================================== */
    /* 1. HERO SECTION (Editorial Split + Circular Collage + Stat Badge)  */
    /* ================================================================== */
    .hero {
      padding: 64px 6% 80px;
      max-width: 1320px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 48px;
      align-items: center;
    }
    @media (max-width: 920px) {
      .hero { grid-template-columns: 1fr; padding: 40px 6% 60px; }
    }
    .eyebrow {
      display: inline-block;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--emerald-600);
      margin-bottom: 14px;
    }
    .hero h1 {
      font-size: clamp(34px, 4.4vw, 54px);
      line-height: 1.12;
      color: var(--slate-900);
      margin-bottom: 20px;
    }
    .hero h1 span {
      color: var(--emerald-600);
      display: inline-block;
    }
    .hero p {
      font-size: 17px;
      color: var(--slate-700);
      margin-bottom: 30px;
      max-width: 540px;
    }
    .hero-ctas {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 28px;
    }
    .hero-reassurance {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      font-size: 13px;
      font-weight: 600;
      color: var(--slate-700);
    }
    .hero-reassurance span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .check-circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--emerald-100);
      color: var(--emerald-600);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 800;
    }

    /* Circular Photo Collage (Matches Reference Image) */
    .hero-collage {
      position: relative;
      min-height: 440px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .collage-main {
      width: 370px;
      height: 370px;
      border-radius: 50%;
      object-fit: cover;
      border: 8px solid var(--white);
      box-shadow: var(--shadow-card);
      position: relative;
      z-index: 2;
    }
    .collage-sub {
      width: 175px;
      height: 175px;
      border-radius: 50%;
      object-fit: cover;
      border: 6px solid var(--white);
      box-shadow: var(--shadow-card);
      position: absolute;
      bottom: 8px;
      left: 12px;
      z-index: 3;
    }
    .collage-badge {
      position: absolute;
      bottom: 20px;
      right: 18px;
      width: 135px;
      height: 135px;
      border-radius: 50%;
      background: var(--white);
      box-shadow: var(--shadow-card);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 14px;
      z-index: 4;
      border: 4px solid var(--emerald-100);
    }
    .collage-badge strong {
      font-size: 30px;
      font-weight: 800;
      color: var(--forest-900);
      line-height: 1;
    }
    .collage-badge span {
      font-size: 11px;
      font-weight: 700;
      color: var(--slate-700);
      margin-top: 4px;
      line-height: 1.25;
    }
    @media (max-width: 520px) {
      .collage-main { width: 290px; height: 290px; }
      .collage-sub { width: 130px; height: 130px; left: 0; }
      .collage-badge { width: 110px; height: 110px; right: 0; }
      .collage-badge strong { font-size: 24px; }
    }

    /* ================================================================== */
    /* 2. DARK FOREST SERVICES BAND + PHOTO CARDS                         */
    /* ================================================================== */
    .services-band {
      background: var(--forest-900);
      color: var(--white);
      padding: 72px 6% 150px;
    }
    .services-band-inner {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: 24px;
    }
    .services-band h2 {
      font-size: clamp(26px, 3.2vw, 38px);
      line-height: 1.2;
      max-width: 480px;
    }
    .services-band-right {
      max-width: 460px;
      color: #D1FAE5;
      font-size: 14.5px;
    }
    .filter-pills {
      display: flex;
      gap: 10px;
      margin-top: 16px;
      flex-wrap: wrap;
    }
    .filter-pill {
      background: rgba(255, 255, 255, 0.1);
      color: var(--white);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 8px 18px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      transition: 0.15s;
    }
    .filter-pill.active, .filter-pill:hover {
      background: var(--emerald-500);
      border-color: var(--emerald-500);
    }

    .services-cards-wrap {
      max-width: 1240px;
      margin: -105px auto 0;
      padding: 0 6%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 22px;
      position: relative;
      z-index: 10;
    }
    .service-card {
      background: var(--white);
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-soft);
      border: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .service-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-card);
    }
    .service-card img {
      width: 100%;
      height: 195px;
      object-fit: cover;
      display: block;
    }
    .service-card-body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
    }
    .service-card h3 {
      font-size: 17px;
      color: var(--slate-900);
      margin-bottom: 6px;
    }
    .service-card p {
      font-size: 13.5px;
      color: var(--slate-500);
      margin-bottom: 16px;
    }
    .service-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 12px;
      border-top: 1px solid var(--border);
    }
    .price-tag {
      font-size: 12.5px;
      font-weight: 700;
      color: var(--emerald-600);
    }
    .plus-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1.5px solid var(--border);
      background: var(--cream-50);
      color: var(--forest-900);
      font-weight: 800;
      font-size: 18px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: 0.15s;
    }
    .plus-btn:hover {
      background: var(--forest-900);
      color: var(--white);
      border-color: var(--forest-900);
    }

    /* Warm Gold Custom Plan Strip */
    .gold-strip {
      max-width: 1100px;
      margin: 44px auto 0;
      background: linear-gradient(90deg, #FEF3C7 0%, #F5A623 100%);
      border-radius: var(--radius-md);
      padding: 22px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      box-shadow: var(--shadow-soft);
    }
    .gold-strip h3 { font-size: 19px; color: var(--slate-900); }
    .gold-strip p { font-size: 13.5px; color: var(--slate-700); }

    /* ================================================================== */
    /* 3. ABOUT + ELEVATED BOOKING FORM SECTION                           */
    /* ================================================================== */
    .section {
      max-width: 1240px;
      margin: 0 auto;
      padding: 80px 6%;
    }
    .split-booking {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 56px;
      align-items: center;
    }
    @media (max-width: 900px) {
      .split-booking { grid-template-columns: 1fr; }
    }
    .check-list {
      list-style: none;
      margin: 24px 0 30px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .check-list li {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 600;
      font-size: 15px;
      color: var(--slate-900);
    }

    .booking-card {
      background: var(--white);
      border-radius: var(--radius-lg);
      padding: 36px 32px;
      box-shadow: var(--shadow-card);
      border: 1px solid var(--border);
    }
    .booking-card h3 {
      font-size: 22px;
      text-align: center;
      margin-bottom: 6px;
    }
    .booking-card > p {
      text-align: center;
      font-size: 13.5px;
      color: var(--slate-500);
      margin-bottom: 22px;
    }
    .selected-service-pill {
      display: none;
      background: var(--emerald-100);
      color: var(--forest-900);
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 700;
      margin-bottom: 14px;
      justify-content: space-between;
      align-items: center;
    }
    .form-field { margin-bottom: 15px; }
    .form-field label {
      display: block;
      font-size: 12.5px;
      font-weight: 700;
      color: var(--slate-700);
      margin-bottom: 6px;
    }
    .form-field input, .form-field select {
      width: 100%;
      padding: 12px 14px;
      border: 1.5px solid var(--border);
      border-radius: 10px;
      font-size: 14px;
      font-family: inherit;
      background: var(--cream-50);
      transition: border-color 0.15s, background 0.15s;
    }
    .form-field input:focus, .form-field select:focus {
      outline: none;
      border-color: var(--emerald-600);
      background: var(--white);
    }
    .field-hint {
      font-size: 11.5px;
      color: var(--slate-500);
      margin-top: 4px;
    }
    .field-error {
      font-size: 11.5px;
      color: #DC2626;
      margin-top: 4px;
      display: none;
      font-weight: 600;
    }

    /* ================================================================== */
    /* 4. 4 SIMPLE STEPS SECTION                                          */
    /* ================================================================== */
    .steps-section {
      background: var(--cream-100);
      padding: 76px 6%;
    }
    .steps-inner {
      max-width: 1240px;
      margin: 0 auto;
      text-align: center;
    }
    .steps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 24px;
      margin-top: 44px;
    }
    .step-card {
      background: var(--white);
      border-radius: var(--radius-md);
      padding: 28px 22px;
      box-shadow: var(--shadow-soft);
      position: relative;
      text-align: center;
    }
    .step-num {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--white);
      border: 2px solid var(--emerald-600);
      color: var(--forest-900);
      font-weight: 800;
      font-size: 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
      box-shadow: 0 6px 16px rgba(25, 135, 84, 0.15);
    }
    .step-card h4 { font-size: 16px; margin-bottom: 8px; }
    .step-card p { font-size: 13px; color: var(--slate-500); }

    /* ================================================================== */
    /* 5. HEALTH & SAFETY STANDARDS + PROMO BANNER                        */
    /* ================================================================== */
    .safety-grid {
      display: grid;
      grid-template-columns: 0.95fr 1.05fr;
      gap: 52px;
      align-items: center;
    }
    @media (max-width: 900px) {
      .safety-grid { grid-template-columns: 1fr; }
    }
    .safety-img-wrap img {
      width: 100%;
      height: 390px;
      object-fit: cover;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-card);
    }

    .promo-banner {
      background: var(--forest-900);
      color: var(--white);
      border-radius: var(--radius-lg);
      max-width: 1240px;
      margin: 0 auto 70px;
      padding: 44px 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 28px;
      position: relative;
      overflow: hidden;
    }
    .promo-right {
      display: flex;
      align-items: center;
      gap: 22px;
    }
    .promo-portrait {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid var(--emerald-500);
    }
    .promo-circle {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background: var(--white);
      color: var(--forest-900);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 800;
      font-size: 18px;
      line-height: 1.15;
      padding: 10px;
      box-shadow: var(--shadow-card);
    }

    /* ================================================================== */
    /* 6. CLIENT TESTIMONIALS & CARE TIPS                                 */
    /* ================================================================== */
    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
      gap: 24px;
      margin-top: 38px;
    }
    .review-card {
      background: var(--white);
      border-radius: var(--radius-md);
      padding: 26px;
      box-shadow: var(--shadow-soft);
      border: 1px solid var(--border);
    }
    .reviewer {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }
    .reviewer img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }
    .stars { color: var(--gold-500); font-size: 14px; letter-spacing: 2px; margin-bottom: 10px; }

    /* Toast Feedback (Heuristic #1 & #3: Visibility of Status + Undo/Dismiss) */
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--forest-900);
      color: var(--white);
      padding: 16px 22px;
      border-radius: 12px;
      box-shadow: var(--shadow-card);
      display: none;
      align-items: center;
      gap: 14px;
      z-index: 200;
      max-width: 420px;
      font-size: 13.5px;
    }

    footer {
      background: var(--forest-900);
      color: #D1FAE5;
      padding: 64px 6% 36px;
    }
    .footer-grid {
      max-width: 1240px;
      margin: 0 auto 40px;
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr;
      gap: 32px;
    }
    @media (max-width: 820px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }
    footer h4 { color: var(--white); margin-bottom: 14px; font-size: 15px; }
    footer ul { list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; }
    footer a { color: #D1FAE5; text-decoration: none; }
    footer a:hover { color: var(--white); }
    .footer-bottom {
      max-width: 1240px;
      margin: 0 auto;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      text-align: center;
      font-size: 12.5px;
      color: #9CA3AF;
    }
  </style>
</head>
<body>

  <!-- Top Utility Bar (Heuristic #1: System Status & Real-World Info) -->
  <div class="utility-bar">
    <div class="status-pill">
      <span class="status-dot"></span>
      <span>Open Today • Same-Week & Priority Slots Available</span>
    </div>
    <div class="utility-items">
      <div class="utility-item">📞 Call Us Anytime: <strong>${cleanPhone}</strong></div>
      <div class="utility-item">🕒 Hours: <strong>Mon–Sat: 8:00 AM – 6:30 PM</strong></div>
      <div class="utility-item">📍 Location: <strong>${cleanAddress}</strong></div>
    </div>
  </div>

  <!-- Main Sticky Header -->
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
      <a href="#book" class="btn btn-forest">Book Appointment</a>
    </div>
  </header>

  <!-- 1. Hero Section (Split Layout + Circular Masked Stock Photo Collage) -->
  <section class="hero">
    <div>
      <span class="eyebrow">${c.eyebrow}</span>
      <h1>${c.headlineMain} <span>${c.headlineAccent}</span></h1>
      <p>${c.subhead}</p>
      <div class="hero-ctas">
        <a href="#book" class="btn btn-forest">📅 Book Your Visit Online</a>
        <a href="#services" class="btn btn-outline">Explore Our Services</a>
      </div>
      <div class="hero-reassurance">
        <span><i class="check-circle">✓</i> Verified Specialists</span>
        <span><i class="check-circle">✓</i> Transparent Pricing</span>
        <span><i class="check-circle">✓</i> Instant WhatsApp Confirmation</span>
      </div>
    </div>

    <div class="hero-collage">
      <img src="${c.heroImgMain}" alt="${cleanName} Specialist Team" class="collage-main" loading="eager" />
      <img src="${c.heroImgSub1}" alt="${cleanName} Modern Care" class="collage-sub" loading="eager" />
      <div class="collage-badge">
        <strong>${c.yearsBadge}</strong>
        <span>${c.yearsLabel}</span>
      </div>
    </div>
  </section>

  <!-- 2. Dark Forest Services Header Band + Photo Cards -->
  <section class="services-band" id="services">
    <div class="services-band-inner">
      <div>
        <span class="eyebrow" style="color:#6EE7B7;">WHAT WE OFFER</span>
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
    ${c.services.map(s => `
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

  <div style="padding: 0 6%;">
    <div class="gold-strip">
      <div>
        <h3>Need a Custom Treatment or Service Plan?</h3>
        <p>Speak directly with our team at ${cleanName} on WhatsApp or phone for a tailored assessment.</p>
      </div>
      <a href="https://wa.me/${waDigits}?text=${encodeURIComponent(`Hi ${cleanName}, I'd like to ask about a custom service plan.`)}" target="_blank" class="btn btn-forest">Contact Us Now →</a>
    </div>
  </div>

  <!-- 3. About Company + Elevated Booking Form Card -->
  <section class="section split-booking" id="about">
    <div>
      <span class="eyebrow">ABOUT ${cleanName.toUpperCase()}</span>
      <h2 style="font-size: clamp(26px, 3vw, 36px); margin-bottom: 16px;">${c.aboutTitle}</h2>
      <p style="color: var(--slate-700); font-size: 15.5px;">${c.aboutCopy}</p>
      <ul class="check-list">
        ${c.trustChecks.map(item => `<li><span class="check-circle">✓</span> ${item}</li>`).join('')}
      </ul>
      <div style="display:flex; gap:14px; flex-wrap:wrap;">
        <a href="tel:${cleanPhone}" class="btn btn-forest">📞 Call ${cleanPhone}</a>
        <a href="#safety" class="btn btn-outline">View Our Safety Standards</a>
      </div>
    </div>

    <div class="booking-card" id="book">
      <h3>Book an Appointment</h3>
      <p>Takes 30 seconds • Instant confirmation via WhatsApp or phone call</p>

      <div id="selectedBanner" class="selected-service-pill">
        <span id="selectedBannerText">Selected Service</span>
        <button type="button" onclick="clearSelectedService()" style="background:none;border:none;cursor:pointer;font-weight:800;color:var(--forest-900);">✕</button>
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
            ${c.services.map(s => `<option value="${s.title}">${s.title} (${s.price})</option>`).join('')}
            <option value="General Inquiry / Consultation">General Inquiry / Custom Quote</option>
          </select>
        </div>

        <button type="submit" class="btn btn-gold" style="width:100%; font-size:15px;">Submit Booking Request →</button>
      </form>
    </div>
  </section>

  <!-- 4. Sparkling Results in 4 Simple Steps -->
  <section class="steps-section" id="process">
    <div class="steps-inner">
      <span class="eyebrow">WHY CHOOSE US</span>
      <h2 style="font-size: clamp(26px, 3vw, 36px);">Seamless Experience in Just 4 Simple Steps</h2>
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-num">1</div>
          <h4>Tell Us What You Need</h4>
          <p>Select your service online or send us a quick WhatsApp message with your question.</p>
        </div>
        <div class="step-card">
          <div class="step-num">2</div>
          <h4>Pick a Convenient Time</h4>
          <p>Choose a same-week, morning, or weekend slot that fits your schedule.</p>
        </div>
        <div class="step-card">
          <div class="step-num">3</div>
          <h4>Expert, Gentle Care</h4>
          <p>Arrive to a spotless suite with ZERO waiting room delays and attentive specialists.</p>
        </div>
        <div class="step-card">
          <div class="step-num">4</div>
          <h4>Lasting Peace of Mind</h4>
          <p>Enjoy transparent pricing, clear aftercare guidance, and dedicated follow-up support.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. Health & Safety Standards -->
  <section class="section safety-grid" id="safety">
    <div class="safety-img-wrap">
      <img src="${c.safetyImg}" alt="${cleanName} Hygiene & Safety Standards" loading="lazy" />
    </div>
    <div>
      <span class="eyebrow">YOUR SAFETY IS OUR PRIORITY</span>
      <h2 style="font-size: clamp(26px, 3vw, 36px); margin-bottom: 16px;">${c.safetyTitle}</h2>
      <p style="color: var(--slate-700); font-size: 15.5px;">${c.safetyCopy}</p>
      <ul class="check-list">
        ${c.safetyChecks.map(item => `<li><span class="check-circle">✓</span> ${item}</li>`).join('')}
      </ul>
      <a href="#book" class="btn btn-forest">Schedule Your Visit Safely</a>
    </div>
  </section>

  <!-- Promo Banner -->
  <div style="padding: 0 6%;">
    <div class="promo-banner">
      <div style="max-width: 520px;">
        <span class="eyebrow" style="color: #FCD34D;">LIMITED TIME FIRST-VISIT OFFER</span>
        <h2 style="font-size: clamp(24px, 3vw, 34px); margin-bottom: 14px;">${c.offerTitle}</h2>
        <p style="color: #D1FAE5; margin-bottom: 22px; font-size: 15px;">Mention this online offer when booking via our website or WhatsApp to claim your priority discount.</p>
        <a href="#book" class="btn btn-gold">Book Now & Claim 20% Off</a>
      </div>
      <div class="promo-right">
        <img src="${c.promoDoctorImg}" alt="Specialist at ${cleanName}" class="promo-portrait" loading="lazy" />
        <div class="promo-circle">${c.offerBadge}</div>
      </div>
    </div>
  </div>

  <!-- 6. Client Reviews -->
  <section class="section" id="reviews" style="padding-top: 10px;">
    <div style="text-align:center; max-width:640px; margin:0 auto;">
      <span class="eyebrow">WHAT OUR CLIENTS SAY</span>
      <h2 style="font-size: clamp(26px, 3vw, 36px);">Trusted by Hundreds of Happy Clients in ${cleanCity}</h2>
    </div>
    <div class="reviews-grid">
      <div class="review-card">
        <div class="reviewer">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Client Review" loading="lazy" />
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
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="Client Review" loading="lazy" />
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
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" alt="Client Review" loading="lazy" />
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

  <!-- Toast Notification (Heuristic #1 & #3) -->
  <div id="uxToast" class="toast">
    <span id="uxToastText">Request captured!</span>
    <button onclick="document.getElementById('uxToast').style.display='none'" style="background:none;border:none;color:#fff;cursor:pointer;font-weight:800;">✕</button>
  </div>

  <!-- Footer -->
  <footer>
    <div class="footer-grid">
      <div>
        <h4>✦ ${cleanName}</h4>
        <p style="font-size:13.5px; color:#A7F3D0; max-width:300px; margin-bottom:14px;">${c.subhead}</p>
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
          ${c.services.map(s => `<li><a href="#book" onclick="selectService('${s.title.replace(/'/g, "\\'")}')">${s.title}</a></li>`).join('')}
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
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
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
      el.style.borderColor = valid ? '#198754' : '#DC2626';
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

module.exports = { buildHighEndSiteHtml };

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
      phone: '+254 759 601 460'
    },
    {
      slug: 'the-nairobi-dental-suite',
      name: 'The Nairobi Dental Suite',
      category: 'dentist',
      city: 'Kilimani, Nairobi',
      address: 'Adlife Plaza, Kilimani, Nairobi',
      phone: '+254 706 100 995'
    },
    {
      slug: 'kilimani-dental-clinic',
      name: 'Kilimani Dental Clinic',
      category: 'dentist',
      city: 'Kilimani, Nairobi',
      address: 'Paresia Center (Opposite Uchumi Hyper), Kilimani, Nairobi',
      phone: '+254 723 781 369'
    },
    {
      slug: 'primecare-dental-studio',
      name: 'PrimeCare Dental Studio',
      category: 'dentist',
      city: 'Westlands, Nairobi',
      address: 'Mpaka Road, Westlands, Nairobi',
      phone: '+254 712 345 678'
    },
    {
      slug: 'primecare-healthcare',
      name: 'PrimeCare Medical & Diagnostics',
      category: 'clinic',
      city: 'Nairobi, Kenya',
      address: 'Upper Hill, Nairobi',
      phone: '+254 700 123 456'
    }
  ];

  for (const s of sites) {
    const folder = path.join(__dirname, 'generated-sites', s.slug);
    fs.mkdirSync(folder, { recursive: true });
    fs.writeFileSync(path.join(folder, 'index.html'), buildHighEndSiteHtml(s), 'utf-8');
    console.log('Rebuilt with High-End Design + Stock Photos:', s.slug);
  }
}
