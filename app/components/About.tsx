"use client";
import { useLang } from "../context/lang";

export default function About() {
  const { lang } = useLang();

  const t = {
    hu: {
      label: "Rólam",
      heading1: "Social-first.",
      heading2: "Eredményorientált.",
      p1: "Az elmúlt 5 évet azzal töltöttem, hogy a közösségi médiában élek és lélegzem — stratégiákat építek, fizetett kampányokat futtatok, és olyan tartalmakat alkotok, amelyek valóban hatnak az emberekre. A Meta hirdetésektől a teljes tartalomgyártásig az adat és a kreativitás metszéspontján dolgozom.",
      p2: "Legyen szó egy megállíthatatlan Reelről, egy magasan teljesítő PPC kampányról vagy egy teljesen nulláról felépített social stratégiáról — ugyanolyan megszállottsággal közelítek minden projekthez.",
      stats: [
        { value: "5+", label: "Év a social médiában" },
        { value: "30+", label: "Lefutott kampány" },
        { value: "15+", label: "Elégedett ügyfél" },
      ]
    },
    en: {
      label: "About",
      heading1: "Social-first.",
      heading2: "Results-obsessed.",
      p1: "I've spent the last 5 years living and breathing social media — building strategies, running paid campaigns, and creating content that actually moves people. From Meta ads to full content production, I work at the intersection of data and creativity.",
      p2: "Whether it's a scroll-stopping Reel, a high-performing PPC campaign, or a social strategy built from scratch — I bring the same obsession to every project.",
      stats: [
        { value: "5+", label: "Years in social media" },
        { value: "30+", label: "Campaigns delivered" },
        { value: "15+", label: "Happy clients" },
      ]
    }
  };

  const copy = t[lang];

  return (
    <section id="about" style={{ background: '#0A0A0A', padding: '3rem 1.25rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#E8650A',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            background: 'rgba(232,101,10,0.08)', border: '1px solid rgba(232,101,10,0.2)',
            padding: '0.35rem 1.2rem', borderRadius: '999px'
          }}>
            {copy.label}
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
        </div>

        <div className="about-grid" style={{
          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '2rem', padding: '2rem',
        }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-space)', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              fontWeight: 700, color: '#F5F5F5', marginBottom: '1.25rem',
              letterSpacing: '-0.03em', lineHeight: 1.15
            }}>
              {copy.heading1}<br />
              <span style={{ color: '#E8650A' }}>{copy.heading2}</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
              color: '#6B6B6B', lineHeight: 1.85, marginBottom: '1rem'
            }}>
              {copy.p1}
            </p>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
              color: '#6B6B6B', lineHeight: 1.85
            }}>
              {copy.p2}
            </p>
          </div>

          {/* Right — Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {copy.stats.map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem', padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.25rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-space)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 700, color: '#E8650A', lineHeight: 1
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  color: '#6B6B6B', letterSpacing: '0.12em', textTransform: 'uppercase'
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
