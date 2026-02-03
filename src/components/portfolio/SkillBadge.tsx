import { motion } from "framer-motion";
import { Skill } from "@/data/portfolioData";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full glass-card cursor-default"
      style={{
        borderColor: `${skill.color}40`,
      }}
    >
      <div
        className="w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: skill.color }}
      />
      <span className="text-sm font-medium">{skill.name}</span>
      <span className="text-xs text-muted-foreground">{skill.level}%</span>
    </motion.div>
  );
};
