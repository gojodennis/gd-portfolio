"use client";

import { motion } from "framer-motion";

export function About() {
    const techCategories = [
        {
            title: "Frontend",
            skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Vite"]
        },
        {
            title: "Backend & Infra",
            skills: ["Supabase", "PostgreSQL", "OAuth", "Vercel"]
        },
        {
            title: "AI & Automation",
            skills: ["n8n", "API-driven LLMs", "Workflow Integrations"]
        },
        {
            title: "Design & Workflow",
            skills: ["Figma-style Systems", "Framer", "Rapid Prototyping", "AI-assisted IDEs"]
        }
    ];



    return (
        <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-16"
            >
                {/* Bio Section */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                    <div className="space-y-4 text-lg text-white/60 leading-relaxed font-light">
                        <p>
                            My name is Hrishikesh Bania. I am 18.
                        </p>
                        <p>
                            I build software because I enjoy the act of building, not because it is assigned. I think in systems,
                            optimize for clarity, and prefer working code over theoretical polish. My focus is on understanding
                            how things scale, break, and improve under real constraints.
                        </p>
                        <p>
                            I am intentionally not pursuing college. I value direct experience, real responsibility, and learning
                            through execution over structured credentials. I move fast, iterate aggressively, and take ownership
                            of outcomes.
                        </p>
                    </div>
                </div>



                {/* Tech Stack Section */}
                <div className="space-y-8">
                    <h3 className="text-xl font-medium text-white/90">Tech Stack</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {techCategories.map((category, idx) => (
                            <div key={category.title} className="space-y-4">
                                <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider">{category.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                                            viewport={{ once: true }}
                                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:text-white hover:border-white/30 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
