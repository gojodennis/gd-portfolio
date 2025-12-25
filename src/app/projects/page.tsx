"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, FolderOpen, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { PROJECTS } from "@/lib/projects";

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
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group block bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Visual Header - Minimal Notion Cover Style */}
                            <Link href={`/projects/${project.slug}`} className="h-40 w-full relative overflow-hidden bg-zinc-800 block cursor-pointer">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                            </Link>

                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <Folder size={16} className="text-zinc-500" />
                                        <Link href={`/projects/${project.slug}`} className="cursor-pointer">
                                            <h3 className="text-lg font-semibold text-zinc-100 group-hover:underline decoration-zinc-500 underline-offset-4 decoration-1">
                                                {project.title}
                                            </h3>
                                        </Link>
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

                                <p className="text-sm text-zinc-400 line-clamp-2 mb-4 font-light flex-grow">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link href={`/projects/${project.slug}`} className="flex items-center text-xs text-zinc-500 hover:text-zinc-300 font-medium transition-colors">
                                        Read Problem Statement <ArrowRight size={12} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
