import { ArrowRight } from "./icons";
import { partners } from "@/lib/data";

function HeroIllustration() {
  const topBadges = ["Entra ID", "Security", "Intune"];
  const bottomBadges = ["Conditional Access", "SSO"];

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-100/60 via-indigo-50/40 to-violet-100/50 blur-2xl" />

      <div className="relative rounded-2xl border border-border bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 shadow-xl ring-1 ring-border/40 sm:p-8">
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

        <div className="relative mx-auto max-w-md">
          <div className="absolute inset-x-6 bottom-2 h-6 rounded-full bg-slate-300/30 blur-md" />

          <div className="relative rounded-xl border border-border/60 bg-white/80 p-5 shadow-inner sm:p-6">
            <div className="flex items-end justify-center gap-4 sm:gap-6">
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

        <p className="mt-5 text-center text-xs font-medium text-slate">
          Unified Microsoft cloud & Apple device management
        </p>
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
