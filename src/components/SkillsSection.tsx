import { motion } from "framer-motion";
import { SkillBar } from "./SkillBar";
import { FloatingCard } from "./FloatingCard";

const skillCategories = [
  {
    title: "Analytics & ML",
    skills: [
      { name: "Python (Pandas/NumPy)", level: 95 },
      { name: "scikit-learn / XGBoost", level: 90 },
      { name: "Experimentation / A/B Stats", level: 88 },
      { name: "NLP (spaCy/BERT)", level: 84 },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "SQL (Postgres/BigQuery)", level: 92 },
      { name: "dbt / Data Modeling", level: 88 },
      { name: "Airflow / Orchestration", level: 85 },
      { name: "Docker / CI for ML", level: 82 },
    ],
  },
];

const technologies = [
  "Python", "SQL", "Pandas", "NumPy", "scikit-learn", "XGBoost",
  "TensorFlow", "PyTorch", "spaCy", "dbt", "Airflow", "Snowflake",
  "BigQuery", "PostgreSQL", "Kafka", "Docker", "MLflow", "Evidently",
  "Plotly", "Tableau", "Power BI", "Git",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Analytics, ML, and data platform skills I use to move metrics and ship insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <FloatingCard key={category.title} delay={catIndex * 0.2}>
              <h3 className="text-xl font-semibold mb-6 text-gradient">{category.title}</h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                  delay={catIndex * 0.2 + skillIndex * 0.1}
                />
              ))}
            </FloatingCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 rounded-full glass text-sm cursor-default hover:glow-primary transition-shadow"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
