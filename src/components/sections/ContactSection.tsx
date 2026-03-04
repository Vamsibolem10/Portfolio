import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/portfolio";
import { Linkedin, Mail, Send, ArrowUpRight, Github } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative section-padding">
      <SectionHeading
        label="Connect"
        title="Get In Touch"
      />

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8" hover={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 font-body text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 font-body text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-border bg-muted/30 px-4 py-3 font-body text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                  placeholder="Send a message..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded border border-primary bg-primary/10 px-6 py-3 font-heading text-sm font-semibold tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </GlassCard>
        </motion.div>

        {/* Connect info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <GlassCard className="p-8">
            <h3 className="mb-2 font-display text-lg font-bold text-foreground">
              Open to Opportunities
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whether it's a groundbreaking AI project, a complex machine learning model, or a full-stack
              engineering challenge — I'm ready to architect the solution.
            </p>
          </GlassCard>

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
              <div className="flex-1">
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
              <div className="flex-1">
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

          <a
            href={`mailto:${profile.email}`}
            className="group"
          >
            <GlassCard hover className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100">
                <Mail size={20} className="text-rose-600" />
              </div>
              <div className="flex-1">
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

          {/* Final Call */}
          <div className="mt-auto text-center md:text-left">
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
