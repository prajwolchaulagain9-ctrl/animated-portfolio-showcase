import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { RotatingWords } from "./RotatingWords";
import { ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const HeroSection = () => {
  const nameWords = ["Prajwol", "Chaulagain"];
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="flex flex-col items-center text-center"
        >
          {/* Large Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary bg-secondary flex items-center justify-center shadow-2xl"
          >
            <img
              src=""
              alt="Prajwol Chaulagain"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name appearing word by word */}
          <motion.div
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {nameWords.map((word, index) => (
              <motion.span
                key={index}
                className="text-gradient"
                variants={itemVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Title with rotating roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8 flex items-center gap-2 justify-center"
          >
            <span className="text-muted-foreground/80">I am a</span>
            <RotatingWords words={heroRoles} className="font-semibold" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            I turn messy data into clear decisions with statistical rigor, thoughtful visuals, 
            and production-ready pipelines. Let's uncover the signals that move the business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
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

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
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
