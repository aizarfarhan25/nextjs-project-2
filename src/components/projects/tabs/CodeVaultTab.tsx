import { ContentWrapper } from "@/components/ui/GlassModal";
import type { ProjectDetail } from "@/data/types";

interface CodeVaultTabProps {
  codeSnippets: NonNullable<ProjectDetail["codeSnippets"]>;
}

export function CodeVaultTab({ codeSnippets }: CodeVaultTabProps) {
  return (
    <ContentWrapper>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white/90">Engineering Vault</h3>
        <span className="font-mono text-xs text-tertiary">CONFIDENTIAL // SNIPPETS</span>
      </div>

      <div className="space-y-8">
        {codeSnippets.map((snippet) => (
          <div
            key={snippet.title}
            className="overflow-hidden rounded-xl border border-glass-border bg-[#0D1117] shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-glass-border bg-[#161b22] px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 opacity-50 transition-opacity hover:opacity-100">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
                <span className="ml-3 font-mono text-xs text-secondary">{snippet.title}</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-tertiary">
                {snippet.language}
              </div>
            </div>

            <div className="overflow-x-auto p-4">
              <pre className="font-mono text-sm leading-relaxed text-white/70">
                <code>{snippet.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
}
