import HeroSpline from './HeroSpline';
import Image from 'next/image';
import CoverageMap from './CoverageMap';
import { lots } from './lots';

const features = [
  { num: '01', title: 'Instant\nReports',          desc: 'Students report TAPS the moment they spot them. You get notified instantly, even before you think to check.' },
  { num: '02', title: 'Smart\nAlerts',             desc: "Only pings when you're parked at an affected lot. Set your lot, park, and let TapOut watch your back." },
  { num: '03', title: 'Parking\nPredictions',  desc: 'Historical patterns power AI predictions. Know your risk before you even pull in.' },
  { num: '04', title: 'Community\nFeed',           desc: 'Upvote real sightings, flag false ones. The crowd keeps the data honest, always.' },
];

const faqs = [
  { num: 'Q1', q: 'How do I report a TAPS sighting?',    a: 'Open the app, tap the Report button, and select your current lot. Sightings go live within seconds for everyone parked nearby.' },
  { num: 'Q2', q: 'When will TapOut be available?',       a: "We're currently in closed beta at UC Davis. Join the waitlist above to be first in line when we open up." },
  { num: 'Q3', q: 'What parking lots are covered?',       a: 'ARC, Memorial Union (Quad), Pavilion (Hutchison), and Tercero. Coverage expands as the community grows.' },
  { num: 'Q4', q: 'How accurate are community reports?',  a: 'Users can upvote real sightings and flag false ones. The crowd self-regulates, and high-activity lots maintain strong real-time accuracy.' },
  { num: 'Q5', q: 'What data do you store?',              a: "We don't store any of your email beyond what's needed for basic authentication — nothing you do in the app can be tied back to you personally." },
];

