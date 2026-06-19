"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ============================================================
   Twilight Technologies brand
   Palette: Vivid Blue #0c3ea3 · Raisin Black #252424 · White
   Fonts: Orbitron (logo) · Ubuntu (headings) · Poppins (body)
   ============================================================ */

const BLUE = "#0c3ea3";
const INK = "#252424";

/* ─── Shared bits ─── */
/* Two "T"s merged within a circular form (the logo monogram). */
function TwilightMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="23" fill={BLUE} />
      <path
        d="M11 17h15M18.5 17v16"
        stroke="#ffffff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="rotate(14 28 25)" opacity="0.6">
        <path
          d="M22 18h15M29.5 18v16"
          stroke="#ffffff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function Star({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
    </svg>
  );
}

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}

function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Twilight Technologies"
      width={6000}
      height={3375}
      className={className}
      style={{ transform: "scale(3.0)" }}
      priority
    />
  );
}

/* ─── Data ─── */
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Software", href: "#software" },
  { label: "About Us", href: "/about-us" },
];

const heroStats = [
  { value: "10+", label: "Years of experience" },
  { value: "100+", label: "Projects delivered" },
  { value: "50+", label: "Happy clients" },
  { value: "2", label: "Global offices" },
];

const citedBy = [
  "Forbes",
  "TechCrunch",
  "The Verge",
  "Inc.",
  "Entrepreneur",
  "Mashable",
];

const categories = [
  {
    title: "Software Development",
    description: "Custom software, SaaS, enterprise & legacy modernization.",
    count: "SaaS & enterprise",
    icon: "code",
    tint: "bg-blue-50 text-blue-700",
  },
  {
    title: "Web & App Development",
    description: "Websites, mobile apps, e-commerce and progressive web apps.",
    count: "Web & mobile",
    icon: "web",
    tint: "bg-sky-50 text-sky-600",
  },
  {
    title: "Design",
    description: "UI/UX, product design, branding and creative services.",
    count: "UI/UX & branding",
    icon: "design",
    tint: "bg-violet-50 text-violet-600",
  },
  {
    title: "Marketing & Advertising",
    description: "SEO, PPC, social media, content and growth marketing.",
    count: "SEO & growth",
    icon: "megaphone",
    tint: "bg-rose-50 text-rose-600",
  },
  {
    title: "Latest Tech",
    description: "Blockchain, IoT, AR/VR and emerging technologies.",
    count: "Emerging tech",
    icon: "spark",
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Business & IT Services",
    description: "Consulting, cloud, BPO, QA and managed IT services.",
    count: "Cloud & managed IT",
    icon: "briefcase",
    tint: "bg-indigo-50 text-indigo-600",
  },
];

const reviews = [
  {
    company: "Bloom Consulting Services",
    quote:
      "A positive experience marked by strong collaboration, technical expertise, and success.",
    author: "Kunal Khamkar",
    role: "Manager at CEAT Tyre",
  },
  {
    company: "OutsourceRCM",
    quote:
      "Reliable billing support that helps streamline our administrative processes end to end.",
    author: "Max Kile",
    role: "Marketing Director at Cash4Car",
  },
  {
    company: "IndiaCADworks",
    quote:
      "Easy to work with, understood our requirements quickly, and delivered high-quality CAD.",
    author: "Jack Deline",
    role: "Marketing Director at Fateh",
  },
  {
    company: "Peeklogic",
    quote:
      "An overall great experience and I look forward to continuing to work with them.",
    author: "Julian De La Rosa",
    role: "IT Manager at CSE Electric",
  },
  {
    company: "Emergent Staffing",
    quote:
      "We really enjoyed working with Emergent. Communication was clear and on time.",
    author: "Tom Atchison",
    role: "Owner",
  },
  {
    company: "Mirimera",
    quote:
      "A smooth and positive experience, and they delivered a clean, professional product.",
    author: "Arthit Charoeyphon",
    role: "CTO at ThaiSoft Tech",
  },
];

