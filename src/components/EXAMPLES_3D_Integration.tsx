/**
 * Example: Enhanced ProjectsSection with 3D Effects
 * 
 * This file shows how to integrate 3D animations into your projects section.
 * Copy and adapt this code into your ProjectsSection.tsx
 */

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ThreeDScene } from "./ThreeDScene";

// Example: Add this to your ProjectsSection component

export const ExampleProjectsWithEffects = () => {
  const projects = [
    {
      id: 1,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization",
      technologies: ["React", "D3.js", "Python"],
      image: "project1.png",
    },
    {
      id: 2,
      title: "ML Classification Model",
      description: "Advanced ML model for predictive analytics",
      technologies: ["Python", "TensorFlow", "Scikit-learn"],
      image: "project2.png",
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Animated Title with 3D Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Optional: Add subtle 3D background */}
          <div className="absolute inset-0 h-40 -z-10 opacity-20">
            <Suspense fallback={null}>
              <Canvas style={{ background: "transparent" }}>
                <Suspense fallback={null}>
                  <ThreeDScene />
                </Suspense>
              </Canvas>
            </Suspense>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in data analytics and machine learning
          </p>
        </motion.div>

        {/* Projects Grid with 3D Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className="group glass rounded-xl overflow-hidden hover:border-primary transition-all duration-300"
            >
              {/* 3D Preview Container */}
              <div className="h-48 bg-secondary/50 relative overflow-hidden">
                <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20" />}>
                  <Canvas camera={{ position: [0, 0, 3] }}>
                    <Suspense fallback={null}>
                      {/* Your 3D scene here */}
                      <ThreeDScene />
                    </Suspense>
                  </Canvas>
                </Suspense>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack with Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-primary font-semibold text-sm hover:underline inline-block"
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * INTEGRATION STEPS:
 * 
 * 1. Import the necessary 3D components:
 *    import { ThreeDScene } from "./components/ThreeDScene";
 *    import { Canvas } from "@react-three/fiber";
 *    import { Suspense } from "react";
 * 
 * 2. Add the 3D Canvas inside your project card:
 *    <Suspense fallback={null}>
 *      <Canvas camera={{ position: [0, 0, 3] }}>
 *        <ThreeDScene />
 *      </Canvas>
 *    </Suspense>
 * 
 * 3. Style the container with appropriate height and background
 * 
 * 4. Test on different devices and adjust particle count if needed
 * 
 * 5. Customize colors and animations to match your brand
 */
