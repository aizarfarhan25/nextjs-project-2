"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUpTransition, fadeUpVariants } from "@/lib/motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    width?: "fit-content" | "100%";
}

export const ScrollReveal = ({
    children,
    className,
    delay = 0,
    width = "100%",
}: ScrollRevealProps) => {
    const ref = useRef(null);
    // triggerOnce: true ensures animation only happens once
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} style={{ width, position: "relative" }} className={className}>
            <motion.div
                className="h-full"
                variants={fadeUpVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ ...fadeUpTransition, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};
