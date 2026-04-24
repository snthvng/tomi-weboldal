"use client";
import { useState } from "react";

const services = [
  {
    id: "strategy",
    number: "01",
    title: "Strategy",
    subtitle: "Plan smarter. Grow faster.",
    description: "Social-first marketing strategies built around your brand and audience. From content calendars to full campaign planning — I map out what to post, when, and why it works.",
    tags: ["Social Media Strategy", "Content planning", "Campaign planning", "Analytics"],
    accent: "Strategy",
    visual: "📐"
  },
  {
    id: "ppc",
    number: "02",
    title: "Social PPC",
    subtitle: "Maximum reach. Minimum waste.",
    description: "Performance-focused ad campaigns on Meta, TikTok and beyond. Every forint spent is tracked, tested, and optimized — so your budget actually works for you.",
    tags: ["Meta Ads", "TikTok Ads", "Retargeting", "Performance"],
    accent: "PPC",
    visual: "⚡"
  },
  {
    id: "production",
    number: "03",
    title: "Content Production",
    subtitle: "Content that stops the scroll.",
    description: "Photo and video production made for social — Reels, Stories, campaign visuals. I handle the creative side so your feed looks as good as it performs.",
    tags: ["Video", "Photography", "Reels", "Motion"],
    accent: "Production",
    visual: "🎬"
  }
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" style={{ background: '#0A0A0A', padding: '3rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#E8650A',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            background: 'rgba(232,101,10,0.08)', border: '1px solid rgba(232,101,10,0.2)',
            padding: '0.35rem 1.2rem', borderRadius: '999px', display: 'inline-block'
          }}>
            Services
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* Interactive panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>

          {/* Left — service list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {services.map((s, i) => (
              <div
                key={s.id}
                onMouseEnter={() => setActive(i)}
                style={{
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  background: active === i ? 'rgba(232,101,10,0.06)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${active === i ? 'rgba(232,101,10,0.3)' : 'rgba(255,255,255,0.05)'}`,
                  cursor: 'default',
                  transition: 'background 0.3s, border-color 0.3s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                      color: active === i ? '#E8650A' : '#2E2E2E',
                      letterSpacing: '0.2em', transition: 'color 0.3s'
                    }}>
                      {s.number}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-space)', fontSize: '1.3rem',
                      fontWeight: 700,
                      color: active === i ? '#F5F5F5' : '#6B6B6B',
                      transition: 'color 0.3s'
                    }}>
                      {s.title}
                    </h3>
                  </div>
                  <span style={{ fontSize: '1.2rem', opacity: active === i ? 1 : 0.2, transition: 'opacity 0.3s' }}>
                    {s.visual}
                  </span>
                </div>
                {active === i && (
                  <p style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.85rem',
                    color: '#6B6B6B', lineHeight: 1.7, marginTop: '1rem',
                    animation: 'fadeUp 0.4s ease forwards'
                  }}>
                    {s.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right — detail panel */}
          <div style={{
            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '1.5rem', padding: '3rem',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
          }}>
            <div key={active} style={{ animation: 'fadeUp 0.35s ease forwards' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2.5rem', display: 'block', marginBottom: '1.5rem' }}>
                {services[active].visual}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-space)', fontSize: '1.8rem',
                fontWeight: 700, color: '#F5F5F5', marginBottom: '0.5rem', letterSpacing: '-0.02em'
              }}>
                {services[active].title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                color: '#E8650A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem'
              }}>
                {services[active].subtitle}
              </p>
              <p style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.92rem',
                color: '#6B6B6B', lineHeight: 1.85, marginBottom: '2rem'
              }}>
                {services[active].description}
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {services[active].tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                  color: '#E8650A', border: '1px solid rgba(232,101,10,0.25)',
                  padding: '0.35rem 0.9rem', letterSpacing: '0.08em',
                  borderRadius: '999px', background: 'rgba(232,101,10,0.06)'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
