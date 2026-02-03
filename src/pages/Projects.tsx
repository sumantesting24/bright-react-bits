import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ClientCarousel } from "@/components/portfolio/ClientCarousel";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { projects, skills } from "@/data/portfolioData";

const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
);

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? projects.filter((p) => p.technologies.includes(selectedTech))
    : projects;

  return (
    <Layout>
      {/* Projects Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="Projects, Clients & Employment"
            subtitle="Explore the projects that demonstrate my full stack development skills."
          />

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2 mb-8"
          >
            <span className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
              <Filter className="h-4 w-4" />
              Filter:
            </span>
            <Button
              variant={selectedTech === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTech(null)}
            >
              All Technologies
            </Button>
            {allTechnologies.slice(0, 6).map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Clients Carousel */}
          <ClientCarousel />

          {/* Employment Timeline */}
          <div className="mt-20">
            <ExperienceTimeline />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
