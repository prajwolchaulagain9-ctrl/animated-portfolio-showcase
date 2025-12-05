import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
}

export const SkillBar = ({ skill, level, delay = 0 }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{skill}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
        />
      </div>
    </motion.div>
  );
};
