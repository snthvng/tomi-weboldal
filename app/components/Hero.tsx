export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 text-center overflow-hidden" style={{ minHeight: '70vh', paddingTop: '7rem', paddingBottom: '2rem' }}>

      <div className="scanline absolute top-0 h-px w-64 opacity-40"
        style={{ background: 'linear-gradient(90deg, transparent, #E8650A, transparent)' }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(232,101,10,0.07) 0%, transparent 70%)'
      }} />

      {/* Big background SNTHVNG */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-space)',
        fontSize: 'clamp(5rem, 22vw, 20rem)',
        fontWeight: 800,
        letterSpacing: '-0.05em',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(232,101,10,0.12)',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 0
      }}>
        SNTHVNG
      </div>

      {/* Badge */}
      <div className="animate-fade-up mb-5 inline-flex items-center gap-2 px-4 py-2" style={{
        border: '1px solid rgba(232,101,10,0.25)', borderRadius: '999px',
        background: 'rgba(232,101,10,0.05)', fontFamily: 'var(--font-mono)',
        fontSize: '0.62rem', letterSpacing: '0.15em', color: '#E8650A',
        textTransform: 'uppercase', position: 'relative', zIndex: 1
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8650A', display: 'inline-block', animation: 'pulse-orange 2s infinite' }} />
        Available for new projects
      </div>

      <h1 className="animate-fade-up-delay-1" style={{ position: 'relative', zIndex: 1,
        fontFamily: 'var(--font-space)', fontSize: 'clamp(3rem, 10vw, 7rem)',
        fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.04em',
        color: '#F5F5F5', marginBottom: '0.2rem'
      }}>
        Digital
      </h1>
      <h1 className="animate-fade-up-delay-2 text-glow" style={{ position: 'relative', zIndex: 1,
        fontFamily: 'var(--font-space)', fontSize: 'clamp(3rem, 10vw, 7rem)',
        fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.04em',
        color: '#E8650A', marginBottom: '1.2rem'
      }}>
        Marketing
      </h1>

      <p className="animate-fade-up-delay-3" style={{ position: 'relative', zIndex: 1,
        fontFamily: 'var(--font-inter)', fontSize: 'clamp(0.85rem, 2vw, 1rem)',
        color: '#6B6B6B', letterSpacing: '0.03em', maxWidth: '380px', lineHeight: 1.7,
      }}>
        Strategy, advertising, production and more.
      </p>
    </section>
  );
}
