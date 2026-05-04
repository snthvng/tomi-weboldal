"use client";
import { useState } from "react";
import Image from "next/image";

type Lang = "hu" | "en";

const content = {
  hu: {
    meta: { title: "Social Planner — snthvng", desc: "Profi Instagram-tartalom tervező marketing ügynökségeknek és freelancereknek." },
    nav: { back: "← snthvng", demo: "Demo →" },
    badge: "v1.6 — Elérhető most",
    heroTitle: "Social Planner",
    heroSub: "Profi Instagram-tartalom tervező marketing freelancereknek és ügynökségeknek. Kezelj 3 ügyfelet, küldj jóváhagyási linkeket, tervezz tartalmat — mind a saját márkáddal.",
    demoBtn: "Próbáld ki a demót →",
    howBtn: "Hogyan működik",
    stats: [["~15 perc", "Beállítás"], ["Ingyenes", "Tárhelydíj"], ["3", "Ügyfél / planner"], ["100%", "A te adatod"]],
    featuresLabel: "Funkciók",
    features: [
      { icon: "📅", title: "Tartalom naptár", desc: "Havi és heti nézet — posztok tervezése, ütemezése, mindent egy pillantásra látsz." },
      { icon: "📱", title: "Feed előnézet", desc: "Instagram-szerű 3 oszlopos rács, hogy te és az ügyfeled lássátok, hogyan néz majd ki a feed." },
      { icon: "✅", title: "Jóváhagyási folyamat", desc: "Az ügyfél egy kattintással jóváhagyhat, módosítást kérhet vagy elutasíthat. Vége a végtelen emailezésnek." },
      { icon: "💬", title: "Poszt chat", desc: "Minden poszthoz saját kommentelési szál. Megbeszélitek a feliratot, az időzítést, a vizuált — egy helyen." },
      { icon: "💡", title: "Ötletek tábla", desc: "Te és az ügyfeleid teljes poszt nélkül is be tudtok dobni tartalom ötleteket a naptárba." },
      { icon: "👥", title: "3 ügyfél, 1 felület", desc: "Kezelj 3 ügyfelet egymás mellett. Minden ügyfél csak a saját plannerét látja — semmi mást." },
    ],
    setupLabel: "Beállítás ~15 perc alatt",
    steps: [
      { num: "01", title: "Supabase fiók létrehozása", desc: "Ingyenes. Az adatod a TE adatbázisodban marad — nem nálam, nem másnál. 100% GDPR-kompatibilis.", time: "5 perc" },
      { num: "02", title: "Adatbázis beállítása", desc: "Egy SQL fájlt másolsz be a Supabase-be. Nem kell kódolni — csak futtasd, és kész.", time: "1 perc" },
      { num: "03", title: "HTML fájl szerkesztése", desc: "Bemásolod a Supabase URL-t és kulcsot a konfigba. Ez az egész — két sor.", time: "2 perc" },
      { num: "04", title: "Netlify-ra feltöltés", desc: "Drag & drop a fájlt Netlify-ra. Ingyenes tárhely, azonnali URL, a te márkaneved.", time: "5 perc" },
      { num: "05", title: "Link küldése az ügyfeleknek", desc: "Minden ügyfélnek egy egyedi linket küldesz. Ők néznek, kommentelnek, jóváhagynak — te irányítasz.", time: "2 perc" },
    ],
    screenshotsLabel: "Képernyőképek",
    screenshots: [
      { src: "/screenshots/d1.png", alt: "Tartalom naptár", mobile: false },
      { src: "/screenshots/d2.png", alt: "Poszt szerkesztő", mobile: false },
      { src: "/screenshots/d3.png", alt: "Feed előnézet", mobile: false },
      { src: "/screenshots/m1.png", alt: "Mobilos nézet", mobile: true },
    ],
    faqLabel: "GYIK",
    faqs: [
      { q: "Mennyibe kerül?", a: "A Supabase ingyenes ~500 MB-ig. A Netlify ingyenes 100 GB/hó forgalomig. Csak a plannerért fizetsz — semmi másért." },
      { q: "Kell hozzá programozói tudás?", a: "Nem. Ha tudsz copy-paste-elni és fájlt drag & drop-olni, be tudod állítani. Az útmutató minden kattintáson végigvezet." },
      { q: "Hol tárolódnak az adatok?", a: "A TE Supabase fiókodban. Nekem nulla hozzáférésem van az ügyfeleid adataihoz. Teljes kontroll, teljes GDPR-megfelelőség." },
      { q: "Mobilon is működik az ügyfeleknek?", a: "Igen. A planner mobilon is reszponzív — a naptár automatikusan kompakt nézetre vált." },
      { q: "Mi van, ha több mint 3 ügyfelünk van?", a: "Az aktuális verzió (v1.6) 3 ügyfelet támogat. Írj rám és értesítelek, ha a bővített verzió elkészül." },
    ],
    notIncludedLabel: "Ami nincs benne",
    notIncluded: [
      "Posztok közvetlen közzététele a weboldalon keresztül",
      "Meglévő posztok betöltése a feed előnézetbe",
      "Reels videó feltöltése (link csatolható helyette)",
    ],
    ctaTitle: "Készen állsz kipróbálni?",
    ctaSub: "Próbáld ki a live demót — regisztráció nélkül. Ha saját verziót szeretnél, írj rám.",
    ctaDemo: "Demo kipróbálása →",
    ctaContact: "Kapcsolatfelvétel",
  },
  en: {
    meta: { title: "Social Planner — snthvng", desc: "Professional Instagram content planner for marketing agencies and freelancers." },
    nav: { back: "← snthvng", demo: "Try demo →" },
    badge: "v1.6 — Available now",
    heroTitle: "Social Planner",
    heroSub: "A professional Instagram content planner for marketing freelancers and agencies. Manage 3 clients, share approval links, plan content — all under your own brand.",
    demoBtn: "Try the demo →",
    howBtn: "How it works",
    stats: [["~15 min", "Setup time"], ["Free", "Hosting cost"], ["3", "Clients / planner"], ["100%", "Your data"]],
    featuresLabel: "Features",
    features: [
      { icon: "📅", title: "Content Calendar", desc: "Monthly and weekly view — plan posts, schedule content, see everything at a glance." },
      { icon: "📱", title: "Feed Preview", desc: "Instagram-style 3-column grid so you and your client can preview exactly how the feed will look." },
      { icon: "✅", title: "Approval Flow", desc: "Clients can approve, request changes, or reject posts with one click. No more endless email threads." },
      { icon: "💬", title: "Post Chat", desc: "Each post has its own comment thread. Discuss captions, timing, visuals — all in one place." },
      { icon: "💡", title: "Ideas Board", desc: "You and your clients can drop content ideas into the calendar without creating a full post." },
      { icon: "👥", title: "3 Clients, 1 Interface", desc: "Manage 3 clients side by side. Each client only sees their own planner — nothing else." },
    ],
    setupLabel: "Setup in ~15 min",
    steps: [
      { num: "01", title: "Create a Supabase account", desc: "Free. Your data stays in YOUR database — not mine, not anyone else's. 100% GDPR-safe.", time: "5 min" },
      { num: "02", title: "Set up the database", desc: "Copy-paste one SQL file into Supabase. No coding — just run it and you're done.", time: "1 min" },
      { num: "03", title: "Edit the HTML file", desc: "Paste your Supabase URL and key into the config. That's it — two lines.", time: "2 min" },
      { num: "04", title: "Deploy to Netlify", desc: "Drag and drop the file to Netlify. Free hosting, instant URL, your brand name.", time: "5 min" },
      { num: "05", title: "Share with your clients", desc: "Send each client their unique link. They view, comment, approve — you stay in control.", time: "2 min" },
    ],
    screenshotsLabel: "Screenshots",
    screenshots: [
      { src: "/screenshots/d1.png", alt: "Content calendar", mobile: false },
      { src: "/screenshots/d2.png", alt: "Post editor", mobile: false },
      { src: "/screenshots/d3.png", alt: "Feed preview", mobile: false },
      { src: "/screenshots/m1.png", alt: "Mobile view", mobile: true },
    ],
    faqLabel: "FAQ",
    faqs: [
      { q: "How much does it cost?", a: "Supabase is free up to ~500 MB. Netlify is free up to 100 GB/month traffic. You only pay for the planner itself — nothing else." },
      { q: "Do I need coding skills?", a: "No. If you can copy-paste and drag & drop a file, you can set this up. The guide walks you through every click." },
      { q: "Where is the data stored?", a: "In YOUR Supabase account. I have zero access to your clients' data. Full control, fully GDPR-compliant." },
      { q: "Can my client use it on mobile?", a: "Yes. The planner is mobile responsive — calendar switches to compact view automatically." },
      { q: "What if I need more than 3 clients?", a: "Current version (v1.6) supports 3 clients. Reach out and I'll let you know when the expanded version is ready." },
    ],
    notIncludedLabel: "What's not included",
    notIncluded: [
      "Publishing posts directly through the website",
      "Loading existing posts into the feed preview",
      "Reels video upload (a link can be attached instead)",
    ],
    ctaTitle: "Ready to try it?",
    ctaSub: "Try the live demo first — no signup needed. If you want your own version, reach out.",
    ctaDemo: "Try demo →",
    ctaContact: "Get in touch",
  },
};

