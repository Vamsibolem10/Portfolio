import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/portfolio";
import { FileText } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="relative section-padding">
            <SectionHeading
                label="Identity"
                title="About Me"
            />

            <div className="mx-auto max-w-5xl">
                <GlassCard className="grid gap-12 p-8 md:grid-cols-2 items-center">
                    {/* Photo Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative mx-auto w-full max-w-sm"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-xl border border-zinc-200 shadow-sm relative group">
                            {/* NOTE: You will need to save the photo provided as 'public/profile.jpg' in the project directory */}
                            <img
                                src="/profile.jpg"
                                alt={profile.name}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';
                                }}
                            />
                            <div className="absolute inset-0 bg-zinc-900/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                        {/* Accents */}
                        <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border border-zinc-200 border-dashed" />
                        <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-zinc-100" />
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="font-display text-2xl font-bold text-zinc-900 md:text-3xl">
                            I Build AI-Powered <br className="hidden md:block" /> Full-Stack Applications.
                        </h3>

                        <div className="space-y-4 font-body text-sm leading-relaxed text-zinc-600">
                            <p>
                                Hello! I am {profile.name}, a passionate AI/ML Engineer and Full Stack Developer based in {profile.location}. I recently completed my software engineering internship at Hiringhood, where I architected full-stack applications and developed AI/ML models that are currently in production.
                            </p>
                            <p>
                                Currently pursuing my Master's in Computer Applications at GITAM Deemed University, I thrive at the intersection of powerful backend architectures and seamless frontend experiences. My expertise spans Python, React, AWS, Docker, and various ML technologies, allowing me to build robust systems from end to end.
                            </p>
                            <p>
                                When I'm not writing code, I'm deep into researching new AI capabilities, building intelligent applications for resume analysis, and optimizing recruitment workflows.
                            </p>
                        </div>

                        <div className="pt-4 flex flex-wrap gap-3">
                            <span className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-900 px-4 py-2 bg-zinc-100 rounded-md">
                                Fast Learner
                            </span>
                            <span className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-900 px-4 py-2 bg-zinc-100 rounded-md">
                                Problem Solver
                            </span>
                            <span className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-900 px-4 py-2 bg-zinc-100 rounded-md">
                                Challenge Acceptor
                            </span>
                        </div>

                        <div className="pt-6">
                            <a
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/20"
                            >
                                <FileText size={16} />
                                View Resume
                            </a>
                        </div>
                    </motion.div>
                </GlassCard>
            </div>
        </section >
    );
};

export default AboutSection;
