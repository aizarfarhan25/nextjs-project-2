import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export function GlassCard({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={twMerge("glass-surface relative z-0 overflow-hidden isolate shadow-[0_8px_32px_rgba(0,0,0,0.4)]", className)} {...other}>
      {children}
    </div>
  );
}
