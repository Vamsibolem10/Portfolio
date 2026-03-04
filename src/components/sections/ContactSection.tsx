import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/portfolio";
import { Linkedin, Mail, ArrowUpRight, Github, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative section-padding">
      <SectionHeading
        label="Connect"
        title="Get In Touch"
      />

      <div className="mx-auto max-w-2xl">
        {/* Connect info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <GlassCard className="p-8 text-center md:text-left">
            <h3 className="mb-2 font-display text-lg font-bold text-foreground">
              Open to Opportunities
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whether it's a groundbreaking AI project, a complex machine learning model, or a full-stack
              engineering challenge — I'm ready to architect the solution.
            </p>
          </GlassCard>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <GlassCard hover className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <Linkedin size={20} className="text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-heading text-sm font-bold text-foreground">
                    LinkedIn
                  </h4>
                  <p className="text-xs text-muted-foreground">Let's connect</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground transition-all group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </GlassCard>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <GlassCard hover className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Github size={20} className="text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-heading text-sm font-bold text-foreground">
                    GitHub
                  </h4>
                  <p className="text-xs text-muted-foreground">Check out my projects</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </GlassCard>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="group"
            >
              <GlassCard hover className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100">
                  <Mail size={20} className="text-rose-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-heading text-sm font-bold text-foreground">
                    Email
                  </h4>
                  <p className="text-xs text-muted-foreground">{profile.email}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground transition-all group-hover:text-rose-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </GlassCard>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="group"
            >
              <GlassCard hover className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                  <Phone size={20} className="text-emerald-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-heading text-sm font-bold text-foreground">
                    Phone
                  </h4>
                  <p className="text-xs text-muted-foreground">{profile.phone}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground transition-all group-hover:text-emerald-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </GlassCard>
            </a>
          </div>

          {/* Final Call */}
          <div className="mt-8 text-center">
            <p className="font-display text-4xl font-black text-zinc-900 uppercase tracking-tight">
              Let's Build.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="h-px w-full bg-zinc-100 mt-24 max-w-md mx-auto" />
      <div className="mt-8 text-center px-6">
        <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