const pill = {
  fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#E8650A',
  letterSpacing: '0.25em', textTransform: 'uppercase' as const,
  background: 'rgba(232,101,10,0.08)', border: '1px solid rgba(232,101,10,0.2)',
  padding: '0.35rem 1.2rem', borderRadius: '999px'
};

const divider = (label: string) => (
  <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
    <span style={pill}>{label}</span>
    <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
  </div>
);

export default function SocialPlannerPage() {
  const [lang, setLang] = useState<Lang>("hu");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const t = content[lang];

  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh', color: '#F5F5F5' }}>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(0,0,0,0.92)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out', padding: '1rem'
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <Image
              src={t.screenshots[lightbox].src}
              alt={t.screenshots[lightbox].alt}
              width={1400}
              height={900}
              style={{ objectFit: 'contain', maxHeight: '90vh', borderRadius: '1rem' }}
              onClick={e => e.stopPropagation()}
            />
            <button onClick={() => setLightbox(null)} style={{
              position: 'absolute', top: -16, right: -16,
              background: '#E8650A', border: 'none', borderRadius: '999px',
              width: 36, height: 36, cursor: 'pointer', color: '#0A0A0A',
              fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>✕</button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.6rem 1.2rem', width: 'calc(100% - 2rem)', maxWidth: '900px',
        background: 'rgba(17,17,17,0.8)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(232,101,10,0.15)', borderRadius: '999px'
      }}>
        <a href="/" style={{ fontFamily: 'var(--font-mono)', color: '#E8650A', fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 600, textDecoration: 'none' }}>
          {t.nav.back}
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a href="https://social-planner-test.netlify.app/?client=2" target="_blank" rel="noopener noreferrer" style={{
            background: '#E8650A', color: '#0A0A0A', fontSize: '0.72rem',
            letterSpacing: '0.05em', textDecoration: 'none', fontWeight: 700,
            padding: '0.45rem 1rem', borderRadius: '999px', fontFamily: 'var(--font-mono)'
          }}>
            {t.nav.demo}
          </a>
          {/* Language toggle */}
          <button
            onClick={() => setLang(l => l === "hu" ? "en" : "hu")}
            style={{
              background: 'none', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '999px', padding: '0.2rem 0.55rem',
              cursor: 'pointer', fontSize: '0.7rem', lineHeight: 1,
              color: '#6B6B6B', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em',
              display: 'flex', alignItems: 'center', gap: '0.3rem'
            }}
          >
            {lang === "hu" ? "🇬🇧 EN" : "🇭🇺 HU"}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '10rem 1.5rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232,101,10,0.08) 0%, transparent 70%)'
        }} />
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#E8650A',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          border: '1px solid rgba(232,101,10,0.25)', borderRadius: '999px',
          padding: '0.35rem 1rem', background: 'rgba(232,101,10,0.05)', marginBottom: '2rem'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8650A', display: 'inline-block' }} />
          {t.badge}
        </div>
        <h1 style={{
          fontFamily: 'var(--font-space)', fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1rem'
        }}>
          {t.heroTitle}
        </h1>
        <p style={{
          fontFamily: 'var(--font-inter)', fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#6B6B6B', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.7
        }}>
          {t.heroSub}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://social-planner-test.netlify.app/?client=2" target="_blank" rel="noopener noreferrer" style={{
            background: '#E8650A', color: '#0A0A0A', fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none',
            padding: '0.9rem 2.5rem', borderRadius: '999px',
            boxShadow: '0 0 30px rgba(232,101,10,0.4)'
          }}>
            {t.demoBtn}
          </a>
          <a href="#how-it-works" style={{
            color: '#F5F5F5', fontFamily: 'var(--font-mono)', fontSize: '0.82rem',
            letterSpacing: '0.1em', textDecoration: 'none',
            padding: '0.9rem 2.5rem', borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            {t.howBtn}
          </a>
        </div>
        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
          {t.stats.map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-space)', fontSize: '2rem', fontWeight: 700, color: '#E8650A' }}>{val}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6B6B6B', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {divider(t.featuresLabel)}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {t.features.map((f) => (
              <div key={f.title} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem', padding: '2rem'
              }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '1rem' }}>{f.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.88rem', color: '#6B6B6B', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots — 2×2 grid */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {divider(t.screenshotsLabel)}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: '0.75rem'
          }}>
            {t.screenshots.map((s, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                style={{
                  borderRadius: '1rem', overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'zoom-in', position: 'relative',
                  background: 'rgba(255,255,255,0.02)',
                  aspectRatio: '1 / 1',
                }}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 420px"
                  style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* Hover label */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '1.5rem 1rem 0.75rem',
                  background: 'linear-gradient(0deg, rgba(10,10,10,0.8) 0%, transparent 100%)',
                  fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                  color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'flex', alignItems: 'center', gap: '0.4rem'
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  {s.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" style={{ padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          {divider(t.setupLabel)}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {t.steps.map((s) => (
              <div key={s.num} style={{
                display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem', padding: '1.5rem'
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#E8650A', letterSpacing: '0.15em', minWidth: 28, marginTop: 2 }}>{s.num}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '1rem', fontWeight: 700 }}>{s.title}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#E8650A', background: 'rgba(232,101,10,0.08)', padding: '0.2rem 0.6rem', borderRadius: '999px', whiteSpace: 'nowrap' }}>{s.time}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          {divider(t.faqLabel)}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {t.faqs.map((f) => (
              <div key={f.q} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem', padding: '1.5rem'
              }}>
                <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{f.q}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.7 }}>{f.a}</p>
              </div>
            ))}

            {/* Not included block */}
            <div style={{
              background: 'rgba(255,50,50,0.03)', border: '1px solid rgba(255,80,80,0.15)',
              borderRadius: '1.25rem', padding: '1.5rem'
            }}>
              <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#F5F5F5' }}>
                {t.notIncludedLabel}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {t.notIncluded.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.9rem', marginTop: '0.05rem', flexShrink: 0 }}>❌</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '3rem 1.5rem 5rem' }}>
        <div style={{
          maxWidth: '650px', margin: '0 auto',
          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '2rem', padding: '3rem', textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-space)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem'
          }}>
            {t.ctaTitle}
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', color: '#6B6B6B', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            {t.ctaSub}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://social-planner-test.netlify.app/?client=2" target="_blank" rel="noopener noreferrer" style={{
              background: '#E8650A', color: '#0A0A0A', fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none',
              padding: '0.9rem 2rem', borderRadius: '999px',
              boxShadow: '0 0 30px rgba(232,101,10,0.3)'
            }}>
              {t.ctaDemo}
            </a>
            <a href="mailto:tamas@snthvng.com" style={{
              color: '#F5F5F5', fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              letterSpacing: '0.1em', textDecoration: 'none',
              padding: '0.9rem 2rem', borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              {t.ctaContact}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem',
        textAlign: 'center', fontFamily: 'var(--font-mono)', color: '#2E2E2E', fontSize: '0.65rem', letterSpacing: '0.1em'
      }}>
        © {new Date().getFullYear()} Sinthavong Tamás · <a href="/" style={{ color: '#E8650A', textDecoration: 'none' }}>snthvng.com</a>
      </footer>
    </main>
  );
}
