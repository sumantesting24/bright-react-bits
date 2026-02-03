import { motion } from "framer-motion";
import { ExternalLink, Github, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-xl overflow-hidden group"
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-display font-bold text-foreground/10">
            {project.title.charAt(0)}
          </span>
        </div>
        {project.client && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
            <Building2 className="h-3 w-3" />
            {project.client}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 gap-1.5">
            <ExternalLink className="h-3.5 w-3.5" />
            View Project
          </Button>
          <Button variant="ghost" size="sm" className="gap-1.5">
            <Github className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
