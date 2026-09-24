"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: readonly string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: "30%", filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: "-30%", filter: "blur(6px)" },
    transition: { duration: 0.35, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span className="inline-block align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={cn("inline-block", className)}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
