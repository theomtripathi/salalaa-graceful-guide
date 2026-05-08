import { createFileRoute } from "@tanstack/react-router";
import { Star, ScanLine, MapPin, BookOpen, Compass, Flame, Check, Bell } from "lucide-react";
import logo from "@/assets/logo.png";
import heroPhone from "@/assets/hero.png";
import featAlarm from "@/assets/feature-alarm.png";
import featScan from "@/assets/feature-scan.png";
import featTimes from "@/assets/feature-times.png";
import featAll from "@/assets/feature-all.png";
import arrow from "@/assets/arrow.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Salah Alarm — The alarm app that won't let you miss Salah" },
      { name: "description", content: "Salah Alarm rings until you scan your prayer mat. Build the habit Allah loves most. Download on the App Store." },
      { property: "og:title", content: "Salah Alarm — Prayer alarm that won't let you miss Salah" },
      { property: "og:description", content: "The alarm app that won't let you miss Salah. Scan-to-dismiss, accurate prayer times, Qibla, Quran." },
    ],
  }),
});

const APP_URL = "https://apps.apple.com/us/app/salahalarm-prayer-namaz-alarm/id6758457826";

function AppleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.65-2.323-7.34 0-4.31 2.797-6.6 5.552-6.6 1.4 0 2.59.93 3.487.93.853 0 2.2-1 3.778-1 .593 0 2.708.06 4.116 2.05-.121.075-2.43 1.418-2.43 4.235 0 3.27 2.86 4.42 2.93 4.43z" />
    </svg>
  );
}

