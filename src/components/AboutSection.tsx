import { motion } from "framer-motion";
import { FloatingCard } from "./FloatingCard";
import { Code2, Palette, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting visually stunning interfaces that users love to interact with.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Bringing ideas to life quickly without compromising on quality.",
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
            I'm a passionate developer with a keen eye for design and a love for creating 
            exceptional digital experiences.
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
                With years of experience in web development, I've had the privilege of working 
                on diverse projects ranging from startups to enterprise applications.
              </p>
              <p className="text-muted-foreground">
                I believe in continuous learning and staying up-to-date with the latest 
                technologies to deliver the best solutions for my clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years Experience", value: "5+" },
                { label: "Projects Completed", value: "50+" },
                { label: "Happy Clients", value: "30+" },
                { label: "Technologies", value: "20+" },
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
