"use client";
import React from "react";
import {
    MapPin,
    Briefcase,
    Globe2,
    Send,
    Loader2,
    LucideIcon,
    Linkedin,
    Youtube,
    Instagram
} from "lucide-react";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

// --- Main Component ---

export const PersonalLanding = () => {
    return (
        <div className="min-h-screen bg-[#191919] text-zinc-300 font-inter selection:bg-zinc-700 selection:text-zinc-100">
            <div className="max-w-3xl mx-auto px-6 py-20">

                {/* 1. Brief Intro Header (Notion Breadcrumb style) */}
                <BreadcrumbNav />
                {/* 2. Hero Section */}
                <section className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-start mb-20">
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight leading-[1.1] mb-6">
                            Hello, I'm Hrishikesh.
                        </h1>

                        {/* Professional Properties Block */}
                        <div className="flex flex-col gap-2 mb-8 border-l-2 border-zinc-800 pl-4 py-1">
                            <NotionProperty icon={MapPin} label="Location" value="India (IST)" />
                            <NotionProperty icon={Briefcase} label="Role" value="Full Stack System Architect" />
                            <NotionProperty icon={Globe2} label="Focus" value="High-Performance Web Apps & AI" />
                        </div>
                        <p className="text-zinc-400 leading-relaxed font-light">
                            I'm a developer and a content creator who enjoys building web applications and exploring new technologies —
                            basically, I spend most of my time in front of a screen.
                        </p>

                        <div className="pt-4 flex flex-col gap-6">
                            <ContactForm />
                            <div className="md:hidden">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>

                    {/* PFP / Illustration */}
                    {/* PFP / Illustration & Socials */}
                    <div className="flex flex-col gap-4 shrink-0">
                        <div className="w-32 h-32 md:w-64 md:h-64 rounded-xl overflow-hidden border-2 border-zinc-800 bg-zinc-900">
                            <img
                                src="/pfp.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale opacity-80"
                            />
                        </div>

                        <div className="hidden md:flex w-full gap-2">
                            <a href="https://linkedin.com/in/gojodennis" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center p-2 text-zinc-500 hover:text-zinc-100 bg-zinc-900 border border-zinc-800 rounded-lg transition-all hover:border-zinc-700">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://youtube.com/@gojodennis" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center p-2 text-zinc-500 hover:text-red-400 bg-zinc-900 border border-zinc-800 rounded-lg transition-all hover:border-zinc-700">
                                <Youtube size={20} />
                            </a>
                            <a href="https://instagram.com/gojodennis" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center p-2 text-zinc-500 hover:text-pink-400 bg-zinc-900 border border-zinc-800 rounded-lg transition-all hover:border-zinc-700">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* 3. Skills Database View - REMOVED pursuant to split page request */}

            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                .font-inter { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
                .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

const NotionProperty = ({ icon: Icon, label, value }: { icon: LucideIcon, label: string, value: string }) => (
    <div className="flex items-center text-sm">
        <div className="w-24 text-zinc-500 flex items-center gap-2">
            <Icon size={14} />
            {label}
        </div>
        <div className="text-zinc-300 font-medium">
            {value}
        </div>
    </div>
);

const ContactForm = () => {
    const [message, setMessage] = React.useState("");
    const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");
    const FORMSPREE_ID = "xeoyweyr";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        setStatus("sending");
        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify({ message })
            });
            if (res.ok) {
                setStatus("success");
                setMessage("");
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto relative max-w-sm">
            <input
                type="text"
                placeholder="Send a quick message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "sending" || status === "success"}
                className="bg-zinc-800/50 border border-zinc-700 text-zinc-200 px-4 py-2.5 rounded text-sm focus:outline-none focus:border-zinc-500 focus:bg-zinc-800 w-full shadow-sm placeholder-zinc-500"
            />
            <button
                type="submit"
                disabled={!message.trim() || status !== "idle"}
                className="bg-zinc-100 text-zinc-900 px-3 py-2.5 rounded hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[44px]"
            >
                {status === "sending" ? <Loader2 className="animate-spin" size={18} /> :
                    status === "success" ? <span className="text-emerald-600 font-bold">✓</span> :
                        <Send size={18} />}
            </button>
        </form>
    );
};

const SocialLinks = () => (
    <div className="flex w-full gap-2">
        <a href="https://linkedin.com/in/gojodennis" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center p-2 text-zinc-500 hover:text-zinc-100 bg-zinc-900 border border-zinc-800 rounded-lg transition-all hover:border-zinc-700">
            <Linkedin size={20} />
        </a>
        <a href="https://youtube.com/@gojodennis" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center p-2 text-zinc-500 hover:text-red-400 bg-zinc-900 border border-zinc-800 rounded-lg transition-all hover:border-zinc-700">
            <Youtube size={20} />
        </a>
        <a href="https://instagram.com/gojodennis" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center p-2 text-zinc-500 hover:text-pink-400 bg-zinc-900 border border-zinc-800 rounded-lg transition-all hover:border-zinc-700">
            <Instagram size={20} />
        </a>
    </div>
);
