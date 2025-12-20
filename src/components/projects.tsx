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
    image: string;
}

const PROJECTS: Project[] = [
    {
        title: "OpenKombai",
        description: "The open-source, local-first alternative to Kombai. No subscriptions. No data leaks. Just pure cosmic power on your machine.",
        tags: ["Open Source", "Local AI", "Frontend Tooling"],
        links: { demo: "https://openkombai.vercel.app/", github: "https://github.com/gojodennis/OpenKombai" },
        image: "/images/projects/openkombai.png"
    },
    {
        title: "DigiGarden",
        description: "Your digital sanctuary for growth. A personalized personal knowledge management (PKM) system built for cultivating ideas and tracking progress.",
        tags: ["Next.js", "PKM", "Digital Garden", "Productivity"],
        links: { demo: "https://d1gigarden.vercel.app", github: "https://github.com/gojodennis/digitalgarden" },
        image: "/images/projects/digigarden.png"
    }
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
        <section id="work" className="py-32 px-6 max-w-4xl mx-auto font-inter">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-6 font-geist">Selected Work</h2>
                    <p className="text-lg text-zinc-400 leading-relaxed font-light">
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
                        className="group flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium"
                    >
                        <span className="border-b border-transparent group-hover:border-zinc-500 pb-0.5">View GitHub Profile</span>
                        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </motion.div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {PROJECTS.map((project, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        className="group relative flex flex-col bg-zinc-900/30 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700/50 hover:bg-zinc-900/50 transition-all duration-500 backdrop-blur-sm shadow-sm hover:shadow-md"
                    >
                        {/* Visual Area - Monochrome Gradient Fallback if Image Fails/Loading */}
                        <div className="h-56 w-full bg-gradient-to-br from-zinc-800/50 via-zinc-900/50 to-transparent relative overflow-hidden">
                            {/* Image with overlay for monochrome effect */}
                            <div className="absolute inset-0 mix-blend-overlay opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-white transition-colors font-geist w-full">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed text-sm font-light">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto space-y-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs tracking-wide px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/30 rounded-full text-zinc-300 group-hover:text-zinc-100 group-hover:border-zinc-600 transition-all"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Custom Action Buttons Area */}
                                <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/50">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-colors"
                                    >
                                        <Github size={16} />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-colors"
                                    >
                                        <ExternalLink size={16} />
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
