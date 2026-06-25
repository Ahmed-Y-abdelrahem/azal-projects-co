"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useEffect, useRef } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
}) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const motionValue = useMotionValue(0);

  const displayValue = useTransform(
    motionValue,
    (latest) => latest.toFixed(decimals)
  );

  useEffect(() => {
    if (!inView) return;

    const decimalPlaces =
      value % 1 !== 0 ? 1 : 0;

    const controls = animate(
      motionValue,
      value,
      {
        duration: 1.8,
        ease: "easeOut",
      }
    );

    const unsubscribe = displayValue.on(
      "change",
      (latest) => {
        if (ref.current) {
          ref.current.textContent =
            Number(latest).toFixed(decimalPlaces);
        }
      }
    );

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [
    inView,
    value,
    motionValue,
    displayValue,
  ]);

  return (
    <span className="tabular-nums">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}