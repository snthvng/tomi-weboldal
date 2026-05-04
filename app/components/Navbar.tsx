"use client";
import { useLang } from "../context/lang";

export default function Navbar() {
  const { lang, toggle } = useLang();

  const t = {
    hu: { services: "Szolgáltatások", about: "Rólam", contact: "Kapcsolat" },
    en: { services: "Services", about: "About", contact: "Contact" },
  };

  return (
    <nav style={{
      position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)',
      zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0.6rem 1.2rem', width: 'calc(100% - 2rem)', maxWidth: '900px',
      background: 'rgba(17,17,17,0.8)', backdropFilter: 'blur(20px)',
      border: '1px solid rgba(232,101,10,0.15)', borderRadius: '999px'
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', color: '#E8650A', fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 600 }}>
        Sinthavong Tamás
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a href="/socialplanner" className="nav-hide" style={{ color: '#6B6B6B', fontSize: '0.75rem', letterSpacing: '0.05em', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#E8650A')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}>
          Social Planner
        </a>
        <a href="#services" className="nav-hide" style={{ color: '#6B6B6B', fontSize: '0.75rem', letterSpacing: '0.05em', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F5')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}>
          {t[lang].services}
        </a>
        <a href="#about" className="nav-hide" style={{ color: '#6B6B6B', fontSize: '0.75rem', letterSpacing: '0.05em', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F5')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}>
          {t[lang].about}
        </a>

        {/* Language toggle */}
        <button
          onClick={toggle}
          title={lang === "hu" ? "Switch to English" : "Váltás magyarra"}
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

        <a href="#contact" style={{
          background: '#E8650A', color: '#0A0A0A', fontSize: '0.72rem',
          letterSpacing: '0.05em', textDecoration: 'none', fontWeight: 700,
          padding: '0.45rem 1rem', borderRadius: '999px', fontFamily: 'var(--font-mono)'
        }}>
          {t[lang].contact}
        </a>
      </div>
    </nav>
  );
}
