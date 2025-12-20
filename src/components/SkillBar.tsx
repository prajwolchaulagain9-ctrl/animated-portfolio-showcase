import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
}

export const SkillBar = ({ skill, level, delay = 0 }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 220, damping: 20, delay }}
      whileHover={{ scale: 1.03 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{skill}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%`, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
            delay: delay + 0.15,
          }}
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)", transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
};
