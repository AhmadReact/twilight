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
import { IndustryIcon, ServiceIcon, FeatureIcon } from "@/components/icons";

/* ─── Brand Logo ─── */
function TwilightLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-primary to-violet-600 opacity-90" />
        <div className="absolute inset-[2px] rounded-full bg-[#0a0f1a]" />
        <span className="relative text-xs font-bold tracking-tight text-white">
          TT
        </span>
        <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`text-[11px] font-bold tracking-[0.18em] ${light ? "text-white" : "text-navy"}`}
        >
          TWILIGHT
        </span>
        <span
          className={`mt-0.5 text-[10px] font-semibold tracking-[0.14em] ${light ? "text-white/60" : "text-slate"}`}
        >
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
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
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ─── Header ─── */
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Security", href: "#security" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0f1a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home">
          <TwilightLogo light />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40 lg:inline-flex"
        >
          Contact Us
          <ArrowIcon />
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
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
        <nav className="border-t border-white/10 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Contact Us
              <ArrowIcon />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ─── Hero Illustration ─── */
function HeroVisual() {
  const topBadges = ["Entra ID", "Security", "Intune"];
  const bottomBadges = ["Conditional Access", "SSO"];

  return (
    <div className="relative mx-auto w-full max-w-xl px-2 sm:px-0">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/25 via-indigo-500/10 to-violet-600/20 blur-3xl" />

      <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8">
        {/* Top badge row */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {topBadges.map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur-sm sm:text-xs"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Device platform */}
        <div className="relative mx-auto max-w-md">
          <div className="absolute inset-x-4 bottom-3 h-8 rounded-full bg-black/30 blur-xl" />

          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-5 sm:p-6">
            <div className="flex items-end justify-center gap-4 sm:gap-6">
              {/* Microsoft 365 */}
              <div className="flex flex-1 flex-col items-center gap-2.5">
                <div className="flex w-full max-w-[148px] flex-col items-center justify-center rounded-xl bg-gradient-to-b from-slate-600 to-slate-900 px-4 py-5 shadow-xl ring-1 ring-white/15">
                  <div className="mb-3 grid grid-cols-2 gap-1">
                    {["#f25022", "#7fba00", "#00a4ef", "#ffb900"].map((c) => (
                      <div
                        key={c}
                        className="h-4 w-4 rounded-[3px]"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <span className="text-center text-[11px] font-bold leading-tight tracking-wide text-white">
                    Microsoft 365
                  </span>
                </div>
                <div className="h-1.5 w-16 rounded-full bg-slate-500/60" />
              </div>

              {/* Connection line */}
              <div className="mb-8 hidden flex-col items-center gap-1 sm:flex">
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-primary/20">
                  <svg
                    className="h-3.5 w-3.5 text-primary"
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
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              </div>

              {/* Jamf Pro */}
              <div className="flex flex-1 flex-col items-center gap-2.5">
                <div className="flex w-full max-w-[148px] flex-col items-center justify-center rounded-xl bg-gradient-to-b from-slate-600 to-slate-900 px-4 py-5 shadow-xl ring-1 ring-white/15">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-2.66 3.66-1.06 1.24-2.53 2.01-4.12 2.01-1.59 0-3.06-.77-4.12-2.01-1.05-1.21-1.83-2.42-2.66-3.66C4.25 17.25 3 14.88 3 12.01c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.87-1.25 5.24-3.29 7.49z" />
                    </svg>
                  </div>
                  <span className="text-center text-[11px] font-bold leading-tight tracking-wide text-emerald-300">
                    jamf PRO
                  </span>
                  <span className="mt-0.5 text-[9px] font-medium text-white/45">
                    macOS & iOS
                  </span>
                </div>
                <div className="h-1.5 w-16 rounded-full bg-slate-500/60" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom badge row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {bottomBadges.map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur-sm sm:text-xs"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Status bar */}
        <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-medium tracking-wide text-white/50">
            Unified cloud & device ecosystem
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0a0f1a] pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                IT Consulting & Cloud Solutions
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Technology that{" "}
              <span className="bg-gradient-to-r from-blue-400 via-primary to-violet-400 bg-clip-text text-transparent">
                Secures.
              </span>
              <br />
              Solutions that Empower.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              We help medical practices, law firms, accounting firms, and
              e-commerce businesses work smarter with secure, modern, and
              reliable IT solutions powered by Microsoft 365, Intune, and Jamf
              Pro.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-primary/50"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Schedule Free Consultation
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                Request Security Assessment
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
            Trusted Technology Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-sm font-semibold text-white/35 transition-colors hover:text-white/70"
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

/* ─── Features Strip ─── */
function FeaturesStrip() {
  return (
    <section className="relative bg-navy py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-violet-600/20 text-white ring-1 ring-white/10">
              <FeatureIcon type={feature.icon} />
            </div>
            <div>
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Section Header ─── */
function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-primary" : "text-primary"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-navy" : "text-navy"}`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate">{description}</p>
      )}
    </div>
  );
}

/* ─── Industries ─── */
function IndustriesSection() {
  return (
    <section id="industries" className="bg-slate-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Tailored IT Solutions for Every Industry"
          description="Specialized expertise for regulated and growth-focused businesses."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <div
              key={industry.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 ${
                i === 0 ? "lg:row-span-1" : ""
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-violet-500 opacity-0 transition-opacity group-hover:opacity-100" />
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${industry.color}`}
              >
                <IndustryIcon type={industry.icon} />
              </div>
              <h3 className="text-lg font-bold text-navy">{industry.title}</h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {industry.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-slate"
                  >
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Learn More
                <ArrowIcon className="h-3.5 w-3.5" />
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
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Core Services"
          title="Comprehensive IT Solutions for Your Business"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              <ServiceIcon type={service.icon} />
              <h3 className="relative mt-5 text-lg font-bold text-navy">
                {service.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate">
                {service.description}
              </p>
              <a
                href="#contact"
                className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Learn More
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Security Highlight ─── */
function SecuritySection() {
  const securityItems = [
    {
      title: "Conditional Access",
      desc: "Policy-driven access controls based on user, device, location, and risk.",
    },
    {
      title: "Microsoft Entra ID",
      desc: "Centralized identity management with MFA and single sign-on.",
    },
    {
      title: "SSO Integration",
      desc: "Seamless authentication across your business applications.",
    },
    {
      title: "Zero Trust Architecture",
      desc: "Never trust, always verify — security built into every layer.",
    },
  ];

  return (
    <section id="security" className="relative overflow-hidden bg-[#0a0f1a] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Security Services
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Enterprise-Grade Security for Regulated Industries
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/55">
              Protect sensitive patient records, legal documents, financial data,
              and customer information with identity-first security powered by
              Microsoft Entra ID, Conditional Access, and SSO.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-slate-100"
            >
              Request Security Assessment
              <ArrowIcon />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {securityItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-white/10"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About / Stats ─── */
function AboutSection() {
  return (
    <section id="about" className="bg-slate-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Why Trust Us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Your Trusted Partner in IT and Security
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              With deep expertise in Microsoft 365, Intune device management,
              Jamf Pro for Apple environments, and identity security through
              Entra ID — we deliver solutions that protect your business while
              enabling your team to work productively from anywhere.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark"
            >
              About Twilight Technologies
              <ArrowIcon />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-primary">
                  <FeatureIcon type={stat.icon} />
                </div>
                <p className="text-3xl font-bold text-navy">{stat.value}</p>
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

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trusted by Businesses Like Yours"
          title="What Our Clients Say"
        />

        <div className="relative mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={t.name}
                className={`relative rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg ${
                  index === active ? "md:ring-2 md:ring-primary/20" : ""
                }`}
              >
                <svg
                  className="h-8 w-8 text-primary/15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-4 text-sm leading-relaxed text-slate italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${t.color}`}
                  >
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

          <div className="mt-8 flex items-center justify-center gap-2 md:hidden">
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
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-primary/15 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Get Started
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to Secure and Optimize Your IT?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Schedule a free consultation with our team. We&apos;ll assess your
              current infrastructure and recommend solutions tailored to your
              industry and compliance requirements.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Free initial consultation",
                "Industry-specific compliance review",
                "Customized technology roadmap",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                    <CheckIcon />
                  </div>
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            className="rounded-2xl border border-white/10 bg-white p-7 shadow-2xl sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="p2-name"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Full Name
                </label>
                <input
                  id="p2-name"
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm text-navy placeholder:text-slate/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="p2-email"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Email Address
                </label>
                <input
                  id="p2-email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm text-navy placeholder:text-slate/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="p2-phone"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Phone Number
                </label>
                <input
                  id="p2-phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm text-navy placeholder:text-slate/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="p2-industry"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Select Industry
                </label>
                <select
                  id="p2-industry"
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm text-navy focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose your industry
                  </option>
                  <option value="medical">Medical Practice</option>
                  <option value="law">Law Firm</option>
                  <option value="accounting">Accounting Firm</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="p2-message"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                How can we help you?
              </label>
              <textarea
                id="p2-message"
                rows={4}
                placeholder="Tell us about your IT needs..."
                className="w-full resize-none rounded-xl border border-border px-4 py-3 text-sm text-navy placeholder:text-slate/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light sm:w-auto"
            >
              Book Consultation
              <ArrowIcon />
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
    <footer className="border-t border-white/10 bg-[#0a0f1a] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <TwilightLogo light />
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Twilight Technologies. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
            <div className="flex gap-2">
              {["LinkedIn", "Facebook", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-400 transition-colors hover:bg-primary hover:text-white"
                  aria-label={social}
                >
                  <span className="text-[10px] font-bold">
                    {social[0]}
                  </span>
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
export default function Page2() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesStrip />
        <IndustriesSection />
        <ServicesSection />
        <SecuritySection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
