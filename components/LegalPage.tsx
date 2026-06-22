"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { LegalDocument } from "@/lib/legal-content";

const BLUE = "#0c3ea3";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Technologies", href: "/#software" },
  { label: "About Us", href: "/about-us" },
];

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

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/">
          <Logo className="max-md:relative max-md:left-10 h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-navy/80 transition-colors hover:text-navy"
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
          <div className="flex flex-wrap items-center justify-center gap-6">
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

export default function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <div className="twilight-brand">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-linear-to-b from-[#eef2fc] to-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              {document.title}
            </h1>
            <p className="mt-4 text-sm font-semibold text-slate">
              Last Updated: {document.lastUpdated}
            </p>
          </div>
        </section>

        <section className="bg-white pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {document.intro?.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-4 text-base leading-relaxed text-slate"
              >
                {paragraph}
              </p>
            ))}

            <div className="space-y-10">
              {document.sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-xl font-bold text-navy">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-base leading-relaxed text-slate"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.footerParagraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-base leading-relaxed text-slate"
                    >
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
