import { services } from "@/lib/data";
import { ArrowRight, ServiceIcon } from "./icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Core Services
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Comprehensive IT Solutions for Your Business
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              animation="fade-up"
              delay={index * 80}
              className="h-full"
            >
              <div className="group h-full rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
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
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
