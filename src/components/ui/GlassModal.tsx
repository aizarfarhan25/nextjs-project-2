"use client";

import { forwardRef, useEffect, useState, type ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

type GlassModalShellProps = ComponentPropsWithoutRef<"div">;

/**
 * Responsive dialog surface: bottom sheet on mobile, centered card on desktop.
 * Meant to be used via Radix's `asChild` (e.g. wrapped by `DialogPrimitive.Content`),
 * so every incoming prop must be spread onto the root element — Radix relies on
 * props like `role`, `aria-*`, and its focus-trap/dismiss-layer event handlers
 * actually landing on the real DOM node, not just `children`/`className`.
 */
export const GlassModalShell = forwardRef<HTMLDivElement, GlassModalShellProps>(
  function GlassModalShell({ children, className, ...props }, ref) {
    const isMobile = useIsMobile();

    return (
      <div
        ref={ref}
        className={cn(
          "fixed z-50 flex flex-col overflow-hidden bg-space/95 border border-glass-border shadow-2xl shadow-black/80",
          isMobile
            ? "inset-x-0 bottom-0 h-[92dvh] rounded-t-3xl pb-[env(safe-area-inset-bottom)]"
            : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl lg:max-w-4xl h-[75vh] lg:h-[70vh] rounded-3xl",
          className
        )}
        {...props}
      >
        {isMobile && (
          <div className="flex justify-center pt-3 pb-1 shrink-0">
            <div className="h-1 w-10 rounded-full bg-white/20" aria-hidden />
          </div>
        )}
        {children}
      </div>
    );
  }
);

type TabHighlight = "accent" | "emerald" | "blue";

const TAB_COLORS: Record<TabHighlight, { active: string; hover: string; indicator: string }> = {
  accent: { active: "text-accent-hover", hover: "hover:text-accent-hover", indicator: "bg-accent" },
  emerald: { active: "text-emerald-400", hover: "hover:text-emerald-300", indicator: "bg-emerald-400" },
  blue: { active: "text-blue-400", hover: "hover:text-blue-300", indicator: "bg-blue-400" },
};

interface TabButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  highlight?: TabHighlight;
  layoutId: string;
}

/** Shared tab control for the project/experience detail dialogs. */
export function TabButton({
  children,
  active,
  onClick,
  icon,
  highlight = "accent",
  layoutId,
}: TabButtonProps) {
  const colors = TAB_COLORS[highlight];

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex shrink-0 items-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-300",
        active ? colors.active : cn("text-secondary", colors.hover)
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
      {active && (
        <motion.div
          layoutId={layoutId}
          className={cn("absolute bottom-0 left-0 right-0 h-0.5 rounded-full", colors.indicator)}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  );
}

/** Shared enter/exit blur-fade wrapper for tab panel content. */
export function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