function CTAButton({ size = "md", variant = "dark" }: { size?: "md" | "lg"; variant?: "dark" | "light" }) {
  const sizes = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  const variants = variant === "dark"
    ? "bg-deep-green text-cream hover:bg-[oklch(0.27_0.08_152)]"
    : "bg-cream text-deep-green hover:bg-white";
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full font-semibold transition-all hover:scale-[1.03] shadow-card ${sizes} ${variants}`}
    >
      <AppleLogo className="h-5 w-5" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-normal opacity-80">Download on the</span>
        <span>App Store</span>
      </span>
    </a>
  );
}

function Stars() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-5 w-5 fill-gold stroke-none text-gold" style={{ color: "var(--gold)", fill: "var(--gold)" }} />
      ))}
    </div>
  );
}

function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return <img src={logo} alt="Salah Alarm" className={`${className} rounded-xl object-cover`} />;
}

function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="text-xl font-bold text-cream font-display">Salah Alarm</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-cream/80 hover:text-cream">Features</a>
          <a href="#how" className="text-sm text-cream/80 hover:text-cream">How it works</a>
          <a href="#faq" className="text-sm text-cream/80 hover:text-cream">FAQ</a>
        </div>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-deep-green hover:scale-105 transition-transform">
          <AppleLogo className="h-4 w-4" /> Download
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-28 pb-20 md:pt-32 md:pb-32">
      <Nav />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-6 md:grid-cols-2 md:gap-0 md:px-[48px]">
        <div className="relative z-10">
          <Stars />
          <p className="mt-3 text-sm font-medium text-cream/90">Trusted by Muslims worldwide</p>
          <h1 className="font-display mt-6 text-5xl font-extrabold leading-[0.95] text-cream md:text-7xl">
            The alarm app<br />that won't let<br />you miss <span className="text-gold">Salah.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-cream/80">
            Salah Alarm keeps ringing until you scan your prayer mat. Build the habit Allah loves most — five times a day, every day.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTAButton size="lg" variant="light" />
            <span className="text-sm text-cream/70">iPhone</span>
          </div>
          <img
            src={arrow}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-0 hidden h-[22rem] w-auto rotate-[-15deg] md:block lg:-right-40"
          />
        </div>
        <div className="relative flex justify-center md:-ml-48 md:justify-start">
          <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <img src={heroPhone} alt="Salah Alarm app showing prayer times and next alarm" className="relative max-h-[640px] w-auto drop-shadow-2xl" />
        </div>
      </div>
      <div className="absolute -bottom-1 left-0 right-0 h-12 bg-cream" style={{ clipPath: "ellipse(80% 100% at 50% 100%)" }} />
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-extrabold text-deep-green md:text-5xl">{n}</div>
      <div className="mt-1 text-sm text-deep-green/60">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-8 px-6">
        <Stat n="5x" label="prayers a day" />
        <Stat n="100%" label="never miss again" />
        <Stat n="4.9★" label="App Store rating" />
      </div>
    </section>
  );
}

function FeatureRow({
  image,
  eyebrow,
  title,
  description,
  reverse = false,
  bg = "cream",
}: {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  reverse?: boolean;
  bg?: "cream" | "white";
}) {
  return (
    <section className={`py-20 md:py-28 ${bg === "cream" ? "bg-cream" : "bg-white"}`}>
      <div className={`mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative flex justify-center">
          <div className="absolute inset-x-10 bottom-0 h-2/3 rounded-[3rem] bg-deep-green/5" />
          <img src={image} alt="" className="relative max-h-[600px] w-auto" />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-deep-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-deep-green">
            {eyebrow}
          </div>
          <h2 className="font-display mt-5 text-4xl font-extrabold leading-tight text-deep-green md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-md text-lg text-deep-green/70">{description}</p>
          <div className="mt-8"><CTAButton variant="dark" /></div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const items = [
    { icon: Bell, title: "Strict prayer alarms", desc: "Rings until you physically prove you're praying." },
    { icon: ScanLine, title: "Scan your janamaz", desc: "Camera-based dismiss — no thoughtless swipe." },
    { icon: MapPin, title: "Accurate times", desc: "Precise prayer times for your exact location." },
    { icon: Compass, title: "Qibla compass", desc: "Find the direction of the Kaaba instantly." },
    { icon: BookOpen, title: "Quran reader", desc: "Read & reflect, all in one app." },
    { icon: Flame, title: "Streaks & history", desc: "Build the habit. Track every prayer." },
  ];
  return (
    <section id="features" className="bg-deep-green py-24 text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Everything you need</p>
          <h2 className="font-display mt-3 text-4xl font-extrabold md:text-5xl">One app. Every part of your prayer life.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl border border-cream/10 bg-cream/5 p-7 transition-colors hover:bg-cream/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient">
                <Icon className="h-6 w-6 text-deep-green" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-cream/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Set your prayer alarms", d: "Salah Alarm auto-loads accurate times for your city." },
    { n: "02", t: "When the time comes — it rings", d: "And keeps ringing. No silent dismiss." },
    { n: "03", t: "Scan your prayer mat", d: "Point your camera at your janamaz to stop the alarm." },
    { n: "04", t: "Pray. Repeat. Build the streak.", d: "Five times a day, the habit Allah loves most." },
  ];
  return (
    <section id="how" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="font-display max-w-2xl text-4xl font-extrabold text-deep-green md:text-5xl">How Salah Alarm works.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl bg-white p-7 shadow-card">
              <div className="font-display text-3xl font-extrabold text-gold">{s.n}</div>
              <h3 className="mt-3 text-lg font-bold text-deep-green">{s.t}</h3>
              <p className="mt-2 text-deep-green/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "Wallahi this app changed my Fajr. The scan thing actually works — I can't go back to sleep.", n: "Yusuf A.", r: "London" },
    { q: "Finally a Muslim app that respects how serious prayer is. Beautiful design too.", n: "Aisha M.", r: "Toronto" },
    { q: "My streak is at 47 days. I've never been this consistent in my life.", n: "Bilal R.", r: "Dubai" },
  ];
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 text-center">
          <Stars />
          <h2 className="font-display mt-4 text-4xl font-extrabold text-deep-green md:text-5xl">Loved by the Ummah.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.n} className="rounded-3xl bg-cream p-8 shadow-card">
              <Stars />
              <blockquote className="mt-5 text-lg leading-relaxed text-deep-green">"{t.q}"</blockquote>
              <figcaption className="mt-6 text-sm text-deep-green/60">
                <span className="font-semibold text-deep-green">{t.n}</span> · {t.r}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "How does the scan-to-dismiss work?", a: "Open your camera at your janamaz (prayer mat). Salah Alarm recognizes it and stops the alarm — proving you got out of bed." },
    { q: "Are prayer times accurate?", a: "Yes. Salah Alarm uses your precise location and trusted calculation methods for Fajr, Dhuhr, Asr, Maghrib, and Isha." },
    { q: "Where do the proceeds go?", a: "100% of proceeds go to victims of the war." },
    { q: "Is it on Android?", a: "Currently iPhone only. Android is on the roadmap, in shaa Allah." },
  ];
  return (
    <section id="faq" className="bg-cream py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-4xl font-extrabold text-deep-green md:text-5xl">Questions.</h2>
        <div className="mt-10 divide-y divide-deep-green/10">
          {qs.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-deep-green">
                {item.q}
                <span className="ml-4 text-2xl text-deep-green/40 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-deep-green/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-28">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-5xl font-extrabold leading-tight text-cream md:text-6xl">
          Don't miss another <span className="text-gold">Salah.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-cream/80">
          Download Salah Alarm today and let your alarm be the start of your best habit.
        </p>
        <div className="mt-10 flex justify-center">
          <CTAButton size="lg" variant="light" />
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-cream/70">
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> No ads</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Private</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> For the Ummah</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep-green py-12 text-cream/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
        <div className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="font-bold text-cream">Salah Alarm</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Salah Alarm. Built with niyyah.</p>
      </div>
    </footer>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-cream text-deep-green text-center text-sm py-2.5 px-4 font-semibold">
      <span className="text-gold">❤</span> 100% of proceeds go to victims of the war
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Hero />
      <Stats />
      <FeatureRow image={featAlarm} eyebrow="Strict mode" title={<>Alarm rings until <br />you scan your mat.</>} description="No more silencing Fajr and going back to sleep. The alarm only stops once your camera sees your janamaz." />
      <FeatureRow image={featScan} reverse bg="white" eyebrow="The habit" title={<>Scan, then pray.<br />Build what Allah loves.</>} description="A small ritual that makes a big difference. Point. Confirm. Stand. Pray." />
      <FeatureRow image={featTimes} eyebrow="Prayer history" title={<>Track every<br />prayer.</>} description="See your streaks, weekly and monthly progress, and stay accountable to yourself." />
      <FeatureRow image={featAll} reverse bg="white" eyebrow="Stay accountable" title={<>Build the habit<br />day by day.</>} description="Daily logs, streaks, and a clear view of your prayer life — all in one place." />
      <FeatureGrid />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
