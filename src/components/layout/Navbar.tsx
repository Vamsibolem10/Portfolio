import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { progress, activeSection } = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setScrolled(progress > 0.01);
  }, [progress]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-full max-w-fit flex justify-center"
        )}
      >
        <div className={cn(
          "flex items-center gap-8 px-8 py-3 transition-all duration-500 rounded-lg border",
          scrolled
            ? "bg-white/80 backdrop-blur-md border-zinc-200 shadow-sm px-10"
            : "bg-transparent border-transparent"
        )}>
          {/* Desktop Links */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-heading text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300",
                  activeSection === link.href.slice(1)
                    ? "text-zinc-900"
                    : "text-zinc-400 hover:text-zinc-600"
                )}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-zinc-900"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="text-zinc-900 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Minimal Scroll Progress */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] w-32 bg-zinc-100 overflow-hidden rounded-full">
          <div
            className="h-full bg-zinc-900/20 transition-all duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-white/98 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-2xl font-black tracking-[0.2em] text-zinc-900 uppercase transition-colors hover:text-zinc-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
