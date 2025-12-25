"use client";

import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Briefcase } from "lucide-react";

// Mock Experience Data
const EXPERIENCES = [
    {
        role: "Full Stack Engineer",
        company: "Freelance",
        period: "2023 - Present",
        description: "Building production-ready applications for startups. Specializing in Next.js, AI integrations, and scalable architecture."
    },
    // Add more experiences here as needed
];

export default function ExperiencePage() {
    return (
        <div className="bg-[#191919] min-h-screen text-zinc-300 font-inter py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <BreadcrumbNav />

                    <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
                        <Briefcase size={24} className="text-zinc-100" />
                        <h1 className="text-2xl font-bold text-zinc-100">Experience</h1>
                    </div>
                </div>

                <div className="space-y-6">
                    {EXPERIENCES.map((exp, i) => (
                        <div key={i} className="border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900/50 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-100">{exp.role}</h3>
                                    <p className="text-zinc-400 font-medium text-sm">{exp.company}</p>
                                </div>
                                <span className="text-xs text-zinc-500 px-2 py-1 bg-zinc-800 rounded border border-zinc-700/50">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-zinc-400 font-light text-sm leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}

                    {/* Placeholder when empty */}
                    {EXPERIENCES.length === 0 && (
                        <p className="text-zinc-500 italic">No experience entries added yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
