import { useState, useEffect } from "react";
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-panel border-b border-border/30 py-3" : "py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#hero" className="font-display text-lg font-bold tracking-wider text-primary">
            NMVB
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-heading text-sm font-medium uppercase tracking-wider transition-colors duration-300",
                  activeSection === link.href.slice(1)
                    ? "neon-text"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-border/20">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl font-bold tracking-wider text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
