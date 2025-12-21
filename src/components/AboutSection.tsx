import { motion } from "framer-motion";
import { FloatingCard } from "./FloatingCard";
import { Code2, Palette, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Quick Learner",
    description: "Rapidly acquiring new tools and techniques through hands-on projects.",
  },
  {
    icon: Palette,
    title: "Clear Communication",
    description: "Translating complex analyses into accessible visualizations and insights.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Tackling real-world challenges with curiosity and analytical thinking.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a 2nd year bachelor student eager to excel in data analytics. I love exploring datasets,
            building models, and creating visualizations that tell compelling stories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <FloatingCard key={item.title} delay={index * 0.15}>
              <div className="text-center">
                <div className="inline-flex p-4 rounded-xl bg-secondary mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </FloatingCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                As a 2nd year bachelor student, I'm actively building my data skills through coursework, practical projects,
                and self-directed learning. I'm focused on mastering core concepts in data science and analytics.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about continuous learning—exploring new libraries, experimenting with datasets,
                and applying theoretical knowledge to real-world problems. Excited to build a strong portfolio and grow as a data professional.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Academic Projects", value: "8+" },
                { label: "Code Assignments", value: "50+" },
                { label: "Hours Practiced", value: "300+" },
                { label: "Datasets Analyzed", value: "20+" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-4 rounded-xl bg-secondary text-center"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
