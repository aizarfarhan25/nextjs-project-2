import { motion } from "framer-motion";
import { ContentWrapper } from "@/components/ui/GlassModal";
import type { ProjectDetail } from "@/data/types";

interface RoleTabProps {
  role: ProjectDetail["role"];
}

export function RoleTab({ role }: RoleTabProps) {
  return (
    <ContentWrapper>
      <h3 className="mb-2 text-xl font-semibold text-white/90">{role.title}</h3>
      <div className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-hover" />

      <div className="space-y-1">
        {role.responsibilities.map((resp, i) => (
          <motion.div
            key={resp}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-4 rounded-xl border border-transparent p-4 transition-colors hover:border-glass-border hover:bg-white/[0.02]"
          >
            <div className="pt-0.5 font-mono text-sm text-tertiary">
              {(i + 1).toString().padStart(2, "0")}
            </div>
            <p className="text-white/70">{resp}</p>
          </motion.div>
        ))}
      </div>
    </ContentWrapper>
  );
}
