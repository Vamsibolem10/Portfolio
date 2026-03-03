import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ label, title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="mb-16 text-center"
  >
     <span className="mb-3 inline-block font-heading text-xs font-medium tracking-[0.2em] text-primary">
       // {label}
    </span>
    <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
    )}
    <div className="glow-line mx-auto mt-6 max-w-xs" />
  </motion.div>
);

export default SectionHeading;
