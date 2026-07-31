import { motion } from "framer-motion";
import { ContentWrapper } from "@/components/ui/GlassModal";

interface TechTabProps {
  technologies: string[];
}

export function TechTab({ technologies }: TechTabProps) {
  return (
    <ContentWrapper>
      <h3 className="mb-6 text-xl font-semibold text-white/90">Technology Stack</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            className="cursor-default select-none rounded-full border border-glass-border bg-white/5 px-4 py-2 text-sm text-white/70 transition-all hover:border-accent/50 hover:text-accent-hover hover:shadow-[0_0_15px_-5px_rgba(201,168,76,0.3)]"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </ContentWrapper>
  );
}
