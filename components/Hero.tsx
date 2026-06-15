import { ArrowRight } from "./icons";
import { partners } from "@/lib/data";

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="relative rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 p-8 shadow-lg">
        <div className="absolute -left-2 top-8 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-navy shadow-md">
          Entra ID
        </div>
        <div className="absolute -right-2 top-16 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-navy shadow-md">
          Intune
        </div>
        <div className="absolute -left-4 bottom-20 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-navy shadow-md">
          Conditional Access
        </div>
        <div className="absolute -right-4 bottom-28 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-navy shadow-md">
          SSO
        </div>
        <div className="absolute right-8 top-4 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-navy shadow-md">
          Security
        </div>

        <div className="flex items-end justify-center gap-4 pt-6">
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-36 rounded-lg bg-slate-800 shadow-xl">
              <div className="flex h-full flex-col items-center justify-center gap-1 p-2">
                <div className="flex gap-0.5">
                  <div className="h-3 w-3 rounded-sm bg-[#f25022]" />
                  <div className="h-3 w-3 rounded-sm bg-[#7fba00]" />
                  <div className="h-3 w-3 rounded-sm bg-[#00a4ef]" />
                  <div className="h-3 w-3 rounded-sm bg-[#ffb900]" />
                </div>
                <span className="text-[10px] font-semibold text-white">
                  Microsoft 365
                </span>
              </div>
            </div>
            <div className="h-2 w-20 rounded-full bg-slate-600" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-28 rounded-lg bg-slate-700 shadow-lg">
              <div className="flex h-full items-center justify-center">
                <span className="text-[9px] font-bold text-green-400">
                  jamf PRO
                </span>
              </div>
            </div>
            <div className="h-1.5 w-16 rounded-full bg-slate-500" />
          </div>
        </div>

        <div className="mx-auto mt-4 h-3 w-3/4 rounded-full bg-slate-300/50" />
      </div>
    </div>
  );
}

export function Hero() {
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
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-border bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
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
                className="text-sm font-semibold text-slate/70 transition-colors hover:text-navy"
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
