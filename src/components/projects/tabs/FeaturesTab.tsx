import { IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ContentWrapper } from "@/components/ui/GlassModal";

interface FeaturesTabProps {
  features: string[];
}

export function FeaturesTab({ features }: FeaturesTabProps) {
  return (
    <ContentWrapper>
      <h3 className="mb-6 text-xl font-semibold text-white/90">Key Features</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {features.map((feature, i) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-xl border border-glass-border bg-white/[0.03] p-4 transition-all hover:border-white/20 hover:bg-white/5"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-md bg-accent-muted p-1.5 text-accent">
                <IconCheck size={14} />
              </div>
              <span className="text-sm leading-relaxed text-white/70">{feature}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </ContentWrapper>
  );
}
