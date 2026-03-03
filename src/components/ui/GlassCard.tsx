import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "purple" | "cyan" | "none";
}

const GlassCard = ({ children, className, hover = true, glow = "none" }: GlassCardProps) => {
  const glowMap = {
    blue: "hover:shadow-[0_0_30px_hsl(210_100%_56%/0.2)]",
    purple: "hover:shadow-[0_0_30px_hsl(270_80%_60%/0.2)]",
    cyan: "hover:shadow-[0_0_30px_hsl(185_100%_50%/0.2)]",
    none: "",
  };

  return (
    <div
      className={cn(
        "glass-panel",
        hover && "glass-panel-hover",
        glowMap[glow],
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
