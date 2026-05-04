import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Planner — snthvng",
  description: "Professional Instagram content planner for marketing agencies. Manage 3 clients, share approval links, plan content — all under your own brand.",
};

const features = [
  { icon: "📅", title: "Content Calendar", desc: "Monthly and weekly view — plan posts, schedule content, see everything at a glance." },
  { icon: "📱", title: "Feed Preview", desc: "Instagram-style 3-column grid so you and your client can preview exactly how the feed will look." },
  { icon: "✅", title: "Approval Flow", desc: "Clients can approve, request changes, or reject posts with one click. No more endless email threads." },
  { icon: "💬", title: "Post Chat", desc: "Each post has its own comment thread. Discuss captions, timing, visuals — all in one place." },
  { icon: "💡", title: "Ideas Board", desc: "You and your clients can drop content ideas into the calendar without creating a full post." },
  { icon: "👥", title: "3 Clients, 1 Interface", desc: "Manage 3 clients side by side. Each client only sees their own planner — nothing else." },
];

const steps = [
  { num: "01", title: "Create a Supabase account", desc: "Free. Your data stays in YOUR database — not mine, not anyone else's. 100% GDPR-safe.", time: "5 min" },
  { num: "02", title: "Set up the database", desc: "Copy-paste one SQL file into Supabase. No coding — just run it and you're done.", time: "1 min" },
  { num: "03", title: "Edit the HTML file", desc: "Paste your Supabase URL and key into the config. That's it — two lines.", time: "2 min" },
  { num: "04", title: "Deploy to Netlify", desc: "Drag and drop the file to Netlify. Free hosting, instant URL, your brand name.", time: "5 min" },
  { num: "05", title: "Share with your clients", desc: "Send each client their unique link. They view, comment, approve — you stay in control.", time: "2 min" },
];

const faqs = [
  { q: "How much does it cost?", a: "Supabase is free up to ~500 MB. Netlify is free up to 100 GB/month traffic. You only pay for the planner itself — nothing else." },
  { q: "Do I need coding skills?", a: "No. If you can copy-paste and drag & drop a file, you can set this up. The guide walks you through every click." },
  { q: "Where is the data stored?", a: "In YOUR Supabase account. I have zero access to your clients' data. Full control, fully GDPR-compliant." },
  { q: "Can my client use it on mobile?", a: "Yes. The planner is mobile responsive — calendar switches to compact view automatically." },
  { q: "What if I need more than 3 clients?", a: "Current version (v1.6) supports 3 clients. Reach out and I'll let you know when the expanded version is ready." },
];

export default function SocialPlannerPage() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh', color: '#F5F5F5' }}>

      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.6rem 1.2rem', width: 'calc(100% - 2rem)', maxWidth: '900px',
        background: 'rgba(17,17,17,0.8)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(232,101,10,0.15)', borderRadius: '999px'
      }}>
        <a href="/" style={{ fontFamily: 'var(--font-mono)', color: '#E8650A', fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 600, textDecoration: 'none' }}>
          ← snthvng
        </a>
        <a href="https://social-planner-test.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
          background: '#E8650A', color: '#0A0A0A', fontSize: '0.72rem',
          letterSpacing: '0.05em', textDecoration: 'none', fontWeight: 700,
          padding: '0.45rem 1rem', borderRadius: '999px', fontFamily: 'var(--font-mono)'
        }}>
          Try demo →
        </a>
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
          v1.6 — Available now
        </div>

        <h1 style={{
          fontFamily: 'var(--font-space)', fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1rem'
        }}>
          Social Planner
        </h1>
        <p style={{
          fontFamily: 'var(--font-inter)', fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#6B6B6B', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.7
        }}>
          A professional Instagram content planner for marketing freelancers and agencies. Manage 3 clients, share approval links, plan content — all under your own brand.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://social-planner-test.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
            background: '#E8650A', color: '#0A0A0A', fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none',
            padding: '0.9rem 2.5rem', borderRadius: '999px',
            boxShadow: '0 0 30px rgba(232,101,10,0.4)'
          }}>
            Try the demo →
          </a>
          <a href="#how-it-works" style={{
            color: '#F5F5F5', fontFamily: 'var(--font-mono)', fontSize: '0.82rem',
            letterSpacing: '0.1em', textDecoration: 'none',
            padding: '0.9rem 2.5rem', borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            How it works
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
          {[["~15 min", "Setup time"], ["Free", "Hosting cost"], ["3", "Clients / planner"], ["100%", "Your data"]].map(([val, label]) => (
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
          <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#E8650A',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              background: 'rgba(232,101,10,0.08)', border: '1px solid rgba(232,101,10,0.2)',
              padding: '0.35rem 1.2rem', borderRadius: '999px'
            }}>Features</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {features.map((f) => (
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

      {/* How it works */}
      <section id="how-it-works" style={{ padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#E8650A',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              background: 'rgba(232,101,10,0.08)', border: '1px solid rgba(232,101,10,0.2)',
              padding: '0.35rem 1.2rem', borderRadius: '999px'
            }}>Setup in ~15 min</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{
                display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem', padding: '1.5rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#E8650A',
                  letterSpacing: '0.15em', minWidth: 28, marginTop: 2
                }}>{s.num}</span>
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
          <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#E8650A',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              background: 'rgba(232,101,10,0.08)', border: '1px solid rgba(232,101,10,0.2)',
              padding: '0.35rem 1.2rem', borderRadius: '999px'
            }}>FAQ</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((f) => (
              <div key={f.q} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem', padding: '1.5rem'
              }}>
                <h3 style={{ fontFamily: 'var(--font-space)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{f.q}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#6B6B6B', lineHeight: 1.7 }}>{f.a}</p>
              </div>
            ))}
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
            Ready to try it?
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', color: '#6B6B6B', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Try the live demo first — no signup needed. If you want your own version, reach out.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://social-planner-test.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
              background: '#E8650A', color: '#0A0A0A', fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none',
              padding: '0.9rem 2rem', borderRadius: '999px',
              boxShadow: '0 0 30px rgba(232,101,10,0.3)'
            }}>
              Try demo →
            </a>
            <a href="mailto:tamas@snthvng.com" style={{
              color: '#F5F5F5', fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              letterSpacing: '0.1em', textDecoration: 'none',
              padding: '0.9rem 2rem', borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              Get in touch
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
