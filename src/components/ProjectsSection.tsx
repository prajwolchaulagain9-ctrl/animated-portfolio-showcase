import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Customer Churn Prediction with ML",
    description: "Academic project leveraging ensemble learning and SHAP for interpretable churn prediction models.",
    tags: ["Python", "scikit-learn", "Pandas", "SHAP"],
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Time Series Forecasting with AI",
    description: "ML project implementing LSTM neural networks and advanced forecasting techniques for predictive analytics.",
    tags: ["Python", "TensorFlow", "LSTM", "Pandas"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Advanced NLP - Sentiment & Topic Analysis",
    description: "Capstone project using transformers and deep learning for Amazon reviews sentiment analysis and topic extraction.",
    tags: ["Python", "Transformers", "spaCy", "PyTorch"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Powered Fraud Detection System",
    description: "Kaggle competition project using deep learning ensemble models for real-time fraud detection with 98% accuracy.",
    tags: ["Python", "XGBoost", "Neural Networks", "scikit-learn"],
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Bayesian A/B Testing Framework",
    description: "Statistical learning project building Bayesian inference models for experiment analysis and optimization.",
    tags: ["Python", "PyMC", "Bayesian Stats", "Scipy"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Predictive Health Analytics Dashboard",
    description: "ML-powered dashboard with predictive models and interactive visualizations for health data analysis.",
    tags: ["Python", "Plotly", "Scikit-learn", "Pandas"],
    image: "https://images.unsplash.com/photo-1470165510427-9a55f0c4b4c1?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Personal and academic projects showcasing hands-on experience with AI/ML, deep learning, neural networks, and intelligent systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
