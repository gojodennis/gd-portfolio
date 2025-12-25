import { PROJECTS } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Optimization: generateStaticParams for static export
export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = PROJECTS.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-[#191919] min-h-screen text-zinc-300 font-inter py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <Link href="/projects" className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-300 mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Projects
                </Link>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-zinc-100 mb-4">{project.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 rounded text-xs uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-lg text-zinc-400 leading-relaxed font-light">{project.description}</p>
                </div>

                <div className="relative w-full h-64 md:h-80 mb-10 rounded-xl overflow-hidden border border-zinc-800">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">The Problem</h2>
                            <div className="prose prose-invert prose-zinc max-w-none">
                                <p className="text-zinc-400 leading-relaxed text-base">
                                    {project.problemStatement}
                                </p>
                            </div>
                        </section>

                    </div>

                    <div className="space-y-6">
                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5">
                            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">Links</h3>
                            <div className="space-y-3">
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                )}
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
                                    >
                                        <Github size={16} />
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
