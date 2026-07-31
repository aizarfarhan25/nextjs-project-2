import type { ReactNode } from "react";

/** Minimal markdown renderer for QA artifact content: headers, bold, and inline code. */
export function renderMarkdown(content: string): ReactNode[] {
  return content.split("\n").map((line, index) => {
    if (line.startsWith("### ")) {
      return (
        <h3 key={index} className="mt-4 mb-2 text-lg font-bold text-white/90">
          {line.replace("### ", "")}
        </h3>
      );
    }
    if (line.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="mt-6 mb-3 border-b border-glass-border pb-1 text-xl font-bold text-white/90"
        >
          {line.replace("## ", "")}
        </h2>
      );
    }
    if (line.trim() === "") {
      return <div key={index} className="h-2" />;
    }

    const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);
    return (
      <p key={index} className="min-h-[1em] leading-relaxed text-white/70">
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="font-semibold text-white">
                {part.slice(2, -2)}
              </strong>
            );
          }
          if (part.startsWith("`") && part.endsWith("`")) {
            return (
              <code
                key={i}
                className="rounded border border-glass-border bg-white/5 px-1 py-0.5 font-mono text-sm text-accent-hover"
              >
                {part.slice(1, -1)}
              </code>
            );
          }
          return part;
        })}
      </p>
    );
  });
}
