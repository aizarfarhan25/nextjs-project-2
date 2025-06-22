"use client";

import { motion } from "framer-motion";

export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <motion.div
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      </motion.div>
      <svg className="size-0 absolute">
        <defs>
          <linearGradient id="tech-icon-gradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="50%" stopColor="rgb(56 189 248)" />
            <stop offset="100%" stopColor="rgb(167 139 250)" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
