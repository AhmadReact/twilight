"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsTransitioning(true);
      window.setTimeout(() => {
        setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    if (index === active) return;
    setIsTransitioning(true);
    window.setTimeout(() => {
      setActive(index);
      setIsTransitioning(false);
    }, 300);
  };

  const goPrev = () => {
    goTo(active === 0 ? testimonials.length - 1 : active - 1);
  };

  const goNext = () => {
    goTo(active === testimonials.length - 1 ? 0 : active + 1);
  };

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
            Trusted by Businesses Like Yours
          </p>
        </AnimateOnScroll>

        <div className="relative mt-12">
          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll
                key={testimonial.name}
                animation="fade-up"
                delay={index * 150}
              >
                <div
                  className={`h-full rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-500 ${
                    index === active
                      ? "scale-100 border-primary/20 shadow-md"
                      : "scale-[0.97] opacity-70"
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="md:hidden">
            <div
              className={`transition-all duration-300 ${
                isTransitioning
                  ? "translate-x-2 opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <div className="rounded-xl border border-primary/20 bg-white p-6 shadow-md">
                <TestimonialCard testimonial={testimonials[active]} />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="rounded-full border border-border p-2 text-slate transition-all hover:border-primary hover:text-primary hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === active ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="rounded-full border border-border p-2 text-slate transition-all hover:border-primary hover:text-primary hover:shadow-md"
              aria-label="Next testimonial"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <>
      <svg
        className="h-8 w-8 text-primary/20"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="mt-4 text-sm leading-relaxed text-slate">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${testimonial.color}`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
          <p className="text-xs text-slate">{testimonial.role}</p>
        </div>
      </div>
    </>
  );
}
