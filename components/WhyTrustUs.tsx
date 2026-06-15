import { stats } from "@/lib/data";
import { ArrowRight, FeatureIcon } from "./icons";

export function WhyTrustUs() {
  return (
    <section id="about" className="bg-slate-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Your Trusted Partner in IT and Security
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              With deep expertise in Microsoft 365, device management, and
              identity security, we deliver solutions that protect your business
              while enabling your team to work productively from anywhere.
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
