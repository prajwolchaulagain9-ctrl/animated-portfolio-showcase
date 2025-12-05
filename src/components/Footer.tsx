import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-border"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Portfolio. Crafted with passion and code.
        </p>
      </div>
    </motion.footer>
  );
};
