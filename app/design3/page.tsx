"use client";

import { useState } from "react";
import {
  industries,
  services,
  features,
  testimonials,
  partners,
} from "@/lib/data";
import { IndustryIcon, ServiceIcon, FeatureIcon } from "@/components/icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Industries", href: "#industries", dropdown: true },
  { label: "Microsoft Solutions", href: "#services", dropdown: true },
  { label: "Security", href: "#security" },
  { label: "About Us", href: "#about" },
];

function Logo({ light = true }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        TT
      </div>
      <span
        className={`text-sm font-bold tracking-wide ${light ? "text-white" : "text-navy"}`}
      >
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

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050810]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home"><Logo /></a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-white ${
                link.label === "Home" ? "text-white" : "text-white/60"
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown />}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark lg:inline-block"
        >
          Contact Us
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
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
        <nav className="border-t border-white/10 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
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
              className="mt-2 inline-flex justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function DashboardMockup() {
  const stats = [
    { label: "Active Users", value: "126" },
    { label: "Managed Devices", value: "243" },
    { label: "Security Score", value: "92%" },
    { label: "Compliance", value: "100%" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1424] shadow-2xl">
        {/* Dashboard header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="ml-2 text-xs font-medium text-white/50">
              Microsoft 365 Admin Center
            </span>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/8 bg-white/5 px-3 py-3"
            >
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="mt-0.5 text-[10px] text-white/45">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts area */}
        <div className="grid gap-3 px-4 pb-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/8 bg-white/5 p-4">
            <p className="mb-3 text-xs font-semibold text-white/60">
              Device Compliance
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                    strokeDasharray="92 100"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
                  92%
                </span>
              </div>
              <div className="space-y-1.5 text-[10px] text-white/50">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Compliant (224)
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  At Risk (19)
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/8 bg-white/5 p-4">
            <p className="mb-3 text-xs font-semibold text-white/60">
              Sign-in Activity
            </p>
            <div className="flex items-end gap-1.5 h-16">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-primary/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Device mockups overlay */}
        <div className="absolute -bottom-2 right-4 flex items-end gap-2">
          <div className="h-14 w-20 rounded-md border border-white/15 bg-slate-800 shadow-xl">
            <div className="flex h-3 items-center gap-0.5 border-b border-white/10 px-1.5">
              <div className="h-1 w-1 rounded-full bg-white/30" />
              <div className="h-1 w-1 rounded-full bg-white/30" />
            </div>
            <div className="flex h-full items-center justify-center p-1">
              <div className="grid grid-cols-2 gap-0.5">
                {["#f25022", "#7fba00", "#00a4ef", "#ffb900"].map((c) => (
                  <div key={c} className="h-2 w-2 rounded-[2px]" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-20 w-11 rounded-lg border-2 border-white/20 bg-slate-900 shadow-xl">
            <div className="mx-auto mt-1.5 h-1 w-4 rounded-full bg-white/20" />
            <div className="mt-2 flex flex-col items-center gap-1 px-1">
              <div className="h-1.5 w-full rounded bg-primary/40" />
              <div className="h-1.5 w-3/4 rounded bg-white/10" />
              <div className="h-1.5 w-full rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#050810]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              IT Consulting & Cloud Solutions
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Secure. Manage. Scale.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55">
              Empowering medical practices, law firms, accounting firms, and
              e-commerce businesses with secure, modern, and intelligent IT
              solutions.
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
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Request Security Assessment
              </a>
            </div>
          </div>

          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function PartnersBar() {
  return (
    <section className="border-y border-white/10 bg-[#0a1018] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#050810] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Tailored IT Solutions for Your Industry"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-xl border border-white/10 bg-[#0c1424] p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <IndustryIcon type={industry.icon} />
              </div>
              <h3 className="text-base font-bold text-white">{industry.title}</h3>
              <ul className="mt-4 space-y-2">
                {industry.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-white/50">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-[#0a1018] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Core Services" title="Our Core Services" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-white/10 bg-[#0c1424] p-6 transition-colors hover:border-primary/25"
            >
              <ServiceIcon type={service.icon} />
              <h3 className="mt-4 text-base font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {service.description}
              </p>
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

function FeaturesRow() {
  return (
    <section id="security" className="border-y border-white/10 bg-[#050810] py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <FeatureIcon type={feature.icon} />
            </div>
            <div>
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="mt-1 text-sm text-white/50">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="about" className="bg-[#0a1018] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted by Businesses Like Yours"
          title="Trusted by Businesses Like Yours"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-white/10 bg-[#0c1424] p-6"
            >
              <StarRating />
              <p className="mt-4 text-sm leading-relaxed text-white/60 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/45">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#050810] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Get a Free IT Assessment
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/55">
              Schedule a free consultation with our team. We&apos;ll assess your
              current infrastructure and recommend solutions tailored to your
              industry and compliance requirements.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:info@twilighttech.com"
                className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-sm">info@twilighttech.com</span>
              </a>
              <a
                href="tel:+11234567890"
                className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="text-sm">(123) 456-7890</span>
              </a>
            </div>
          </div>

          <form
            className="rounded-xl border border-white/10 bg-[#0c1424] p-6 sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="d3-name" className="mb-1.5 block text-sm font-medium text-white/70">
                  Full Name
                </label>
                <input
                  id="d3-name"
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="d3-email" className="mb-1.5 block text-sm font-medium text-white/70">
                  Email Address
                </label>
                <input
                  id="d3-email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="d3-phone" className="mb-1.5 block text-sm font-medium text-white/70">
                  Phone Number
                </label>
                <input
                  id="d3-phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="d3-industry" className="mb-1.5 block text-sm font-medium text-white/70">
                  Select Industry
                </label>
                <select
                  id="d3-industry"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#0c1424]">
                    Choose your industry
                  </option>
                  <option value="medical" className="bg-[#0c1424]">Medical Practice</option>
                  <option value="law" className="bg-[#0c1424]">Law Firm</option>
                  <option value="accounting" className="bg-[#0c1424]">Accounting Firm</option>
                  <option value="ecommerce" className="bg-[#0c1424]">E-commerce</option>
                  <option value="other" className="bg-[#0c1424]">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="d3-message" className="mb-1.5 block text-sm font-medium text-white/70">
                Message
              </label>
              <textarea
                id="d3-message"
                rows={4}
                placeholder="Tell us about your IT needs..."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050810] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Logo />
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Twilight Technologies. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/40 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/40 transition-colors hover:text-white">
              Terms of Service
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/50 transition-colors hover:bg-primary hover:text-white"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Design3Page() {
  return (
    <div className="min-h-screen bg-[#050810] text-white">
      <Header />
      <main>
        <Hero />
        <PartnersBar />
        <IndustriesSection />
        <ServicesSection />
        <FeaturesRow />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
