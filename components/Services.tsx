import { services } from "@/lib/data";
import { ArrowRight, ServiceIcon } from "./icons";

export function Services() {
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
              <h3 className="mt-4 text-lg font-bold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
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
