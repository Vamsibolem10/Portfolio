import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative section-padding">
      <SectionHeading
        label="Journey"
        title="Experience Timeline"
        subtitle="A chronological map of growth, innovation, and engineering milestones"
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Glowing spine */}
        <div className="absolute left-8 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px">
          <div className="h-full w-full bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/20" />
          <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-primary/20 via-secondary/20 to-transparent blur-sm" />
        </div>

        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;
          const Icon = exp.type === "education" ? GraduationCap : Briefcase;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Node */}
              <div className="absolute left-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute h-4 w-4 animate-ping rounded-full bg-primary/30" />
              </div>

              {/* Content */}
              <div className={`ml-16 w-full md:ml-0 md:w-[45%] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-panel glass-panel-hover p-6">
                  <div className={`mb-3 flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                    <Icon size={16} className="text-primary" />
                    <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="mb-1 font-display text-base font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="mb-2 font-heading text-sm font-medium text-secondary">
                    {exp.organization}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