const technologies = [
  {
    name: "Flutter",
    category: "Mobile Development",
    description:
      "Cross-platform apps for iOS and Android from a single codebase.",
  },
  {
    name: "Android",
    category: "Mobile Development",
    description: "Native Android applications built for performance and scale.",
  },
  {
    name: "Next.js",
    category: "Web Development",
    description: "Modern React frameworks for fast, SEO-friendly web apps.",
  },
  {
    name: "Laravel",
    category: "Backend Development",
    description: "Robust PHP frameworks for APIs, admin panels, and backends.",
  },
  {
    name: "Node.js",
    category: "Backend Development",
    description: "Scalable server-side JavaScript for APIs and real-time apps.",
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    description:
      "Collaborative design and prototyping for polished user experiences.",
  },
];

const stories = [
  {
    quote:
      "Twilight Technologies understood our requirements quickly and delivered a clean, professional product. Communication was clear throughout the project.",
    author: "CEO, Closeloop Technologies",
  },
  {
    quote:
      "A positive experience marked by strong collaboration and technical expertise. They helped us bring our vision to life on schedule.",
    author: "CTO, ThaiSoft Tech",
  },
  {
    quote:
      "Reliable end-to-end support that streamlined our operations. We look forward to continuing to work with their team.",
    author: "Marketing Director, Cash4Car",
  },
];

const trustPoints = [
  "Dedicated professionals focused on delivering results for every client.",
  "Transparent communication and collaboration from discovery through launch.",
  "Scalable, custom-built software tailored to your business goals.",
  "Trusted by startups and enterprises worldwide since 2015.",
];

/* ─── Category icons ─── */
function CategoryIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    web: "M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 3h18",
    design:
      "M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 11a2 2 0 11-4 0 2 2 0 014 0z",
    megaphone:
      "M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14",
    spark:
      "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 6.5L20 12l-4.5 2.5L13 21l-2.5-6.5L6 12l4.5-2.5L13 3z",
    briefcase:
      "M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM10 7V5h4v2",
  };
  return (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[type]} />
    </svg>
  );
}

