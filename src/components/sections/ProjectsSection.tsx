import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { projects, Project } from "@/data/portfolio";
import { ExternalLink, X, Layers, Cpu } from "lucide-react";

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <GlassCard hover glow="purple" className="group cursor-pointer p-6" >
      <div onClick={onClick}>
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-heading text-xs font-medium uppercase tracking-wider text-primary">
            {project.category}
          </span>
          <Layers size={18} className="text-muted-foreground transition-colors group-hover:text-primary" />
        </div>

        <h3 className="mb-2 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mb-1 font-heading text-sm font-medium text-secondary">
          {project.subtitle}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  </motion.div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-6 backdrop-blur-xl"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", damping: 25 }}
      onClick={(e) => e.stopPropagation()}
      className="glass-panel neon-border w-full max-w-2xl p-8"
    >
      <div className="mb-6 flex items-start justify-between">
        <div>
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 font-heading text-xs font-medium uppercase tracking-wider text-primary">
            {project.category}
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 font-heading text-lg font-medium text-secondary">
            {project.subtitle}
          </p>
        </div>
        <button onClick={onClose} className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <X size={20} />
        </button>
      </div>

      <p className="mb-6 leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mb-6">
        <h4 className="mb-3 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
          <Cpu size={14} className="text-primary" />
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-sm text-primary">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(210_100%_56%/0.3)]">
          <ExternalLink size={14} />
          View Demo
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary/40">
          GitHub
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative section-padding">
      <SectionHeading
        label="Portfolio"
        title="Project Command Center"
        subtitle="Engineered solutions at the intersection of AI, blockchain, and full-stack architecture"
      />

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
