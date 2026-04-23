export default function Footer() {
  return (
    <>
      {/* Contact CTA — compact */}
      <section id="contact" style={{
        padding: '5rem 2rem', textAlign: 'center',
        background: '#0A0A0A', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(232,101,10,0.07) 0%, transparent 70%)'
        }} />
        <div style={{
          maxWidth: '750px', margin: '0 auto', position: 'relative',
          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '2rem', padding: '3.5rem 3rem'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-space)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700, color: '#F5F5F5', marginBottom: '0.75rem',
            letterSpacing: '-0.03em', lineHeight: 1.1
          }}>
            Got a project?
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', color: '#6B6B6B',
            fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: 1.7
          }}>
            Let&apos;s talk about how we can grow your brand together.
          </p>
          <a href="mailto:hello@snthvng.com" className="glow-orange" style={{
            display: 'inline-block', background: '#E8650A', color: '#0A0A0A',
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700,
            letterSpacing: '0.12em', textDecoration: 'none',
            padding: '0.9rem 2.5rem', borderRadius: '999px'
          }}>
            hello@snthvng.com
          </a>
        </div>
      </section>

      {/* Footer bar */}
      <footer style={{
        background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '1.5rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem'
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', color: '#E8650A', fontSize: '0.85rem', letterSpacing: '0.15em' }}>
          snthvng
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', color: '#2E2E2E', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} snthvng. All rights reserved.
        </span>
      </footer>
    </>
  );
}
