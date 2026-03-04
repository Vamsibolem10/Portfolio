import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import TypeWriter from "@/components/ui/TypeWriter";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center bg-[#FDFDFD] px-6 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl w-full text-center space-y-12">
        {/* Professional Rank */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="h-px w-12 bg-zinc-900 mx-auto" />
        </motion.div>

        {/* Name Header */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-black leading-tight tracking-[-0.04em] text-zinc-900 uppercase"
          >
            {profile.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[12px] sm:text-[14px] uppercase tracking-[0.6em] text-zinc-500 font-medium"
          >
            {profile.title}
          </motion.div>
        </div>

        {/* Dynamic Tagline Removed */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pt-10"
        >
          <a
            href="#about"
            className="group relative inline-flex flex-col items-center gap-6 transition-all"
          >
            <div className="w-14 h-14 rounded-full border border-zinc-100 flex items-center justify-center group-hover:border-zinc-900 transition-all duration-500 group-hover:scale-110">
              <ChevronDown size={20} className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 group-hover:text-zinc-900 transition-colors">Scroll</span>
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
