"use client";

import React, { useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 240,
  gradientColor = "hsl(var(--spotlight))",
  gradientOpacity = 0.8,
  gradientFrom = "#3b82f6",
  gradientTo = "#94a3b8",
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const reset = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    const handleGlobalPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) reset();
    };
    const handleVisibility = () => {
      if (document.visibilityState !== "visible") reset();
    };

    window.addEventListener("pointerout", handleGlobalPointerOut);
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("pointerout", handleGlobalPointerOut);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reset]);

  const borderBackground = useMotionTemplate`
    linear-gradient(hsl(var(--card)) 0 0) padding-box,
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom},
      ${gradientTo},
      hsl(var(--border)) 100%
    ) border-box
  `;

  const spotlight = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientColor},
      transparent 100%
    )
  `;

  return (
    <motion.div
      className={cn(
        "group relative isolate overflow-hidden rounded-[inherit] border border-transparent",
        className,
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerEnter={reset}
      style={{ background: borderBackground }}
    >
      <div className="absolute inset-px z-20 rounded-[inherit] bg-card" />
      <motion.div
        suppressHydrationWarning
        className="pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight, opacity: gradientOpacity }}
      />
      <div className="relative z-40 h-full">{children}</div>
    </motion.div>
  );
}
