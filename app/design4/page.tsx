"use client";

import { useState } from "react";
import {
  industries,
  services,
  features,
  stats,
  testimonials,
  partners,
} from "@/lib/data";
import {
  IndustryIcon,
  ServiceIcon,
  FeatureIcon,
  ArrowRight,
} from "@/components/icons";

/* ─── Header ─── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Industries", href: "#industries", dropdown: true },
  { label: "Microsoft Solutions", href: "#services", dropdown: true },
  { label: "Security", href: "#services" },
  { label: "About Us", href: "#about" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        TT
      </div>
      <span className="text-sm font-bold tracking-wide text-navy">
        TWILIGHT TECHNOLOGIES
      </span>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home"><Logo /></a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                link.label === "Home" ? "text-primary" : "text-slate"
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown />}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark lg:inline-flex"
        >
          Contact Us
          <ArrowRight />
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
                className="text-sm font-medium text-slate hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Contact Us
              <ArrowRight />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ─── Hero Illustration ─── */
function HeroIllustration() {
  const topBadges = ["Entra ID", "Security", "Intune"];
  const bottomBadges = ["Conditional Access", "SSO"];

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-100/60 via-indigo-50/40 to-violet-100/50 blur-2xl" />

      <div className="relative rounded-2xl border border-border bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 shadow-xl ring-1 ring-border/40 sm:p-8">
        {/* Top service badges */}
        <div className="mb-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {topBadges.map((label) => (
            <span
              key={label}
              className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Device platform */}
        <div className="relative mx-auto max-w-md">
          <div className="absolute inset-x-6 bottom-2 h-6 rounded-full bg-slate-300/30 blur-md" />

          <div className="relative rounded-xl border border-border/60 bg-white/80 p-5 shadow-inner sm:p-6">
            <div className="flex items-end justify-center gap-4 sm:gap-6">
              {/* Microsoft 365 monitor */}
              <div className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full max-w-[140px] overflow-hidden rounded-lg bg-slate-800 shadow-lg ring-1 ring-slate-700">
                  <div className="flex h-5 items-center gap-1 border-b border-slate-700 bg-slate-900 px-2">
                    <div className="h-2 w-2 rounded-full bg-red-400/80" />
                    <div className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <div className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 px-3 py-4">
                    <div className="grid grid-cols-2 gap-1">
                      {["#f25022", "#7fba00", "#00a4ef", "#ffb900"].map((c) => (
                        <div
                          key={c}
                          className="h-4 w-4 rounded-[3px]"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                    <span className="text-center text-[11px] font-bold leading-tight text-white">
                      Microsoft 365
                    </span>
                  </div>
                </div>
                <div className="h-2 w-14 rounded-sm bg-slate-500" />
                <div className="h-1 w-20 rounded-full bg-slate-300" />
              </div>

              {/* Connection hub */}
              <div className="mb-10 hidden flex-col items-center gap-1 sm:flex">
                <div className="h-px w-6 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <div className="h-px w-6 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </div>

              {/* Jamf Pro phone */}
              <div className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full max-w-[140px] flex-col items-center rounded-lg border-2 border-slate-600 bg-slate-800 px-3 py-4 shadow-lg ring-1 ring-slate-700">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-2.66 3.66-1.06 1.24-2.53 2.01-4.12 2.01-1.59 0-3.06-.77-4.12-2.01-1.05-1.21-1.83-2.42-2.66-3.66C4.25 17.25 3 14.88 3 12.01c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.87-1.25 5.24-3.29 7.49z" />
                    </svg>
                  </div>
                  <span className="text-center text-[11px] font-bold leading-tight text-emerald-400">
                    jamf PRO
                  </span>
                  <span className="mt-0.5 text-[9px] font-medium text-white/50">
                    macOS & iOS
                  </span>
                </div>
                <div className="h-1 w-20 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom service badges */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {bottomBadges.map((label) => (
            <span
              key={label}
              className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Caption */}
        <p className="mt-5 text-center text-xs font-medium text-slate">
          Unified Microsoft cloud & Apple device management
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              IT Consulting & Cloud Solutions
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
              Technology that Secures.
              <br />
              Solutions that Empower.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              We help medical practices, law firms, accounting firms, and
              e-commerce businesses work smarter with secure, modern, and
              reliable IT solutions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Free Consultation
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-border bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Request Security Assessment
              </a>
            </div>
          </div>

          <HeroIllustration />
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate">
            Trusted Technology Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-sm font-semibold text-slate/60 transition-colors hover:text-navy"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features Bar ─── */
function FeaturesBar() {
  return (
    <section className="bg-navy py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
              <FeatureIcon type={feature.icon} />
            </div>
            <div>
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Industries ─── */
function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="bg-slate-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Industries We Serve
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Tailored IT Solutions for Every Industry
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${industry.color}`}>
                <IndustryIcon type={industry.icon} />
              </div>
              <h3 className="text-lg font-bold text-navy">{industry.title}</h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {industry.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Core Services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Comprehensive IT Solutions for Your Business
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <ServiceIcon type={service.icon} />
              <h3 className="mt-4 text-lg font-bold text-navy">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{service.description}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Trust Us ─── */
function WhyTrustUs() {
  return (
    <section id="about" className="bg-slate-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Your Trusted Partner in IT and Security
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              With deep expertise in Microsoft 365, device management, and identity
              security, we deliver solutions that protect your business while enabling
              your team to work productively from anywhere.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              About Twilight Technologies
              <ArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-primary">
                  <FeatureIcon type={stat.icon} />
                </div>
                <p className="text-2xl font-bold text-navy">{stat.value}</p>
                <p className="mt-1 text-sm text-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
          Trusted by Businesses Like Yours
        </p>

        <div className="relative mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={t.name}
                className={`rounded-xl border border-border bg-white p-6 shadow-sm transition-all ${
                  index === active ? "ring-2 ring-primary/15 md:ring-0" : "opacity-70 md:opacity-100"
                }`}
              >
                <svg className="h-8 w-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-4 text-sm leading-relaxed text-slate italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-slate">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-border p-2 text-slate transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-border p-2 text-slate transition-colors hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function ContactSection() {
  return (
    <section id="contact" className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Secure and Optimize Your IT?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Schedule a free consultation with our team. We&apos;ll assess your
              current infrastructure and recommend solutions tailored to your
              industry and compliance requirements.
            </p>
          </div>

          <form
            className="rounded-xl bg-white p-6 shadow-xl sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="d4-name" className="mb-1.5 block text-sm font-medium text-navy">
                  Full Name
                </label>
                <input
                  id="d4-name"
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-slate/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="d4-email" className="mb-1.5 block text-sm font-medium text-navy">
                  Email Address
                </label>
                <input
                  id="d4-email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-slate/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="d4-phone" className="mb-1.5 block text-sm font-medium text-navy">
                  Phone Number
                </label>
                <input
                  id="d4-phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-slate/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="d4-industry" className="mb-1.5 block text-sm font-medium text-navy">
                  Select Industry
                </label>
                <select
                  id="d4-industry"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  defaultValue=""
                >
                  <option value="" disabled>Choose your industry</option>
                  <option value="medical">Medical Practice</option>
                  <option value="law">Law Firm</option>
                  <option value="accounting">Accounting Firm</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="d4-message" className="mb-1.5 block text-sm font-medium text-navy">
                How can we help you?
              </label>
              <textarea
                id="d4-message"
                rows={4}
                placeholder="Tell us about your IT needs..."
                className="w-full resize-none rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-slate/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light sm:w-auto"
            >
              Book Consultation
              <ArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0f1a] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="[&_span]:text-white/90">
            <Logo />
          </div>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Twilight Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-400 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-400 transition-colors hover:text-white">
              Terms of Service
            </a>
            <div className="flex gap-3">
              {[
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "YouTube", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors hover:bg-primary hover:text-white"
                  aria-label={social.label}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Design4Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesBar />
        <IndustriesSection />
        <ServicesSection />
        <WhyTrustUs />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
