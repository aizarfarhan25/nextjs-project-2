import { motion } from "framer-motion";
import { ContentWrapper } from "@/components/ui/GlassModal";

interface ResponsibilitiesTabProps {
  responsibilities: string[];
}

export function ResponsibilitiesTab({ responsibilities }: ResponsibilitiesTabProps) {
  return (
    <ContentWrapper>
      <h3 className="mb-6 text-xl font-semibold text-white/90">Core Responsibilities</h3>
      <div className="relative ml-3 space-y-8 border-l border-glass-border py-2">
        {responsibilities.map((resp, i) => (
          <motion.div
            key={resp}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="relative pl-8"
          >
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white/20 ring-4 ring-space" />
            <p className="leading-relaxed text-white/70">{resp}</p>
          </motion.div>
        ))}
      </div>
    </ContentWrapper>
  );
}
