"use client";

import { ArrowRight } from "./icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Contact() {
  return (
    <section id="contact" className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimateOnScroll animation="fade-left">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Secure and Optimize Your IT?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Schedule a free consultation with our team. We&apos;ll assess your
                current infrastructure and recommend solutions tailored to your
                industry and compliance requirements.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right" delay={150}>
            <form
              className="rounded-xl bg-white p-6 shadow-xl sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-slate/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-slate/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-slate/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="industry"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Select Industry
                </label>
                <select
                  id="industry"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-navy focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                How can we help you?
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your IT needs..."
                className="w-full resize-none rounded-lg border border-border px-4 py-2.5 text-sm text-navy placeholder:text-slate/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light sm:w-auto"
            >
              Book Consultation
              <ArrowRight />
            </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
