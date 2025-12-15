"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    tags: string[];
    links: {
        demo: string;
        github: string;
    };
    gradient: string;
    // Featured projects get larger layout in future iterations
    featured?: boolean;
}

const PROJECTS: Project[] = [
    {
        title: "Personal AI Assistant",
        description: "Multi-action conversational assistant on Telegram. Integrates with Google APIs (Gmail, Calendar, Tasks) for seamless workflow automation.",
        tags: ["n8n", "Google Workspace API", "Telegram API"],
        links: { demo: "#", github: "https://github.com/gojodennis/n8n-pa" },
        gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    },
    {
        title: "Product Recommendation Agent",
        description: "AI-powered engine for catalog-based products. Features intelligent filtering and personalized recommendations.",
        tags: ["AI Algorithms", "Data Processing", "Automation"],
        links: { demo: "#", github: "https://github.com/gojodennis/n8n-pra" },
        gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    },
    {
        title: "Creative Agency Automation",
        description: "Intelligent system for managing creative ad variations and campaign workflows. Streamlines agency operations.",
        tags: ["Workflow Automation", "AdTech", "AI"],
        links: { demo: "#", github: "https://github.com/gojodennis/n8n-cgflv" },
        gradient: "from-purple-600/20 via-violet-500/10 to-transparent",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function Projects() {
    return (
        <section id="work" className="py-24 px-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Selected Work</h2>
                    <p className="text-lg text-white/60 leading-relaxed font-light">
                        Engineering digital experiences with a focus on core functionality, aesthetic precision, and user-centric design.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://github.com/gojodennis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                    >
                        <span className="border-b border-transparent group-hover:border-white/40 pb-0.5">View GitHub Profile</span>
                        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </motion.div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {PROJECTS.map((project, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        className="group relative flex flex-col bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
                    >
                        {/* Visual / Gradient Area */}
                        <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden group-hover:opacity-90 transition-opacity`}>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed text-sm font-light">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto space-y-4">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs tracking-wide px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-white/50 group-hover:text-white/70 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Custom Action Buttons Area */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs font-medium text-white/60 hover:text-white transition-colors"
                                    >
                                        <Github size={14} />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs font-medium text-white/60 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={14} />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
