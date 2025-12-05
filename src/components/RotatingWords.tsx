import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface RotatingWordsProps {
  words: string[];
  className?: string;
}

export const RotatingWords = ({ words, className = "" }: RotatingWordsProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -30, rotateX: 90 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block text-gradient"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
