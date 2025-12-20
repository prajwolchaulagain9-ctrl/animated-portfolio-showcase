import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Academic project exploring churn prediction with machine learning and SHAP for model interpretability.",
    tags: ["Python", "scikit-learn", "Pandas", "SHAP"],
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Sales Forecasting Dashboard",
    description: "Self-learning project building a forecasting pipeline with visualization dashboards using public datasets.",
    tags: ["Python", "Plotly", "Time Series", "Pandas"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "NLP Review Insights",
    description: "Capstone project analyzing Amazon reviews using sentiment analysis and topic modeling techniques.",
    tags: ["Python", "NLTK", "spaCy", "Seaborn"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Kaggle competition project using ensemble methods to detect fraudulent transactions with imbalanced data.",
    tags: ["Python", "XGBoost", "SMOTE", "scikit-learn"],
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "A/B Test Simulator",
    description: "Learning project exploring statistical hypothesis testing and A/B test analysis with simulated data.",
    tags: ["Python", "Statistics", "Scipy", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "COVID-19 Data Visualization",
    description: "Interactive dashboard analyzing pandemic trends across regions using public health datasets.",
    tags: ["Python", "Plotly", "Dash", "Pandas"],
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
            Personal and academic projects showcasing hands-on experience with data analytics, machine learning, and visualization.
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
