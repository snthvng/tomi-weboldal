"use client";
import { useState } from "react";
import Image from "next/image";

type Lang = "hu" | "en";

const copy = {
  hu: {
    nav: { back: "← snthvng.com", demo: "Test demo" },
    badge: "v1.6 — Elérhető most",
    heroTag: "Tartalomtervező marketing szakembereknek",
    heroTitle: ["Tervezz, küldj, kapsz", "jóváhagyást."],
    heroTitleAccent: "Végre rendszerben.",
    heroSub: "Social Planner egy egyszerű, saját márkás tartalomtervező eszköz, amit marketing freelancerek és kis ügynökségek 15 perc alatt beállítanak — és az ügyfeleik azonnal használni tudnak.",
    demoBtn: "Kipróbálom a demót →",
    pricingBtn: "Megnézem az árat",

    problemTitle: "Ismered ezt?",
    problems: [
      { icon: "📧", text: "Emailben küldöd a tartalmat jóváhagyásra — és 3 napig nem jön válasz." },
      { icon: "💬", text: "A Canva linkek, Drive mappák és WhatsApp üzenetek között elvész minden." },
      { icon: "🤷", text: "Az ügyfeled nem látja a teljes képet — csak posztokat lát, nem a stratégiát." },
    ],
    solutionTag: "A megoldás",
    solutionTitle: "Egy eszköz. Minden ügyfél. Nulla káosz.",
    solutionSub: "A Social Planner egy saját tárhely alapú, teljesen a tiéd eszköz, amelyet az ügyfeleid böngészőből használnak — bármikor, bárhonnan.",

    featuresLabel: "Funkciók",
    features: [
      { icon: "📅", title: "Tartalom naptár", desc: "Havi és heti nézet. Posztolj, ütemezz, lásd az egészet egy helyen." },
      { icon: "📱", title: "Feed előnézet", desc: "Instagram-szerű 3 oszlopos rács — az ügyfél pontosan látja, hogy fog kinézni a feedje." },
      { icon: "✅", title: "Jóváhagyási folyamat", desc: "Jóváhagy, módosítást kér, visszautasít — egy kattintással. Vége az email-labirintusnak." },
      { icon: "💬", title: "Poszt chat", desc: "Minden poszthoz saját szál. Minden komment, minden kérés egy helyen marad." },
      { icon: "💡", title: "Ötletek tábla", desc: "Te és az ügyfeled is bedobhattok ötleteket — teljes poszt nélkül is." },
      { icon: "👥", title: "3 ügyfél, 1 felület", desc: "Kezelj 3 ügyfelet egymás mellett. Mindenki csak a saját adatait látja." },
    ],

    screenshotsLabel: "Így néz ki",
    screenshots: [
      { src: "/screenshots/d1.png", alt: "Tartalom naptár" },
      { src: "/screenshots/d2.png", alt: "Poszt szerkesztő" },
      { src: "/screenshots/d3.png", alt: "Feed előnézet" },
      { src: "/screenshots/m1.png", alt: "Mobilos nézet" },
    ],

    setupLabel: "Beállítás: ~15 perc",
    setupSub: "Nem kell fejlesztő. Nem kell szerver. Csak kövesd a lépéseket.",
    steps: [
      { num: "01", title: "Supabase fiók létrehozása", desc: "Ingyenes. Az adatok a te adatbázisodban maradnak — nem nálam.", time: "5 perc" },
      { num: "02", title: "Adatbázis beállítása", desc: "Egy SQL fájlt másolsz be. Nem kell kódolni — csak futtatod.", time: "1 perc" },
      { num: "03", title: "HTML fájl szerkesztése", desc: "Beírod a Supabase URL-t és kulcsot. Két sor, ennyi.", time: "2 perc" },
      { num: "04", title: "Netlify-ra feltöltés", desc: "Drag & drop. Ingyenes tárhely, azonnali URL.", time: "5 perc" },
      { num: "05", title: "Link küldése az ügyfeleknek", desc: "Mindenki kap egy egyedi linket. Te irányítasz.", time: "2 perc" },
    ],

    pricingLabel: "Árazás",
    pricingTitle: "Egyszeri díj. Nincs havi előfizetés.",
    pricingPrice: "10.000 Ft",
    pricingOnce: "egyszeri",
    pricingItems: [
      "Social Planner HTML fájl (v1.6)",
      "Telepítési útmutató lépésről lépésre",
      "Supabase SQL sablon",
      "3 ügyfél kezelése",
      "Ingyenes Netlify tárhely",
      "Te hosztolod — az adatok nálad maradnak",
    ],
    pricingCta: "Megveszem →",
    pricingNote: "A Supabase és Netlify ingyenes keretbe belefér — más díjra ne számíts.",

    faqLabel: "Kérdések",
    faqs: [
      { q: "Mennyibe kerül a tárhely?", a: "A Supabase ingyenes ~500 MB-ig, a Netlify 100 GB/hó forgalomig. Normál ügynökségi használatra ez bőven elég." },
      { q: "Kell hozzá programozói tudás?", a: "Nem. Ha tudsz másolni-beilleszteni és fájlt feltölteni, be tudod állítani. Az útmutató minden lépést képernyőképekkel mutat." },
      { q: "Hol tárolódnak az adatok?", a: "A TE Supabase fiókodban. Nekem nulla hozzáférésem van — teljes kontroll, teljes GDPR-megfelelőség." },
      { q: "Mobilon is használható?", a: "Igen. Az ügyfeleid mobil böngészőből is tudják nézni és jóváhagyni a tartalmakat." },
      { q: "Mi van, ha több mint 3 ügyfelünk van?", a: "Az aktuális v1.6 3 ügyfelet kezel. Írj rám — értesítelek, ha a bővített verzió elkészül." },
    ],
    notIncludedLabel: "Ami nincs benne",
    notIncluded: [
      "Posztok közvetlen közzététele a weboldalon keresztül",
      "Meglévő posztok betöltése a feed előnézetbe",
      "Reels videó feltöltése (link csatolható helyette)",
    ],

    ctaTitle: "Kipróbálod előbb?",
    ctaSub: "A demóban minden funkció elérhető — regisztráció nélkül. Ha megtetszik, írj rám.",
    ctaDemo: "Test demo →",
    ctaContact: "Kapcsolat",

    langToggle: "🇬🇧 EN",
  },
  en: {
    nav: { back: "← snthvng.com", demo: "Test demo" },
    badge: "v1.6 — Available now",
    heroTag: "Content planning tool for marketing professionals",
    heroTitle: ["Plan, share, get", "approvals."],
    heroTitleAccent: "Finally in one place.",
    heroSub: "Social Planner is a simple, white-label content planning tool that marketing freelancers and small agencies set up in 15 minutes — and their clients can start using right away.",
    demoBtn: "Try the demo →",
    pricingBtn: "See pricing",

    problemTitle: "Sound familiar?",
    problems: [
      { icon: "📧", text: "You send content for approval by email — and wait 3 days for a reply." },
      { icon: "💬", text: "Canva links, Drive folders, and WhatsApp messages — everything gets lost." },
      { icon: "🤷", text: "Your client sees individual posts, not the full strategy." },
    ],
    solutionTag: "The solution",
    solutionTitle: "One tool. Every client. Zero chaos.",
    solutionSub: "Social Planner is a self-hosted tool that's completely yours — your clients use it from their browser, anytime, anywhere.",

    featuresLabel: "Features",
    features: [
      { icon: "📅", title: "Content Calendar", desc: "Monthly and weekly view. Plan, schedule, see everything in one place." },
      { icon: "📱", title: "Feed Preview", desc: "Instagram-style 3-column grid — your client sees exactly how their feed will look." },
      { icon: "✅", title: "Approval Flow", desc: "Approve, request changes, reject — one click. No more email chains." },
      { icon: "💬", title: "Post Chat", desc: "Each post has its own thread. Every comment, every request, in one place." },
      { icon: "💡", title: "Ideas Board", desc: "You and your client can drop ideas — without creating a full post." },
      { icon: "👥", title: "3 Clients, 1 Interface", desc: "Manage 3 clients side by side. Everyone only sees their own data." },
    ],

    screenshotsLabel: "See it in action",
    screenshots: [
      { src: "/screenshots/d1.png", alt: "Content calendar" },
      { src: "/screenshots/d2.png", alt: "Post editor" },
      { src: "/screenshots/d3.png", alt: "Feed preview" },
      { src: "/screenshots/m1.png", alt: "Mobile view" },
    ],

    setupLabel: "Setup: ~15 minutes",
    setupSub: "No developer needed. No server. Just follow the steps.",
    steps: [
      { num: "01", title: "Create a Supabase account", desc: "Free. Your data stays in your database — not mine.", time: "5 min" },
      { num: "02", title: "Set up the database", desc: "Copy-paste one SQL file. No coding — just run it.", time: "1 min" },
      { num: "03", title: "Edit the HTML file", desc: "Paste your Supabase URL and key. Two lines, that's it.", time: "2 min" },
      { num: "04", title: "Deploy to Netlify", desc: "Drag & drop. Free hosting, instant URL.", time: "5 min" },
      { num: "05", title: "Share links with clients", desc: "Everyone gets a unique link. You stay in control.", time: "2 min" },
    ],

    pricingLabel: "Pricing",
    pricingTitle: "One-time fee. No subscription.",
    pricingPrice: "10,000 HUF",
    pricingOnce: "one-time",
    pricingItems: [
      "Social Planner HTML file (v1.6)",
      "Step-by-step setup guide",
      "Supabase SQL template",
      "3 client management",
      "Free Netlify hosting",
      "Self-hosted — your data stays with you",
    ],
    pricingCta: "Buy now →",
    pricingNote: "Supabase and Netlify both have free tiers that cover normal agency usage.",

    faqLabel: "FAQ",
    faqs: [
      { q: "How much does hosting cost?", a: "Supabase is free up to ~500 MB, Netlify up to 100 GB/month. More than enough for normal agency use." },
      { q: "Do I need coding skills?", a: "No. If you can copy-paste and upload a file, you can set this up. The guide walks through every step with screenshots." },
      { q: "Where is the data stored?", a: "In YOUR Supabase account. I have zero access — full control, fully GDPR-compliant." },
      { q: "Can clients use it on mobile?", a: "Yes. Clients can view and approve content from their mobile browser." },
      { q: "What if I need more than 3 clients?", a: "Current v1.6 handles 3 clients. Reach out — I'll let you know when the expanded version is ready." },
    ],
    notIncludedLabel: "What's not included",
    notIncluded: [
      "Publishing posts directly through the website",
      "Loading existing posts into the feed preview",
      "Reels video upload (a link can be attached instead)",
    ],

    ctaTitle: "Try it first?",
    ctaSub: "Every feature is available in the demo — no sign-up needed. If you like it, get in touch.",
    ctaDemo: "Test demo →",
    ctaContact: "Get in touch",

    langToggle: "🇭🇺 HU",
  },
};

