import { IconWorld } from "@tabler/icons-react";
import { ContentWrapper } from "@/components/ui/GlassModal";

interface OverviewTabProps {
  overview: string;
  isWip?: boolean;
  link?: string;
  ctaLabel?: string;
}

export function OverviewTab({ overview, isWip, link, ctaLabel }: OverviewTabProps) {
  return (
    <ContentWrapper>
      {isWip && (
        <div className="mb-6 rounded-2xl border border-accent/30 bg-accent-muted px-4 py-3 text-sm text-accent-hover">
          Work in progress — this automation framework is actively being
          developed and will be published to GitHub soon.
        </div>
      )}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          <h3 className="text-xl font-semibold text-white/90">Project Overview</h3>
          <p className="text-base leading-relaxed text-white/60 md:text-lg">{overview}</p>
        </div>
        {link && (
          <div className="space-y-4">
            <div className="rounded-xl border border-glass-border bg-white/5 p-4">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-tertiary">
                Quick Actions
              </h4>
              <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-gray-950 transition-transform hover:scale-[1.02]">
                  {ctaLabel || "Visit Live Site"}
                  <IconWorld size={16} />
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
}
