import { ContentWrapper } from "@/components/ui/GlassModal";

interface OverviewTabProps {
  overview: string;
}

export function OverviewTab({ overview }: OverviewTabProps) {
  return (
    <ContentWrapper>
      <div className="max-w-3xl">
        <h3 className="mb-6 text-xl font-semibold text-white/90">Role Overview</h3>
        <div className="rounded-2xl border border-glass-border bg-white/[0.03] p-6 text-lg leading-relaxed text-white/70">
          {overview}
        </div>
      </div>
    </ContentWrapper>
  );
}
