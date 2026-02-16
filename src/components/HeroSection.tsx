import { motion } from "framer-motion";
import { RotatingWords } from "./RotatingWords";
import { AnimatedText } from "./AnimatedText";
import { ArrowDown } from "lucide-react";
import { Three3DBackground } from "./Three3DBackground";
import { Suspense } from "react";

export const HeroSection = () => {
  const heroRoles = [
    "Data Analysis Student",
    "ML Enthusiast",
    "Data Science Learner",
    "Future Data Analyst",
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <Suspense fallback={null}>
        <Three3DBackground />
      </Suspense>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary bg-secondary flex items-center justify-center shadow-2xl"
          >
            <img
              src="/profile.jpg"
              alt="Prajwol Chaulagain"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-6xl text-primary">PC</div>';
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full glass text-sm text-muted-foreground">
              Welcome to my portfolio
            </span>
          </motion.div>

          <AnimatedText
            words={["Hello,", "I'm", "Prajwol"]}
            className="text-4xl md:text-6xl lg:text-7xl font-bold justify-center mb-2"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-2xl font-semibold text-primary mb-4"
          >
            Data Analyst • ML Enthusiast • 2nd Year Student
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground/90 mb-2 flex items-center gap-2 justify-center"
          >
            <span className="text-muted-foreground/70">Currently exploring:</span>
            <RotatingWords words={heroRoles} className="font-medium text-gradient" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            2nd year bachelor student passionate about turning data into actionable insights. Through coursework,
            academic projects, and self-learning, I'm building a strong foundation in analytics, machine learning, and data visualization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
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

