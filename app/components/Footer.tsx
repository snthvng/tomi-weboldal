export default function Footer() {
  return (
    <>
      <section id="contact" style={{ background: '#0A0A0A', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#E8650A',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              background: 'rgba(232,101,10,0.08)', border: '1px solid rgba(232,101,10,0.2)',
              padding: '0.35rem 1.2rem', borderRadius: '999px'
            }}>
              Contact
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '2rem', padding: '3rem', textAlign: 'center'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-space)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700, color: '#F5F5F5', marginBottom: '0.75rem', letterSpacing: '-0.03em'
            }}>
              Got a project?
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', color: '#6B6B6B', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              Let&apos;s talk about how we can grow your brand together.
            </p>
            <a href="mailto:tamas@snthvng.com" className="glow-orange" style={{
              display: 'inline-block', background: '#E8650A', color: '#0A0A0A',
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700,
              letterSpacing: '0.12em', textDecoration: 'none',
              padding: '0.9rem 2.5rem', borderRadius: '999px'
            }}>
              tamas@snthvng.com
            </a>

            {/* Social icons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a href="mailto:tamas@snthvng.com" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 44, height: 44, borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)', textDecoration: 'none'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8650A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
              </a>
              <a href="https://instagram.com/snthvng" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 44, height: 44, borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)', textDecoration: 'none'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8650A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#E8650A" stroke="none"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/tam%C3%A1s-sinthavong-737a191b5/" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 44, height: 44, borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)', textDecoration: 'none'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8650A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="4"/>
                  <line x1="8" y1="11" x2="8" y2="16"/>
                  <line x1="8" y1="8" x2="8" y2="8.5"/>
                  <line x1="12" y1="16" x2="12" y2="11"/>
                  <path d="M12 13a2 2 0 0 1 4 0v3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{
        background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '1.5rem 2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', color: '#2E2E2E', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} Sinthavong Tamás. All rights reserved.
        </span>
      </footer>
    </>
  );
}
