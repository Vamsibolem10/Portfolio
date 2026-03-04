import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences, Experience } from "@/data/portfolio";
import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";

const TimelineBlock = ({ items }: { items: Experience[] }) => (
  <div className="w-full">
    <div className="relative mx-auto max-w-3xl">
      {/* Glowing spine */}
      <div className="absolute left-8 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px">
        <div className="h-full w-full bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/20" />
        <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-primary/20 via-secondary/20 to-transparent blur-sm" />
      </div>

      {items.map((exp, i) => {
        const isLeft = i % 2 === 0;
        let Icon = Briefcase;
        if (exp.type === "education") Icon = GraduationCap;
        if (exp.type === "certificate") Icon = Award;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative mb-12 flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
          >
            {/* Node */}
            <div className="absolute left-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
              <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="absolute h-4 w-4 animate-ping rounded-full bg-primary/30" />
            </div>

            {/* Content */}
            <div className={`ml-16 w-full md:ml-0 md:w-[45%] ${isLeft ? "md:pr-12 md:text-left" : "md:pl-12"}`}>
              <div className="glass-panel glass-panel-hover p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Icon size={16} className="text-primary" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {exp.period}
                  </span>
                </div>
                <h3 className="mb-1 font-display text-lg font-bold text-foreground">
                  {exp.type === "work" ? exp.organization : exp.title}
                </h3>
                <p className="mb-4 border-l-2 border-zinc-200 pl-3 font-heading text-xs font-bold uppercase tracking-wider text-zinc-500">
                  {exp.type === "work" ? exp.title : exp.organization}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                {exp.lor && (
                  <div className="mt-4">
                    <a
                      href={exp.lor}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-900"
                    >
                      <ExternalLink size={14} />
                      View LOR
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const ExperienceSection = () => {
  const workExperiences = experiences.filter(e => e.type === "work");
  const educationExperiences = experiences.filter(e => e.type === "education");
  const certExperiences = experiences.filter(e => e.type === "certificate");

  return (
    <>
      <section id="experience" className="relative section-padding">
        <SectionHeading
          label="Career"
          title="Work Experience"
        />
        <TimelineBlock items={workExperiences} />
      </section>

      <section id="education" className="relative section-padding">
        <SectionHeading
          label="Academic"
          title="Education"
        />
        <TimelineBlock items={educationExperiences} />
      </section>

      <section id="certificates" className="relative section-padding">
        <SectionHeading
          label="Achievements"
          title="Certifications"
        />
        <TimelineBlock items={certExperiences} />
      </section>
    </>
  );
};

export default ExperienceSection;
