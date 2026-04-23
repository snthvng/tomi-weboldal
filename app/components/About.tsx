const stats = [
  { value: "5+", label: "Years experience" },
  { value: "30+", label: "Projects delivered" },
  { value: "15+", label: "Happy clients" },
];

export default function About() {
  return (
    <section id="about" style={{ background: '#0A0A0A', padding: '8rem 2rem' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '2rem', padding: '4rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'
      }}>

        {/* Left */}
        <div>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#E8650A',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            background: 'rgba(232,101,10,0.08)', border: '1px solid rgba(232,101,10,0.2)',
            padding: '0.35rem 1rem', borderRadius: '999px', display: 'inline-block', marginBottom: '1.5rem'
          }}>
            About
          </span>
          <h2 style={{
            fontFamily: 'var(--font-space)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700, color: '#F5F5F5', marginBottom: '1.5rem',
            letterSpacing: '-0.03em', lineHeight: 1.15
          }}>
            We make brands<br />
            <span style={{ color: '#E8650A' }}>impossible to ignore.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '0.95rem',
            color: '#6B6B6B', lineHeight: 1.85, marginBottom: '1rem'
          }}>
            snthvng is a digital marketing studio built for brands that want to stand out. We combine sharp strategy with bold creative to drive real, measurable results.
          </p>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '0.95rem',
            color: '#6B6B6B', lineHeight: 1.85
          }}>
            From the first touchpoint to the final conversion — we&apos;re with you every step of the way.
          </p>

          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem',
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
            color: '#E8650A', letterSpacing: '0.12em', textTransform: 'uppercase',
            textDecoration: 'none', border: '1px solid rgba(232,101,10,0.3)',
            padding: '0.6rem 1.4rem', borderRadius: '999px',
            background: 'rgba(232,101,10,0.06)'
          }}>
            Let&apos;s work together →
          </a>
        </div>

        {/* Right — Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '1.25rem', padding: '1.8rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '0.3rem'
            }}>
              <span style={{
                fontFamily: 'var(--font-space)', fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700, color: '#E8650A', lineHeight: 1
              }}>
                {stat.value}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: '#6B6B6B', letterSpacing: '0.12em', textTransform: 'uppercase'
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
