import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/portfolio";
import { Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";
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
        title="Let's Build the Future"
        subtitle="Ready to collaborate on the next generation of intelligent systems"
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
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(210_100%_56%/0.3)]"
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
          <GlassCard hover glow="blue" className="p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Mail size={24} className="text-primary" />
            </div>
            <h3 className="mb-2 font-display text-lg font-bold text-foreground">
              Open to Opportunities
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whether it's a groundbreaking AI project, a blockchain innovation, or a full-stack
              engineering challenge — I'm ready to architect the solution.
            </p>
          </GlassCard>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <GlassCard hover glow="cyan" className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Linkedin size={24} className="text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading text-sm font-bold text-foreground">
                  Connect on LinkedIn
                </h4>
                <p className="text-xs text-muted-foreground">Let's expand our networks</p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </GlassCard>
          </a>

          {/* Particle convergence text */}
          <div className="mt-auto text-center md:text-left">
            <p className="font-display text-2xl font-bold">
              <span className="gradient-text">Let's Build</span>{" "}
              <span className="neon-text-cyan">the Future.</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="glow-line mx-auto mt-24 max-w-md" />
      <div className="mt-8 text-center">
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © 2024 {profile.name} — Engineered with Precision
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