/* ─── Header ─── */
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#top">
          <Logo className="h-10 w-auto max-md:relative max-md:left-10" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-navy/80 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/about-us#contact"
            className="text-sm font-semibold text-navy/80 transition-colors hover:text-navy"
          >
            Contact Us
          </a>
          <a
            href="/about-us#contact"
            className="inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BLUE }}
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-navy/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/about-us#contact"
              className="mt-2 inline-flex justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: BLUE }}
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-linear-to-b from-[#eef2fc] to-white"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold"
          style={{ color: BLUE }}
        >
          <TwilightMark className="h-4 w-4" />
          Custom Software Development &amp; IT Services
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
          Custom software solutions
          <br />
          for your <span style={{ color: BLUE }}>next project</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate">
          Twilight Technologies is a software company delivering custom
          development, web and mobile apps, UI/UX design, and IT services —
          trusted by clients worldwide since 2015.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-9 flex max-w-2xl flex-col gap-2 rounded-2xl border border-border bg-white p-2 shadow-lg sm:flex-row sm:rounded-full"
        >
          <div className="flex flex-1 items-center gap-2 px-4">
            <svg
              className="h-5 w-5 text-slate"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Tell us about your project or the service you need..."
              className="w-full bg-transparent py-3 text-sm text-navy placeholder:text-slate/60 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BLUE }}
          >
            Get a Quote
            <ArrowRight />
          </button>
        </form>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate/70">
            Cited as a source by
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {citedBy.map((name) => (
              <span key={name} className="text-base font-bold text-slate/50">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Categories ─── */
function Categories() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
            Software development services we provide
          </h2>
          <p className="mt-4 text-lg text-slate">
            From custom software and mobile apps to UI/UX design and managed IT
            — we build scalable solutions tailored to your business.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="/about-us#contact"
              className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${cat.tint}`}
              >
                <CategoryIcon type={cat.icon} />
              </div>
              <h3 className="text-lg font-bold text-navy">{cat.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                {cat.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate">
                  {cat.count}
                </span>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-0.5"
                  style={{ color: BLUE }}
                >
                  Explore
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="text-sm text-slate">
            Not sure which service fits your needs? Schedule a free
            consultation.
          </p>
          <a
            href="/about-us#contact"
            className="inline-flex items-center gap-1.5 rounded-md border-2 border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ─── */
function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-4 text-lg text-slate">
            Real feedback from businesses we&apos;ve partnered with on software
            projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.company}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-navy">{r.company}</h3>
                <span
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: "#f5a623" }}
                >
                  <Star className="h-3 w-3" />
                  5.0
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold text-navy">{r.author}</p>
                <p className="text-xs text-slate">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Software ─── */
function Software() {
  return (
    <section id="software" className="bg-slate-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
            Technologies we work with
          </h2>
          <p className="mt-4 text-lg text-slate">
            We build and integrate solutions using industry-leading platforms
            and tools to fit your business needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold text-white"
                  style={{ backgroundColor: BLUE }}
                >
                  {tech.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold leading-snug text-navy">
                    {tech.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate">
                    {tech.category}
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stories ─── */
function Stories() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Stories of trust &amp; success
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Hear from clients who have partnered with Twilight Technologies.
        </p>

        <div className="relative mt-12">
          <span className="mx-auto block" style={{ color: BLUE }}>
            <svg
              className="mx-auto h-10 w-10 opacity-40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </span>
          <p className="mt-6 text-xl font-medium leading-relaxed text-white sm:text-2xl">
            {stories[active].quote}
          </p>
          <p className="mt-6 text-sm font-semibold" style={{ color: BLUE }}>
            {stories[active].author}
          </p>

          <div className="mt-8 flex items-center justify-center gap-2">
            {stories.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-7" : "w-2 bg-white/30"}`}
                style={i === active ? { backgroundColor: BLUE } : undefined}
                aria-label={`Story ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why trust ─── */
function WhyTrust() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Image
              src="/logoTrans.png"
              alt="Twilight Technologies"
              width={1536}
              height={1024}
              className="h-14 w-14 object-contain"
              style={{ transform: "scale(2.0)" }}
            />
            <h2 className="mt-5 text-3xl font-extrabold text-navy sm:text-4xl">
              Why trust Twilight Technologies
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Twilight Technologies is a leading software company providing
              custom development, design, and IT services — helping businesses
              of all sizes build scalable, innovative solutions since 2015.
            </p>
          </div>

          <ul className="space-y-4">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-border bg-slate-light/60 p-5"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: BLUE }}
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-navy">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
const footerCols = [
  {
    title: "Categories",
    links: [
      "Software Development",
      "Web Development",
      "Mobile Apps",
      "UI/UX Design",
      "Digital Marketing",
    ],
  },
  {
    title: "Technologies",
    links: technologies.map((tech) => tech.name),
  },
  {
    title: "Working Hours",
    lines: ["Monday – Friday", "11:00 AM – 8:00 PM"],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/about-us#contact" },
      // { label: "Privacy Policy", href: "/privacy-policy" },
      // { label: "Terms & Conditions", href: "/terms-and-conditions" },
      // { label: "Careers", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="py-14" style={{ backgroundColor: INK }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo className="h-10 w-auto max-md:relative max-md:left-10" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              A leading software company delivering custom development, design,
              and IT services for businesses worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                {
                  label: "LinkedIn",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  label: "Facebook",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  label: "X",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors hover:text-white"
                  style={{ transition: "background-color .2s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = BLUE)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.1)")
                  }
                  aria-label={social.label}
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold text-white">{col.title}</h3>
              {"lines" in col && col.lines ? (
                <div className="mt-4 space-y-2.5">
                  {col.lines.map((line) => (
                    <p key={line} className="text-sm text-slate-400">
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => {
                    const label = typeof link === "string" ? link : link.label;
                    const href = typeof link === "string" ? "#" : link.href;

                    return (
                      <li key={label}>
                        <Link
                          href={href}
                          className="text-sm text-slate-400 transition-colors hover:text-white"
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Twilight Technologies PVT LTD. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function LandingPage() {
  return (
    <div className="twilight-brand">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Reviews />
        <Software />
        <Stories />
        <WhyTrust />
      </main>
      <Footer />
    </div>
  );
}
