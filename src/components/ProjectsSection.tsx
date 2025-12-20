import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Built a churn model that flagged at-risk customers with SHAP-driven explanations for retention teams.",
    tags: ["Python", "scikit-learn", "Pandas", "SHAP"],
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Sales Forecasting Dashboard",
    description: "End-to-end pipeline with Airflow, Snowflake, and Plotly dashboards to forecast weekly revenue.",
    tags: ["Airflow", "Snowflake", "Plotly", "dbt"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "NLP Review Insights",
    description: "Topic modeling and sentiment analysis on 2M+ product reviews to surface actionable themes.",
    tags: ["Python", "spaCy", "BERT", "FastAPI"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fraud Detection Stream",
    description: "Streaming anomaly detection with Kafka features and gradient boosting, monitored via Evidently.",
    tags: ["Kafka", "LightGBM", "Evidently", "Docker"],
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Experimentation Hub",
    description: "A/B testing playbook with stats engine, sequential testing guards, and uplift reporting UI.",
    tags: ["Bayesian", "React", "TypeScript", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Geospatial Mobility Analysis",
    description: "Clustering GPS pings to reveal commute corridors and visualize flows with deck.gl maps.",
    tags: ["GeoPandas", "deck.gl", "Kepler.gl", "Mapbox"],
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
            Data <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Case studies across analytics, machine learning, and experimentation that drive measurable impact.
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
