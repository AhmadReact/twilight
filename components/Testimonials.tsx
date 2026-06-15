"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
          Trusted by Businesses Like Yours
        </p>

        <div className="relative mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`rounded-xl border border-border bg-white p-6 shadow-sm transition-opacity ${
                  index === active ? "opacity-100" : "opacity-60 md:opacity-100"
                }`}
              >
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
                    <p className="text-sm font-semibold text-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
            <button
              type="button"
              onClick={() =>
                setActive((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1,
                )
              }
              className="rounded-full border border-border p-2 text-slate hover:border-primary hover:text-primary"
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
                  onClick={() => setActive(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === active ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setActive((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1,
                )
              }
              className="rounded-full border border-border p-2 text-slate hover:border-primary hover:text-primary"
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
