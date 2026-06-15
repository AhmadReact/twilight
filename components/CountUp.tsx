"use client";

import { useEffect, useRef, useState } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

function parseStatValue(value: string): {
  numeric: number | null;
  prefix: string;
  suffix: string;
  decimals: number;
} {
  const match = value.match(/^([^0-9]*)([\d.]+)(.*)$/);
  if (!match) {
    return { numeric: null, prefix: "", suffix: value, decimals: 0 };
  }

  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  return {
    numeric: parseFloat(numStr),
    prefix: prefix ?? "",
    suffix: suffix ?? "",
    decimals,
  };
}

export function CountUp({ value, duration = 2000, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const parsed = parseStatValue(value);
  const hasCounter = parsed.numeric !== null;

  useEffect(() => {
    if (!hasCounter) return;

    const el = ref.current;
    if (!el) return;

    let startTime: number | null = null;
    let observer: IntersectionObserver | null = null;
    let rafId = 0;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed.numeric! * eased;

      setDisplay(
        `${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`,
      );

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer?.unobserve(el);
          rafId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [duration, hasCounter, parsed.decimals, parsed.numeric, parsed.prefix, parsed.suffix, value]);

  if (!hasCounter) {
    return (
      <AnimateOnScroll animation="scale-up" className={className}>
        <span>{value}</span>
      </AnimateOnScroll>
    );
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
