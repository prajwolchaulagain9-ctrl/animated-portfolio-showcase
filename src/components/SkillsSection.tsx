import { motion } from "framer-motion";
import { 
  Code2, Database, BarChart3, TrendingUp, 
  FileSpreadsheet, GitBranch, Brain, PieChart,
  Activity, Layers, Beaker, Calculator
} from "lucide-react";

const allSkills = [
  { name: "Python", icon: Code2, color: "text-blue-400" },
  { name: "SQL", icon: Database, color: "text-orange-400" },
  { name: "Pandas", icon: Layers, color: "text-purple-400" },
  { name: "NumPy", icon: Calculator, color: "text-cyan-400" },
  { name: "scikit-learn", icon: Brain, color: "text-green-400" },
  { name: "Machine Learning", icon: Brain, color: "text-pink-400" },
  { name: "Statistics", icon: TrendingUp, color: "text-yellow-400" },
  { name: "Matplotlib", icon: BarChart3, color: "text-red-400" },
  { name: "Seaborn", icon: PieChart, color: "text-indigo-400" },
  { name: "Jupyter", icon: Code2, color: "text-orange-500" },
  { name: "Git", icon: GitBranch, color: "text-red-500" },
  { name: "Excel", icon: FileSpreadsheet, color: "text-green-500" },
  { name: "Data Cleaning", icon: Beaker, color: "text-purple-500" },
  { name: "EDA", icon: Activity, color: "text-blue-500" },
  { name: "Feature Engineering", icon: Layers, color: "text-cyan-500" },
  { name: "Regression", icon: TrendingUp, color: "text-yellow-500" },
  { name: "Classification", icon: Brain, color: "text-pink-500" },
  { name: "Clustering", icon: Brain, color: "text-purple-600" },
  { name: "NLTK", icon: Code2, color: "text-green-600" },
  { name: "Plotly", icon: BarChart3, color: "text-blue-600" },
  { name: "Tableau", icon: PieChart, color: "text-orange-600" },
  { name: "MySQL", icon: Database, color: "text-cyan-600" },
  { name: "Data Visualization", icon: BarChart3, color: "text-red-600" },
  { name: "Hypothesis Testing", icon: Beaker, color: "text-indigo-600" },
  { name: "A/B Testing", icon: Activity, color: "text-pink-600" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core skills I've developed through coursework, personal projects, and continuous self-learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gradient">My Skillset</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {allSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ 
                    opacity: 0, 
                    x: Math.random() * 400 - 200, 
                    y: Math.random() * 400 - 200,
                    rotate: Math.random() * 360,
                    scale: 0
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0, 
                    y: 0,
                    rotate: 0,
                    scale: 1
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.03,
                    duration: 0.6
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -8,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="px-5 py-3 rounded-xl glass font-medium text-sm cursor-default hover:glow-primary transition-shadow border border-primary/20 flex items-center gap-2"
                >
                  <IconComponent className={`w-5 h-5 ${skill.color}`} />
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
