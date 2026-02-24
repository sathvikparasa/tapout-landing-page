import HeroSpline from './HeroSpline';
import Image from 'next/image';
import CoverageMap from './CoverageMap';
import { lots } from './lots';

export default function Home() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}>

      {/* ── Navbar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 40px',
        background: 'transparent',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src="/tapout-logo.png" alt="TapOut" width={30} height={30} style={{ borderRadius: 7 }} />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.4px', fontFamily: 'var(--font-plus-jakarta)' }}>
            Tap<span style={{ color: '#9CAF88' }}>Out</span>
          </span>
        </div>
        <a href="#about" style={{
          color: '#0a0a0a',
          fontSize: 13, fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.1px',
        }}>
          Download
        </a>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <HeroSpline />
      </section>

      {/* ── Ticker ── */}
      <div style={{
        background: '#0a0a0a', color: '#fff',
        padding: '13px 0',
        fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
        display: 'flex', gap: 0, overflow: 'hidden', whiteSpace: 'nowrap',
      }}>
        {Array(3).fill(['UC Davis', '·', 'Real-Time Alerts', '·', 'Parking Intelligence', '·', 'Community Powered', '·', 'Est. 2026', '·']).flat().map((item, i) => (
          <span key={i} style={{ padding: '0 20px', color: item === '·' ? '#9CAF88' : '#fff' }}>{item}</span>
        ))}
      </div>

      {/* ── About + Map ── */}
      <section id="about" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        borderTop: '3px solid #0a0a0a',
      }}>
        {/* Left — Description */}
        <div style={{
          padding: '80px 56px',
          borderRight: '3px solid #0a0a0a',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 48,
        }}>
          <div>
            <p style={{
              fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
              opacity: 0.35, marginBottom: 28,
            }}>
              What is TapOut?
            </p>
            <h2 style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: 'clamp(42px, 5vw, 68px)',
              fontWeight: 800, lineHeight: 1.0,
              letterSpacing: '-2.5px', marginBottom: 32,
            }}>
              Park without<br />the <span style={{ color: '#9CAF88' }}>anxiety.</span>
            </h2>
            <p style={{
              fontSize: 16, lineHeight: 1.75, color: 'rgba(0,0,0,0.5)',
              maxWidth: 400,
            }}>
              TapOut tracks TAPS enforcement in real-time across UC Davis parking structures.
              Students report sightings, you get instant alerts. No more going to YikYak or Reddit; instead, just one centralized place.
            </p>
          </div>

          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: '#0a0a0a', color: '#fff',
            padding: '14px 26px',
            textDecoration: 'none', alignSelf: 'flex-start',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
            </svg>
            <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
              <div style={{ fontSize: 10, opacity: 0.65, fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Download on the</div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.3px' }}>App Store</div>
            </div>
          </a>
        </div>

        {/* Right — Map */}
        <div style={{ position: 'relative', minHeight: 500, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: 20, left: 20, zIndex: 10,
            background: '#0a0a0a', color: '#fff',
            padding: '5px 12px', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            Current Supported Locations
          </div>
          <CoverageMap />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            padding: '40px 20px 20px',
            display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'flex-end',
          }}>
            {lots.map(lot => (
              <span key={lot.code} style={{
                background: '#fff', border: '1.5px solid #0a0a0a',
                padding: '4px 10px', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.02em',
              }}>
                {lot.name} ({lot.code})
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      {/* <div style={{
        borderTop: '3px solid #0a0a0a', borderBottom: '3px solid #0a0a0a',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      }}>
        {[
          { num: '2,400+', label: 'Citations Avoided' },
          { num: '5', label: 'Lots Covered' },
          { num: '< 30s', label: 'Alert Speed' },
        ].map((stat, i) => (
          <div key={i} style={{
            padding: '52px 40px', textAlign: 'center',
            borderRight: i < 2 ? '3px solid #0a0a0a' : undefined,
          }}>
            <div style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 800, letterSpacing: '-2px', color: '#9CAF88',
              lineHeight: 1,
            }}>
              {stat.num}
            </div>
            <div style={{
              fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
              opacity: 0.4, marginTop: 10, fontWeight: 500,
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div> */}

      {/* ── Features — Manifesto List ── */}
      <section>
        <div style={{
          padding: '56px 56px 28px',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.35 }}>
            Features
          </p>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.35 }}>
            04 Total
          </p>
        </div>

        {[
          {
            num: '01',
            title: 'Live\nSightings',
            desc: 'Students report TAPS the moment they spot them. You get notified instantly, even before you think to check.',
          },
          {
            num: '02',
            title: 'Smart\nAlerts',
            desc: 'Only pings when you\'re parked at an affected lot. Set your lot, park, and let TapOut watch your back.',
          },
          {
            num: '03',
            title: 'Enforcement\nPredictions',
            desc: 'Historical patterns power AI predictions. Know your risk before you even pull in.',
          },
          {
            num: '04',
            title: 'Community\nFeed',
            desc: 'Upvote real sightings, flag false ones. The crowd keeps the data honest, always.',
          },
        ].map((feat, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '72px 1fr 1fr',
            gap: 40,
            padding: '44px 56px',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            alignItems: 'start',
          }}>
            <span style={{
              fontSize: 12, fontWeight: 700, color: '#9CAF88',
              letterSpacing: '0.08em', paddingTop: 10,
            }}>
              {feat.num}
            </span>
            <h3 style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: 'clamp(30px, 3.5vw, 52px)',
              fontWeight: 800, lineHeight: 1.0,
              letterSpacing: '-1.5px', whiteSpace: 'pre-line',
            }}>
              {feat.title}
            </h3>
            <p style={{
              fontSize: 15, lineHeight: 1.75, color: 'rgba(0,0,0,0.5)',
              maxWidth: 400, paddingTop: 10,
            }}>
              {feat.desc}
            </p>
          </div>
        ))}
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: '3px solid #0a0a0a',
        padding: '28px 56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 12, color: 'rgba(0,0,0,0.35)',
        letterSpacing: '0.04em',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Image src="/tapout-logo.png" alt="TapOut" width={22} height={22} style={{ borderRadius: 5, opacity: 0.6 }} />
          <span>© 2026 TapOut · UC Davis</span>
        </div>
        <span>Built for Aggies, by Aggies</span>
      </footer>

    </div>
  );
}
