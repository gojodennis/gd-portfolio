"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Projects() {
    const projects = [
        {
            title: "Project Alpha",
            desc: "A minimalist dashboard for analytics. Real-time data visualization with highly optimized performance.",
            tags: ["Next.js", "Tailwind", "Supabase"],
            links: { demo: "#", git: "#" },
            image: null, // Placeholder for now
            gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            title: "Neon Ecommerce",
            desc: "High-performance online store with 3D elements. meaningful interactions and smooth transitions.",
            tags: ["React", "Three.js", "Stripe"],
            links: { demo: "#", git: "#" },
            image: null,
            gradient: "from-emerald-500/20 to-teal-500/20"
        },
        {
            title: "SaaS Starter",
            desc: "Complete boilerplate for new startups. Auth, database, and billing pre-configured.",
            tags: ["Next.js", "Prisma", "Postgres"],
            links: { demo: "#", git: "#" },
            image: null,
            gradient: "from-orange-500/20 to-red-500/20"
        },
        {
            title: "AI Chat Interface",
            desc: "Smooth, streaming chat UI with optimistic updates and markdown support.",
            tags: ["React", "AI SDK", "Framer Motion"],
            links: { demo: "#", git: "#" },
            image: null,
            gradient: "from-pink-500/20 to-rose-500/20"
        },
    ];

    return (
        <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Selected Work</h2>
                    <p className="text-lg text-white/60 leading-relaxed">
                        A collection of projects exploring the intersection of design, engineering, and user experience.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-0.5">
                        View all on GitHub <ArrowUpRight size={16} />
                    </a>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300"
                    >
                        {/* Image / Placeholder Area */}
                        <div className={`h-64 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            {/* In the future, <Image /> would go here */}
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <a href={project.links.git} className="p-2.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all">
                                    <Github size={18} />
                                </a>
                                <a href={project.links.demo} className="p-2.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all">
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-white/60 leading-relaxed text-sm h-10 line-clamp-2">{project.desc}</p>
                            </div>

                            <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/5 rounded-full text-white/50 group-hover:text-white/80 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