export default function Home() {
  return (
    <div className="bg-white text-[#0a0a0a]" style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 bg-transparent">
        <div className="flex items-center gap-2.5">
          <Image src="/tapout-logo.png" alt="TapOut" width={30} height={30} className="rounded-[7px]" />
          <span className="font-bold text-[17px] tracking-[-0.4px]" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Tap<span className="text-[#9CAF88]">Out</span>
          </span>
        </div>
        <a href="#about" className="text-[#0a0a0a] text-[13px] font-semibold no-underline tracking-[-0.1px]">
          Download
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="relative w-full h-[62.5vw] md:h-[100svh]">
        <HeroSpline />
      </section>

      {/* ── Ticker ── */}
      <div className="flex overflow-hidden whitespace-nowrap bg-[#0a0a0a] text-white py-[13px] text-[11px] tracking-[0.18em] uppercase">
        {Array(3).fill(['UC Davis', '·', 'Real-Time Alerts', '·', 'Parking Intelligence', '·', 'Community Powered', '·', 'Est. 2026', '·']).flat().map((item, i) => (
          <span key={i} className={`px-5 shrink-0 ${item === '·' ? 'text-[#9CAF88]' : 'text-white'}`}>{item}</span>
        ))}
      </div>

      {/* ── About + Map ── */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2 border-t-[3px] border-[#0a0a0a]">

        {/* Left — Description */}
        <div className="flex flex-col justify-between gap-12 p-8 md:px-14 md:py-20 border-b-[3px] border-[#0a0a0a] md:border-b-0 md:border-r-[3px]">
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase opacity-35 mb-7">
              What is TapOut?
            </p>
            <h2
              className="font-extrabold leading-none tracking-[-2.5px] mb-8"
              style={{ fontFamily: 'var(--font-plus-jakarta)', fontSize: 'clamp(42px, 5vw, 68px)' }}
            >
              Park without<br />the <span className="text-[#9CAF88]">anxiety.</span>
            </h2>
            <p className="text-[16px] leading-[1.75] text-black/50 max-w-[400px]">
              TapOut tracks TAPS enforcement in real-time across UC Davis parking structures.
              Students report sightings, you get instant alerts — one centralized place, no more Reddit threads.
            </p>
          </div>
          <div className="flex gap-3 self-start flex-wrap">
            {/* <a href="#" className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-[26px] py-[14px] no-underline opacity-40 cursor-not-allowed pointer-events-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
              </svg>
              <div className="text-left leading-[1.2]">
                <div className="text-[10px] opacity-65 font-normal tracking-[0.06em] uppercase">Download on the</div>
                <div className="text-[17px] font-bold tracking-[-0.3px]">App Store</div>
              </div>
            </a> */}

            <a href="https://forms.gle/7DjvSppi1Q3WQrNJA" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#9CAF88] text-[#0a0a0a] px-[26px] py-[14px] no-underline">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0a0a0a">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
              <div className="text-left leading-[1.2]">
                <div className="text-[10px] opacity-60 font-normal tracking-[0.06em] uppercase">Be first to know</div>
                <div className="text-[17px] font-bold tracking-[-0.3px]">Join Waitlist</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right — Map */}
        <div className="relative overflow-hidden min-h-[500px]">
          <div className="absolute top-5 left-5 z-10 bg-[#0a0a0a] text-white px-3 py-[5px] text-[10px] tracking-[0.18em] uppercase font-semibold">
            Coverage Map
          </div>
          <CoverageMap />
          <div
            className="absolute bottom-0 left-0 right-0 z-10 flex gap-2 flex-wrap items-end px-5 pb-5 pt-10"
            style={{ background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)' }}
          >
            {lots.map(lot => (
              <span key={lot.code} className="bg-white border-[1.5px] border-[#0a0a0a] px-[10px] py-1 text-[11px] font-semibold tracking-[0.02em]">
                {lot.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t-[3px] border-[#0a0a0a]">
        <div className="flex justify-between items-end px-6 md:px-14 py-8 md:pt-14 md:pb-7 border-b border-black/10">
          <p className="text-[11px] tracking-[0.18em] uppercase opacity-35">Features</p>
          <p className="text-[11px] tracking-[0.18em] uppercase opacity-35">04 Total</p>
        </div>

        {features.map((feat, i) => (
          <div
            key={i}
            className="grid px-6 py-8 md:px-14 md:py-11 border-b border-black/10 items-start gap-x-6 md:gap-x-10 [grid-template-columns:48px_1fr] md:[grid-template-columns:72px_1fr_1fr]"
          >
            <span className="text-[12px] font-bold text-[#9CAF88] tracking-[0.08em] pt-[10px]">
              {feat.num}
            </span>
            <div className="flex flex-col gap-4 md:contents">
              <h3
                className="font-extrabold leading-none tracking-[-1.5px] [white-space:pre-line]"
                style={{ fontFamily: 'var(--font-plus-jakarta)', fontSize: 'clamp(30px, 3.5vw, 52px)' }}
              >
                {feat.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-black/50 max-w-[400px] md:pt-[10px]">
                {feat.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Support ── */}
      <section id="support" className="border-t-[3px] border-[#0a0a0a]">
        <div className="flex justify-between items-end px-6 md:px-14 py-8 md:pt-14 md:pb-7 border-b border-black/10">
          <p className="text-[11px] tracking-[0.18em] uppercase opacity-35">Support</p>
          <p className="text-[11px] tracking-[0.18em] uppercase opacity-35">05 Questions</p>
        </div>

        {faqs.map((faq, i) => (
          <div key={i} className="grid px-6 py-7 md:px-14 md:py-10 border-b border-black/10 items-start gap-x-6 md:gap-x-10 [grid-template-columns:48px_1fr] md:[grid-template-columns:72px_1fr_1fr]">
            <span className="text-[12px] font-bold text-[#9CAF88] tracking-[0.08em] pt-[3px]">{faq.num}</span>
            <div className="flex flex-col gap-3 md:contents">
              <p className="font-bold text-[15px] tracking-[-0.3px] leading-snug">{faq.q}</p>
              <p className="text-[15px] leading-[1.75] text-black/50 max-w-[400px]">{faq.a}</p>
            </div>
          </div>
        ))}

        {/* Contact row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-6 md:px-14 py-10">
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase opacity-35 mb-2">Still have questions?</p>
            <p className="text-[15px] leading-[1.75] text-black/50">Reach out — we read everything.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="mailto:ucd.tapout@gmail.com"
              className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-[26px] py-[14px] no-underline">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <div className="text-left leading-[1.2]">
                <div className="text-[10px] opacity-65 font-normal tracking-[0.06em] uppercase">Email us</div>
                <div className="text-[15px] font-bold tracking-[-0.3px]">ucd.tapout@gmail.com</div>
              </div>
            </a>
            <a href="https://forms.gle/ZtoMx4skv27RKYz98" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#9CAF88] text-[#0a0a0a] px-[26px] py-[14px] no-underline">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a0a0a">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
              </svg>
              <div className="text-left leading-[1.2]">
                <div className="text-[10px] opacity-60 font-normal tracking-[0.06em] uppercase">Submit a request</div>
                <div className="text-[15px] font-bold tracking-[-0.3px]">Contact Form</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t-[3px] border-[#0a0a0a] px-6 md:px-14 py-7 flex flex-wrap justify-between items-center gap-3 text-[12px] text-black/35 tracking-[0.04em]">
        <div className="flex items-center gap-2">
          <Image src="/tapout-logo.png" alt="TapOut" width={22} height={22} className="rounded-[5px] opacity-60" />
          <span>© 2026 TapOut · UC Davis</span>
        </div>
        <span>Made with love by fellow  Aggies.</span>
      </footer>

    </div>
  );
}
