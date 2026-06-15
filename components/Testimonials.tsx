"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { testimonials } from "@/lib/data";
import { AnimateOnScroll } from "./AnimateOnScroll";

const AUTO_PLAY_MS = 5000;
const SLIDE_TRANSITION_MS = 50;
const PER_SLIDE = 3;

type Testimonial = (typeof testimonials)[number];

function getSlides() {
  const slides: Testimonial[][] = [];
  for (let i = 0; i < testimonials.length; i += PER_SLIDE) {
    slides.push(testimonials.slice(i, i + PER_SLIDE));
  }
  return slides;
}

function padSlide(slide: Testimonial[]) {
  const slots: (Testimonial | null)[] = [...slide];
  while (slots.length < PER_SLIDE) slots.push(null);
  return slots;
}

export function Testimonials() {
  const slides = useMemo(() => getSlides(), []);
  const slideCount = slides.length;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const measureRef = useRef<HTMLDivElement>(null);
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeSlide) return;
      setActiveSlide(index);
    },
    [activeSlide],
  );

  const goNext = useCallback(() => {
    setActiveSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  }, [slideCount]);

  const goPrev = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  }, [slideCount]);

  useLayoutEffect(() => {
    const measure = () => {
      if (!measureRef.current) return;
      let maxHeight = 0;
      for (const child of measureRef.current.children) {
        maxHeight = Math.max(
          maxHeight,
          (child as HTMLElement).getBoundingClientRect().height,
        );
      }
      if (maxHeight > 0) setViewportHeight(maxHeight);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [slides]);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(interval);
  }, [isPaused, goNext]);

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
            Trusted by Businesses Like Yours
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold text-navy sm:text-4xl">
            Client Reviews
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={150}>
          <div
            className="relative mt-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-white p-2.5 text-slate shadow-md transition-all hover:border-primary hover:text-primary hover:shadow-lg max-md:hidden md:-translate-x-2 lg:-translate-x-4"
              aria-label="Previous slide"
            >
              <ChevronIcon direction="left" />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-white p-2.5 text-slate shadow-md transition-all hover:border-primary hover:text-primary hover:shadow-lg max-md:hidden md:translate-x-2 lg:translate-x-4"
              aria-label="Next slide"
            >
              <ChevronIcon direction="right" />
            </button>

            {/* Hidden sizer — measures every slide at full width */}
            <div
              ref={measureRef}
              className="pointer-events-none invisible absolute left-0 right-0 top-0 px-0 md:px-10 lg:px-14"
              aria-hidden="true"
            >
              {slides.map((slide, index) => (
                <SlideGrid key={index} slots={padSlide(slide)} />
              ))}
            </div>

            <div
              className="relative px-0 md:px-10 lg:px-14"
              style={{ height: viewportHeight ?? undefined }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-x-0 top-0 px-0 transition-opacity ease-out md:px-10 lg:px-14 ${
                    index === activeSlide
                      ? "z-10 opacity-100"
                      : "z-0 opacity-0 pointer-events-none"
                  }`}
                  style={{ transitionDuration: `${SLIDE_TRANSITION_MS}ms` }}
                  aria-hidden={index !== activeSlide}
                >
                  <SlideGrid slots={padSlide(slide)} />
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-4 md:hidden">
                <button
                  type="button"
                  onClick={goPrev}
                  className="rounded-full border border-border p-2 text-slate transition-all hover:border-primary hover:text-primary"
                  aria-label="Previous slide"
                >
                  <ChevronIcon direction="left" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="rounded-full border border-border p-2 text-slate transition-all hover:border-primary hover:text-primary"
                  aria-label="Next slide"
                >
                  <ChevronIcon direction="right" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeSlide
                        ? "w-8 bg-primary"
                        : "w-2 bg-border hover:bg-primary/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === activeSlide ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function SlideGrid({ slots }: { slots: (Testimonial | null)[] }) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
      {slots.map((testimonial, index) =>
        testimonial ? (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ) : (
          <div
            key={`placeholder-${index}`}
            className="hidden min-h-[260px] md:block"
            aria-hidden="true"
          />
        ),
      )}
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
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
        d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full min-h-[260px] flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:border-primary/20 hover:shadow-md">
      <svg
        className="h-8 w-8 shrink-0 text-primary/20"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="mt-4 line-clamp-5 min-h-[6.5rem] flex-1 text-sm leading-relaxed text-slate">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex shrink-0 items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${testimonial.color}`}
        >
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-navy">
            {testimonial.name}
          </p>
          <p className="truncate text-xs text-slate">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
