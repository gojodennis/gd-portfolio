"use client";

import { motion } from "framer-motion";
import { Command, Code2, Layout, Globe, Terminal, Database, Zap, Layers, Cpu } from "lucide-react";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

const SKILLS = [
    { name: "React", category: "Frontend", status: "Expert", icon: Layout },
    { name: "Next.js", category: "Frontend", status: "Expert", icon: Globe },
    { name: "TypeScript", category: "Language", status: "Expert", icon: Code2 },
    { name: "Node.js", category: "Backend", status: "Advanced", icon: Terminal },
    { name: "PostgreSQL", category: "Database", status: "Advanced", icon: Database },
    { name: "Supabase", category: "Backend", status: "Advanced", icon: Zap },
    { name: "Tailwind CSS", category: "Frontend", status: "Expert", icon: Layers },
    { name: "AI/LLMs", category: "Integration", status: "Intermediate", icon: Cpu },
    { name: "System Design", category: "Architecture", status: "Advanced", icon: Command },
    { name: "Docker", category: "DevOps", status: "Intermediate", icon: Terminal },
    { name: "Framer Motion", category: "Animation", status: "Advanced", icon: Layers },
];

const SkillRow = ({ name, category, status, icon: Icon }: { name: string, category: string, status: string, icon: any }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center px-4 py-3 text-sm hover:bg-zinc-800/30 transition-colors group"
    >
        <div className="w-1/3 font-medium text-zinc-200 flex items-center gap-2 group-hover:text-white transition-colors">
            <Icon size={14} className="text-zinc-600 group-hover:text-zinc-400" />
            {name}
        </div>
        <div className="w-1/3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-zinc-800 text-zinc-400 border border-zinc-700/50 group-hover:border-zinc-600 transition-colors">
                {category}
            </span>
        </div>
        <div className="w-1/3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
            {status}
        </div>
    </motion.div>
);

export default function SkillsPage() {
    return (
        <div className="bg-[#191919] min-h-screen text-zinc-300 font-inter py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <BreadcrumbNav />

                    <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
                        <Command size={24} className="text-zinc-100" />
                        <h1 className="text-2xl font-bold text-zinc-100">Skills Database</h1>
                    </div>
                </div>

                <div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/50">
                    {/* Table Header */}
                    <div className="flex items-center px-4 py-2 border-b border-zinc-800 bg-zinc-900 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        <div className="w-1/3">Technology</div>
                        <div className="w-1/3">Category</div>
                        <div className="w-1/3">Status</div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-zinc-800/50">
                        {SKILLS.map((skill) => (
                            <SkillRow key={skill.name} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
