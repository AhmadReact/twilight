import { industries } from "@/lib/data";
import { ArrowRight, CheckIcon, IndustryIcon } from "./icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Industries() {
  return (
    <section id="industries" className="bg-slate-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Industries We Serve
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Tailored IT Solutions for Every Industry
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <AnimateOnScroll
              key={industry.title}
              animation="fade-up"
              delay={index * 100}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${industry.color}`}
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
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
