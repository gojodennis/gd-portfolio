"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, FolderOpen } from "lucide-react";
import Image from "next/image";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

interface Project {
    title: string;
    description: string;
    tags: string[];
    links: {
        demo: string;
        github: string;
    };
    image: string;
    featured?: boolean;
}

const PROJECTS: Project[] = [
    {
        title: "OpenKombai",
        description: "Local-first alternative to Kombai. AI-powered UI generation without data leaks.",
        tags: ["Open Source", "AI", "Tooling"],
        links: { demo: "https://openkombai.vercel.app/", github: "https://github.com/gojodennis/OpenKombai" },
        image: "/images/projects/openkombai.png",
        featured: true
    },
    {
        title: "DigiGarden",
        description: "DigiGarden lets users virtually adopt, nurture real trees via notifications, and support NGO afforestation.",
        tags: ["Productivity", "PKM", "Next.js"],
        links: { demo: "https://d1gigarden.vercel.app", github: "https://github.com/gojodennis/digitalgarden" },
        image: "/images/projects/digigarden.png",
        featured: true
    }
];

export default function ProjectsPage() {
    return (
        <div className="bg-[#191919] min-h-screen text-zinc-300 font-inter py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <BreadcrumbNav />

                    <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
                        <FolderOpen size={24} className="text-zinc-100" />
                        <h1 className="text-2xl font-bold text-zinc-100">Projects</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group block bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
                        >
                            {/* Visual Header - Minimal Notion Cover Style */}
                            <div className="h-40 w-full relative overflow-hidden bg-zinc-800">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <Folder size={16} className="text-zinc-500" />
                                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:underline decoration-zinc-500 underline-offset-4 decoration-1">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-2">
                                        {project.links.github && (
                                            <a href={project.links.github} target="_blank" className="text-zinc-500 hover:text-zinc-200" title="View Code">
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a href={project.links.demo} target="_blank" className="text-zinc-500 hover:text-zinc-200" title="Live Demo">
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-sm text-zinc-400 line-clamp-2 mb-4 font-light">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
