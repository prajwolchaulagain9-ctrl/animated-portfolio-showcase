import { motion } from "framer-motion";
import { RotatingWords } from "./RotatingWords";
import { AnimatedText } from "./AnimatedText";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const heroRoles = [
    "Data Analyst",
    "ML Practitioner",
    "Experimentation Lead",
    "Analytics Engineer",
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full glass text-sm text-muted-foreground">
              Welcome to my portfolio
            </span>
          </motion.div>

          <AnimatedText
            words={["Hello,", "I'm", "Prajwol"]}
            className="text-4xl md:text-6xl lg:text-7xl font-bold justify-center mb-4"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-6 flex items-center gap-2 justify-center"
          >
            <span className="text-muted-foreground/80">I am a</span>
            <RotatingWords words={heroRoles} className="font-semibold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            I turn messy data into clear decisions with statistical rigor, thoughtful visuals,
            and production-ready pipelines. Let's uncover the signals that move the business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full font-semibold text-primary-foreground transition-all glow-primary hover:scale-105"
              style={{ background: "var(--gradient-primary)" }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold glass border border-border hover:border-primary transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

