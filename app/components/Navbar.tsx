"use client";

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)',
      zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0.75rem 1.5rem', width: 'calc(100% - 4rem)', maxWidth: '900px',
      background: 'rgba(17,17,17,0.7)', backdropFilter: 'blur(20px)',
      border: '1px solid rgba(232,101,10,0.15)', borderRadius: '999px'
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', color: '#E8650A', fontSize: '0.9rem', letterSpacing: '0.15em', fontWeight: 600 }}>
        Sinthavong Tamás
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <a href="#services" style={{ color: '#6B6B6B', fontSize: '0.8rem', letterSpacing: '0.08em', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F5')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}>
          Services
        </a>
        <a href="#about" style={{ color: '#6B6B6B', fontSize: '0.8rem', letterSpacing: '0.08em', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F5')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}>
          About
        </a>
        <a href="#contact" style={{
          background: '#E8650A', color: '#0A0A0A', fontSize: '0.78rem',
          letterSpacing: '0.08em', textDecoration: 'none', fontWeight: 700,
          padding: '0.5rem 1.3rem', borderRadius: '999px', fontFamily: 'var(--font-mono)'
        }}>
          Contact
        </a>
      </div>
    </nav>
  );
}
