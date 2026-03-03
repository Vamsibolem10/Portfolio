import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import TypeWriter from "@/components/ui/TypeWriter";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center section-padding"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
           <span className="font-heading text-xs font-medium tracking-[0.2em] text-primary">
             ~/status --available
           </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 font-heading text-xl font-medium tracking-wide text-muted-foreground md:text-2xl"
        >
          {profile.title}
        </motion.p>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <TypeWriter
            text={profile.tagline}
            speed={40}
            delay={1200}
            className="font-body text-lg text-accent md:text-xl"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
             className="group inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-8 py-3 font-heading text-sm font-semibold tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_hsl(142_70%_45%/0.3)]"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
             className="inline-flex items-center gap-2 rounded border border-border px-8 py-3 font-heading text-sm font-semibold tracking-wider text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Code snippets decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pointer-events-none absolute -left-10 top-1/3 hidden lg:block"
        >
           <div className="animate-float rounded border border-primary/20 bg-card/80 px-4 py-2 font-mono text-xs text-primary/60 backdrop-blur-sm">
             <span className="text-secondary/60">$</span> model.fit(X_train, y_train)
           </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="pointer-events-none absolute -right-10 top-1/2 hidden lg:block"
        >
           <div className="animate-float-delayed rounded border border-secondary/20 bg-card/80 px-4 py-2 font-mono text-xs text-secondary/60 backdrop-blur-sm">
             <span className="text-primary/60">&gt;</span> contract.deploy()
           </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="pointer-events-none absolute bottom-1/3 left-10 hidden lg:block"
        >
           <div className="animate-float-slow rounded border border-accent/20 bg-card/80 px-4 py-2 font-mono text-xs text-accent/60 backdrop-blur-sm">
             <span className="text-secondary/60">λ</span> &lt;Canvas camera=&#123;&#123;fov:60&#125;&#125; /&gt;
           </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#skills" className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
          <span className="font-heading text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
