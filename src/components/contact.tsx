"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto space-y-8"
            >
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                    Let's build something great.
                </h2>
                <p className="text-white/50 text-lg">
                    I'm currently available for freelance work and open to full-time opportunities.
                </p>

                <div className="flex justify-center gap-6 pt-4">
                    <a
                        href="mailto:contact@gojodennis.com"
                        className="flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-transform hover:scale-105 active:scale-95"
                    >
                        <Mail size={18} />
                        Get in Touch
                    </a>
                </div>

                <div className="flex justify-center gap-8 pt-12 opacity-50">
                    <a href="#" className="hover:text-white hover:opacity-100 transition-all"><Github size={24} /></a>
                    <a href="#" className="hover:text-white hover:opacity-100 transition-all"><Linkedin size={24} /></a>
                    <a href="#" className="hover:text-white hover:opacity-100 transition-all"><Twitter size={24} /></a>
                </div>
            </motion.div>
        </section>
    );
}
