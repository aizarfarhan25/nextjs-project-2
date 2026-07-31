"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export function ParallaxLayer({
  children,
  className,
  offset = 80,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -offset]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y }} className="motion-reduce:transform-none">
        {children}
      </motion.div>
    </div>
  );
}
