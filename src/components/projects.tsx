"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    const projects = [
        {
            title: "Project Alpha",
            desc: "A minimalist dashboard for analytics.",
            tags: ["Next.js", "Tailwind", "Supabase"],
            links: { demo: "#", git: "#" },
        },
        {
            title: "Neon Ecommerce",
            desc: "High-performance online store with 3D elements.",
            tags: ["React", "Three.js", "Stripe"],
            links: { demo: "#", git: "#" },
        },
        {
            title: "SaaS Starter",
            desc: "Complete boilerplate for new startups.",
            tags: ["Next.js", "Prisma", "Postgres"],
            links: { demo: "#", git: "#" },
        },
        {
            title: "AI Chat Interface",
            desc: "Smooth, streaming chat UI.",
            tags: ["React", "AI SDK", "Framer Motion"],
            links: { demo: "#", git: "#" },
        },
    ];

    return (
        <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12"
            >
                Selected Work
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative border border-white/10 bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">{project.title}</h3>
                            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href={project.links.git} className="p-2 hover:bg-white/10 rounded-full transition-colors"><Github size={20} /></a>
                                <a href={project.links.demo} className="p-2 hover:bg-white/10 rounded-full transition-colors"><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <p className="text-white/60 mb-6">{project.desc}</p>

                        <div className="flex gap-2 flex-wrap">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/5 rounded-full text-white/40 group-hover:text-white/70 group-hover:border-white/10 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
