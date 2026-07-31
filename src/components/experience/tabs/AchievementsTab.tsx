import { IconAward } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ContentWrapper } from "@/components/ui/GlassModal";

interface AchievementsTabProps {
  achievements: string[];
}

export function AchievementsTab({ achievements }: AchievementsTabProps) {
  return (
    <ContentWrapper>
      <h3 className="mb-6 text-xl font-semibold text-white/90">Key Achievements</h3>
      <div className="grid grid-cols-1 gap-4">
        {achievements.map((achievement, i) => (
          <motion.div
            key={achievement}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 rounded-xl border border-glass-border bg-white/[0.03] p-5 transition-all hover:border-accent/20 hover:bg-white/5"
          >
            <div className="rounded-lg bg-accent-muted p-2 text-accent shadow-[0_0_15px_-3px_rgba(201,168,76,0.3)]">
              <IconAward size={20} />
            </div>
            <span className="py-1 text-base text-white/70">{achievement}</span>
          </motion.div>
        ))}
      </div>
    </ContentWrapper>
  );
}
