import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skills } from "@/data/portfolio";

const SkillsSection = () => {
  // Group skills logically by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="relative section-padding">
      <SectionHeading
        label="Expertise"
        title="Technical Proficiency"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="h-full p-8" hover={false}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-8 w-1 rounded bg-zinc-900" />
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white/50 px-4 py-2 font-heading text-sm font-semibold text-zinc-700 shadow-sm transition-all hover:border-zinc-300 hover:bg-white hover:text-zinc-900 hover:shadow-md"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Decorative background element */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100 blur-[100px]" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
