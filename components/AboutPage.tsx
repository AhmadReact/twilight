"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BLUE = "#0c3ea3";

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

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Technologies", href: "/#software" },
  { label: "About Us", href: "/about-us" },
];

const highlights = [
  {
    title: "Expert Consultations",
    description:
      "Schedule consultations with our experts. Together, we'll collaboratively sculpt your vision into a robust business model and chart a strategic execution path.",
  },
  {
    title: "Scalable Solutions",
    description:
      "We deliver scalable solutions to every client, transcending industry boundaries — from startups to enterprises — with innovative software tailored to unique needs.",
  },
  {
    title: "Global Impact",
    description:
      "Our impact extends across borders, collaborating with clients worldwide. We take pride in working with Fortune 10 companies, a testament to the trust they place in our expertise.",
  },
];

const offices = [
  {
    label: "United States",
    address: ["Anne Arundel County", "Maryland"],
    email: "contactus@twilight-technology.net",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/">
          <Logo className="h-10 w-auto max-md:relative max-md:left-10" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                link.href === "/about-us"
                  ? "text-navy"
                  : "text-navy/80 hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/about-us#contact"
          className="hidden rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:inline-flex"
          style={{ backgroundColor: BLUE }}
        >
          Get a Quote
        </Link>

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
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-navy/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about-us#contact"
              className="mt-2 inline-flex justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: BLUE }}
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/">
            <Logo className="h-10 w-auto" />
          </Link>
          <p className="text-sm text-slate">
            &copy; {new Date().getFullYear()} Twilight Technologies PVT LTD. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/about-us"
              className="text-sm text-slate transition-colors hover:text-navy"
            >
              About Us
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-slate transition-colors hover:text-navy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-slate transition-colors hover:text-navy"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <div className="twilight-brand">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-linear-to-b from-[#eef2fc] to-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              About Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              Twilight Technologies is a leading service-based company that
              provides custom software solutions and services. Our team of
              professionals dedicates their energies to serve you and fulfill
              your expectations.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-lg leading-relaxed text-slate">
                  Embrace a partnership that transcends conventional service
                  provision at Twilight Technologies. Since our inception in
                  2015, we&apos;ve been at the forefront of the tech industry,
                  constantly evolving to meet the dynamic needs of our clients.
                  Our impact extends across borders, collaborating with clients
                  from various corners of the world. We take pride in our
                  collaborations with Fortune 10 companies, a testament to the
                  trust they place in our expertise.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  Our distinctive offering empowers you to schedule
                  consultations with our experts. Together, we&apos;ll
                  collaboratively sculpt your vision into a robust business
                  model, chart a strategic execution path, and infuse the
                  technical prowess needed to materialise your aspirations.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  We deliver scalable solutions to every client, transcending
                  industry boundaries. We are committed to empowering businesses
                  of all sizes, from startups to enterprises, with innovative
                  and adaptable software tailored to their unique needs.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  Our vision at Twilight Technologies extends beyond the horizon
                  of conventional solutions. We aspire to transform over 100+
                  businesses by 2030 through transformative technology. We
                  envision a future where advancements not only drive
                  operational efficiency but also pave the way for a better and
                  more intelligent tomorrow.
                </p>
                <p
                  className="mt-10 text-2xl font-extrabold leading-snug text-navy sm:text-3xl"
                  style={{ color: BLUE }}
                >
                  We don&apos;t just offer Services.
                  <br />
                  We craft Experiences.
                </p>
              </div>

              <div className="grid gap-5">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-slate-light/60 p-6"
                  >
                    <h2 className="text-lg font-bold text-navy">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-light py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 text-lg text-slate">
                Reach out to our team — we&apos;re here to help bring your
                vision to life.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-6">
              {offices.map((office) => (
                <div
                  key={office.label}
                  className="rounded-2xl border border-border bg-white p-8"
                >
                  <h3 className="text-lg font-bold text-navy">
                    {office.label}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-slate">
                    {office.address.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                    <li>
                      <a
                        href={`mailto:${office.email}`}
                        className="transition-colors hover:text-navy"
                        style={{ color: BLUE }}
                      >
                        {office.email}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-white p-6 text-center">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate">
                Working Hours
              </h3>
              <p className="mt-3 text-lg font-semibold text-navy">
                Monday – Friday
              </p>
              <p className="mt-1 text-slate">8:00 AM – 7:00 PM</p>
              <p className="mt-4 text-lg font-semibold text-navy">Saturday</p>
              <p className="mt-1 text-slate">11:00 AM – 6:00 PM</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
