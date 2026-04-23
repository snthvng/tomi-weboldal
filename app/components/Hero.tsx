export default function Hero() {
  return (
    <section className="grid-bg relative min-h-screen flex flex-col items-center justify-center px-8 text-center overflow-hidden">

      {/* Scanline */}
      <div className="scanline absolute top-0 h-px w-64 opacity-40"
        style={{ background: 'linear-gradient(90deg, transparent, #E8650A, transparent)' }} />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(232,101,10,0.07) 0%, transparent 70%)'
      }} />

      {/* Badge */}
      <div className="animate-fade-up mb-10 inline-flex items-center gap-2 px-5 py-2" style={{
        border: '1px solid rgba(232,101,10,0.25)',
        borderRadius: '999px',
        background: 'rgba(232,101,10,0.05)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        letterSpacing: '0.18em',
        color: '#E8650A',
        textTransform: 'uppercase'
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8650A', display: 'inline-block', animation: 'pulse-orange 2s infinite' }} />
        Available for new projects
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up-delay-1" style={{
        fontFamily: 'var(--font-space)',
        fontSize: 'clamp(2rem, 5vw, 4.5rem)',
        fontWeight: 700,
        lineHeight: 0.95,
        letterSpacing: '-0.04em',
        color: '#F5F5F5',
        marginBottom: '0.3rem'
      }}>
        Digital
      </h1>
      <h1 className="animate-fade-up-delay-2 text-glow" style={{
        fontFamily: 'var(--font-space)',
        fontSize: 'clamp(2rem, 5vw, 4.5rem)',
        fontWeight: 700,
        lineHeight: 0.95,
        letterSpacing: '-0.04em',
        color: '#E8650A',
        marginBottom: '2.5rem'
      }}>
        Marketing
      </h1>

      {/* Subtitle */}
      <p className="animate-fade-up-delay-3" style={{
        fontFamily: 'var(--font-inter)',
        fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
        color: '#6B6B6B',
        letterSpacing: '0.03em',
        maxWidth: '420px',
        lineHeight: 1.8,
        marginBottom: '3.5rem'
      }}>
        Strategy, advertising, production and more.
      </p>

      {/* CTA */}
      <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row gap-4 items-center">
        <a href="#contact" className="glow-orange" style={{
          background: '#E8650A',
          color: '#0A0A0A',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textDecoration: 'none',
          padding: '0.9rem 2.5rem',
          borderRadius: '999px',
          display: 'inline-block',
        }}>
          Start a project
        </a>
        <a href="#services" style={{
          color: '#F5F5F5',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.12em',
          textDecoration: 'none',
          padding: '0.9rem 2.5rem',
          border: '1px solid #2E2E2E',
          borderRadius: '999px',
          display: 'inline-block',
        }}>
          Our services
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, #E8650A, transparent)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#2E2E2E', letterSpacing: '0.2em', textTransform: 'uppercase' }}>scroll</span>
      </div>
    </section>
  );
}
