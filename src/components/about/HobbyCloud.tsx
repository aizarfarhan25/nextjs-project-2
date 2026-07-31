"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { Hobby } from "@/data/types";

interface HobbyCloudProps {
  hobbies: Hobby[];
}

export function HobbyCloud({ hobbies }: HobbyCloudProps) {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex-1" ref={constraintRef}>
      {hobbies.map((hobby) => (
        <motion.div
          key={hobby.title}
          className="absolute inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-muted px-5 py-1.5"
          style={{ left: hobby.left, top: hobby.top }}
          drag
          dragConstraints={constraintRef}
        >
          <span className="font-medium text-accent-hover">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
}