export default function SocialPlannerPage() {
  const [lang, setLang] = useState<Lang>("hu");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const t = copy[lang];

  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh', color: '#0A0A0A' }}>

      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: 'rgba(0,0,0,0.88)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          cursor: 'zoom-out', padding: '1rem'
        }}>
          <div style={{ position: 'relative', maxWidth: '92vw', maxHeight: '90vh' }}>
            <Image
              src={t.screenshots[lightbox].src}
              alt={t.screenshots[lightbox].alt}
              width={1400} height={900}
              style={{ objectFit: 'contain', maxHeight: '90vh', borderRadius: '0.75rem' }}
              onClick={e => e.stopPropagation()}
            />
            <button onClick={() => setLightbox(null)} style={{
              position: 'absolute', top: -14, right: -14,
              background: '#0A0A0A', border: 'none', borderRadius: '999px',
              width: 32, height: 32, cursor: 'pointer', color: '#fff',
              fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>✕</button>
          </div>
        </div>
      )}

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #E5E7EB',
        padding: '0 1.5rem', height: '56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{
          fontFamily: 'var(--font-mono)', color: '#6B7280', fontSize: '0.78rem',
          letterSpacing: '0.05em', fontWeight: 500, textDecoration: 'none'
        }}>
          {t.nav.back}
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button onClick={() => setLang(l => l === "hu" ? "en" : "hu")} style={{
            background: 'none', border: '1px solid #E5E7EB', borderRadius: '999px',
            padding: '0.25rem 0.65rem', cursor: 'pointer',
            fontSize: '0.7rem', color: '#6B7280', fontFamily: 'var(--font-mono)',
            display: 'flex', alignItems: 'center', gap: '0.3rem'
          }}>
            {t.langToggle}
          </button>
          <a href="https://social-planner-test.netlify.app/?client=2" target="_blank" rel="noopener noreferrer" style={{
            background: '#E8650A', color: '#fff',
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.04em', textDecoration: 'none',
            padding: '0.45rem 1.1rem', borderRadius: '999px'
          }}>
            {t.nav.demo}
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 'clamp(5.5rem, 14vw, 8rem)', paddingBottom: '4rem',
        paddingLeft: '1.25rem', paddingRight: '1.25rem',
        textAlign: 'center', borderBottom: '1px solid #F3F4F6'
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: '#FFF7ED', border: '1px solid #FED7AA',
          borderRadius: '999px', padding: '0.3rem 1rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          color: '#E8650A', letterSpacing: '0.12em', textTransform: 'uppercase',
          marginBottom: '1.75rem'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8650A', display: 'inline-block' }} />
          {t.badge}
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#9CA3AF',
          letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem'
        }}>
          {t.heroTag}
        </p>

        <h1 style={{
          fontFamily: 'var(--font-space)', fontSize: 'clamp(2.4rem, 7vw, 5rem)',
          fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05,
          color: '#0A0A0A', marginBottom: '0.3rem'
        }}>
          {t.heroTitle[0]}<br />{t.heroTitle[1]}
        </h1>
        <h1 style={{
          fontFamily: 'var(--font-space)', fontSize: 'clamp(2.4rem, 7vw, 5rem)',
          fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05,
          color: '#E8650A', marginBottom: '1.75rem'
        }}>
          {t.heroTitleAccent}
        </h1>

        <p style={{
          fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          color: '#6B7280', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.75
        }}>
          {t.heroSub}
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://social-planner-test.netlify.app/?client=2" target="_blank" rel="noopener noreferrer" style={{
            background: '#E8650A', color: '#fff',
            fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 700,
            letterSpacing: '0.06em', textDecoration: 'none',
            padding: '0.85rem 2rem', borderRadius: '0.6rem',
            boxShadow: '0 4px 14px rgba(232,101,10,0.35)'
          }}>
            {t.demoBtn}
          </a>
          <a href="#pricing" style={{
            background: '#fff', color: '#374151',
            fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 600,
            letterSpacing: '0.04em', textDecoration: 'none',
            padding: '0.85rem 2rem', borderRadius: '0.6rem',
            border: '1px solid #E5E7EB'
          }}>
            {t.pricingBtn}
          </a>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ background: '#F9FAFB', padding: '4rem 1.25rem', borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-space)', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2rem', textAlign: 'center'
          }}>
            {t.problemTitle}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {t.problems.map((p, i) => (
              <div key={i} style={{
                background: '#fff', border: '1px solid #E5E7EB', borderRadius: '0.875rem',
                padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start'
              }}>
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: '#374151', lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section style={{ padding: '4rem 1.25rem', borderBottom: '1px solid #F3F4F6', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#E8650A',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            background: '#FFF7ED', border: '1px solid #FED7AA',
            padding: '0.25rem 0.9rem', borderRadius: '999px', display: 'inline-block', marginBottom: '1.25rem'
          }}>
            {t.solutionTag}
          </span>
          <h2 style={{
            fontFamily: 'var(--font-space)', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem'
          }}>
            {t.solutionTitle}
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: '#6B7280', lineHeight: 1.75 }}>
            {t.solutionSub}
          </p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: '#F9FAFB', padding: '4rem 1.25rem', borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#9CA3AF',
            letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2rem'
          }}>
            {t.featuresLabel}
          </p>
          <div className="sp-features-grid">
            {t.features.map((f) => (
              <div key={f.title} style={{
                background: '#fff', border: '1px solid #E5E7EB',
                borderRadius: '0.875rem', padding: '1.75rem'
              }}>
                <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '0.875rem' }}>{f.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: '#111827' }}>{f.title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ── */}
      <section style={{ padding: '4rem 1.25rem', borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#9CA3AF',
            letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.5rem'
          }}>
            {t.screenshotsLabel}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {t.screenshots.map((s, i) => (
              <div key={i} onClick={() => setLightbox(i)} style={{
                borderRadius: '0.75rem', overflow: 'hidden',
                border: '1px solid #E5E7EB', cursor: 'zoom-in',
                position: 'relative', aspectRatio: '1 / 1',
                background: '#F9FAFB'
              }}>
                <Image
                  src={s.src} alt={s.alt} fill
                  sizes="(max-width: 640px) 48vw, 290px"
                  style={{ objectFit: 'cover', transition: 'transform 0.25s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '1.25rem 0.75rem 0.6rem',
                  background: 'linear-gradient(0deg,rgba(0,0,0,0.55) 0%,transparent 100%)',
                  fontFamily: 'var(--font-mono)', fontSize: '0.57rem',
                  color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase'
                }}>
                  {s.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SETUP ── */}
      <section style={{ background: '#F9FAFB', padding: '4rem 1.25rem', borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-space)', fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
            fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.5rem', textAlign: 'center'
          }}>
            {t.setupLabel}
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#6B7280',
            textAlign: 'center', marginBottom: '2rem', lineHeight: 1.6
          }}>
            {t.setupSub}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {t.steps.map((s) => (
              <div key={s.num} style={{
                background: '#fff', border: '1px solid #E5E7EB', borderRadius: '0.875rem',
                padding: '1.25rem 1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start'
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#E8650A',
                  letterSpacing: '0.15em', minWidth: 24, marginTop: 3
                }}>{s.num}</span>
                <div style={{ flex: 1 }}>
                  <div className="sp-steps-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.3rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '0.95rem', fontWeight: 700, color: '#111827' }}>{s.title}</h3>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#E8650A',
                      background: '#FFF7ED', border: '1px solid #FED7AA',
                      padding: '0.15rem 0.55rem', borderRadius: '999px', whiteSpace: 'nowrap', flexShrink: 0
                    }}>{s.time}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: '4rem 1.25rem', borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#9CA3AF',
            letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1rem'
          }}>
            {t.pricingLabel}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-space)', fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
            fontWeight: 700, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '2rem'
          }}>
            {t.pricingTitle}
          </h2>

          <div style={{
            background: '#fff', border: '2px solid #E8650A', borderRadius: '1.25rem',
            padding: '2.5rem', textAlign: 'center',
            boxShadow: '0 8px 32px rgba(232,101,10,0.10)'
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-space)', fontSize: '3.5rem', fontWeight: 800,
                color: '#0A0A0A', letterSpacing: '-0.04em'
              }}>
                {t.pricingPrice}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#9CA3AF',
                display: 'block', marginTop: '0.25rem', letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>
                {t.pricingOnce}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem', textAlign: 'left' }}>
              {t.pricingItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8650A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#374151' }}>{item}</span>
                </div>
              ))}
            </div>

            <a href="mailto:tamas@snthvng.com?subject=Social Planner megrendelés" style={{
              display: 'block', background: '#E8650A', color: '#fff',
              fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700,
              letterSpacing: '0.06em', textDecoration: 'none',
              padding: '0.9rem', borderRadius: '0.6rem',
              boxShadow: '0 4px 14px rgba(232,101,10,0.3)'
            }}>
              {t.pricingCta}
            </a>

            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#9CA3AF',
              marginTop: '1rem', lineHeight: 1.5
            }}>
              {t.pricingNote}
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#F9FAFB', padding: '4rem 1.25rem', borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#9CA3AF',
            letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2rem'
          }}>
            {t.faqLabel}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {t.faqs.map((f) => (
              <div key={f.q} style={{
                background: '#fff', border: '1px solid #E5E7EB', borderRadius: '0.875rem', padding: '1.25rem 1.5rem'
              }}>
                <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '0.95rem', fontWeight: 700, color: '#111827', marginBottom: '0.4rem' }}>{f.q}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.65 }}>{f.a}</p>
              </div>
            ))}

            {/* Not included */}
            <div style={{
              background: '#FFF9F9', border: '1px solid #FECACA', borderRadius: '0.875rem', padding: '1.25rem 1.5rem'
            }}>
              <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '0.95rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
                {t.notIncludedLabel}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {t.notIncluded.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <span style={{ fontSize: '0.85rem', flexShrink: 0, marginTop: '0.1rem' }}>❌</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '4rem 1.25rem 5rem' }}>
        <div style={{
          maxWidth: '560px', margin: '0 auto',
          background: '#0A0A0A', borderRadius: '1.25rem',
          padding: '3rem 2rem', textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-space)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontWeight: 700, letterSpacing: '-0.03em', color: '#F5F5F5', marginBottom: '0.75rem'
          }}>
            {t.ctaTitle}
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', color: '#6B7280', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            {t.ctaSub}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://social-planner-test.netlify.app/?client=2" target="_blank" rel="noopener noreferrer" style={{
              background: '#E8650A', color: '#fff',
              fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 700,
              letterSpacing: '0.06em', textDecoration: 'none',
              padding: '0.85rem 2rem', borderRadius: '0.6rem',
              boxShadow: '0 4px 14px rgba(232,101,10,0.4)'
            }}>
              {t.ctaDemo}
            </a>
            <a href="mailto:tamas@snthvng.com" style={{
              color: '#9CA3AF', fontFamily: 'var(--font-mono)', fontSize: '0.82rem',
              letterSpacing: '0.04em', textDecoration: 'none',
              padding: '0.85rem 2rem', borderRadius: '0.6rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              {t.ctaContact}
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: '1px solid #F3F4F6', padding: '1.5rem',
        textAlign: 'center', background: '#fff'
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', color: '#D1D5DB', fontSize: '0.65rem', letterSpacing: '0.08em' }}>
          © {new Date().getFullYear()} Sinthavong Tamás ·{' '}
          <a href="/" style={{ color: '#E8650A', textDecoration: 'none' }}>snthvng.com</a>
        </span>
      </footer>
    </main>
  );
}
