"use client";

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function SectionShell({
  id,
  className,
  children,
}: PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={twMerge("section-pad", className)}>
      <div className="container max-w-6xl">{children}</div>
    </section>
  );
}
