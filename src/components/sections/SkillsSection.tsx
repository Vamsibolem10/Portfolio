import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skills } from "@/data/portfolio";

const SkillsSection = () => {
  return (
    <section id="skills" className="relative section-padding">
      <SectionHeading
        label="Expertise"
        title="Neural Skill Matrix"
        subtitle="Core competencies powering intelligent systems and decentralized solutions"
      />

      {/* Central AI Core visualization */}
      <div className="relative mx-auto max-w-5xl">
        {/* Skill grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard hover glow="blue" className="group p-4 text-center">
                {/* Skill level ring */}
                <div className="relative mx-auto mb-3 h-16 w-16">
                  <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="3"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${skill.level * 1.76} 176`}
                      className="transition-all duration-1000"
                      style={{ filter: `drop-shadow(0 0 6px ${skill.color}40)` }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-display text-xs font-bold text-foreground">
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-heading text-sm font-bold text-foreground">
                  {skill.name}
                </h3>
                <p className="mt-1 font-body text-xs text-muted-foreground">
                  {skill.category}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Decorative neural connections */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[80px]" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
