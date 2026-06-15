"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type AnimationType =
  | "fade-up"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "scale-up";

const HIDDEN_TRANSFORMS: Record<AnimationType, string> = {
  "fade-up": "translate3d(0, 40px, 0)",
  "fade-in": "none",
  "fade-left": "translate3d(-40px, 0, 0)",
  "fade-right": "translate3d(40px, 0, 0)",
  "scale-up": "scale(0.92)",
};

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  /** Animate on mount (for hero), without waiting for scroll */
  immediate?: boolean;
}

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0,
  once = true,
  immediate = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    if (immediate) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      {
        threshold,
        // Trigger when the element enters the lower ~85% of the viewport
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [immediate, once, reduceMotion, threshold]);

  const style: CSSProperties | undefined = reduceMotion
    ? undefined
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : HIDDEN_TRANSFORMS[animation],
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: visible ? "auto" : "opacity, transform",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
