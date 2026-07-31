"use client";

import { cn } from "@/lib/utils";
import {
  projectFilterLabels,
  type FilterCategory,
} from "@/data/site";

export type { FilterCategory };

const filters = Object.keys(projectFilterLabels) as FilterCategory[];

interface FilterPillsProps {
  active: FilterCategory;
  onChange: (category: FilterCategory) => void;
}

export function FilterPills({ active, onChange }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
            active === filter
              ? "border-accent/50 bg-accent-muted text-accent-hover"
              : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
          )}
        >
          {projectFilterLabels[filter]}
        </button>
      ))}
    </div>
  );
}
