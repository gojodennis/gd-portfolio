"use client";
import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
    Github,
    Linkedin,
    Instagram,
    Send,
    ArrowRight
} from "lucide-react";


const HeroSection: React.FC = () => {
    return (
        <section className="w-full flex flex-col items-center text-center gap-6 pt-8">
            <div className="relative mb-2">
                {/* Glow - Monochrome/Zinc for B&W theme */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-100 via-zinc-400 to-zinc-600 opacity-40 blur-lg animate-glow" />
                <img
                    src="/IMG_20251215_192401828.jpg"
                    alt="Hrishikesh"
                    className="relative size-32 rounded-full border-4 border-zinc-900 shadow-2xl z-10 bg-zinc-100 object-cover"
                />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight font-geist drop-shadow-sm text-zinc-100">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-white to-zinc-400">Hrishikesh</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-inter font-light">
                Curious by default. <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] font-medium">Polymath</span> by choice. I build software across apps, web, systems, and SaaS.
            </p>
        </section>
    );
};

interface SocialLink {
    href: string;
    label: string;
    icon: React.ReactNode;
    bg: string;
    text: string;
    border?: string;
}

const socialLinks: SocialLink[] = [
    {
        href: 'https://linkedin.com/in/gojodennis',
        label: 'LinkedIn',
        icon: <Linkedin size={24} />,
        bg: 'bg-zinc-900',
        text: 'text-zinc-200',
        border: 'border-zinc-800'
    },
    {
        href: 'https://github.com/gojodennis',
        label: 'GitHub',
        icon: <Github size={24} />,
        bg: 'bg-zinc-100',
        text: 'text-zinc-900',
        border: 'border-zinc-200'
    },
    {
        href: 'https://instagram.com/gojodennis',
        label: 'Instagram',
        icon: <Instagram size={24} />,
        bg: 'bg-zinc-900',
        text: 'text-zinc-200',
        border: 'border-zinc-800'
    },
];

const SocialsBlock: React.FC = () => (
    <div className="flex flex-wrap justify-center gap-4 w-full font-inter">
        {socialLinks.map((link) => (
            <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={twMerge(
                    'flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/20',
                    link.bg,
                    link.text,
                    link.border || 'border-transparent'
                )}
                style={{ minWidth: 140 }}
            >
                {link.icon}
                <span>{link.label}</span>
            </a>
        ))}
    </div>
);

const AboutBlock = () => (
    <div className="w-full max-w-3xl rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-8 shadow-sm text-center font-inter backdrop-blur-sm">
        <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
            I’m Hrishikesh, 18 and a systems-first builder who learns by shipping, not by collecting credentials.<br className="hidden md:block" />
            I chose real-world execution over college, and I build software to understand, control, and improve how systems actually work.
        </p>
    </div>
);

const ConnectSection: React.FC = () => {
    const [message, setMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [error, setError] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const validateMessage = (msg: string) => {
        if (!msg.trim()) return "Message cannot be empty.";
        if (msg.trim().length < 3) return "Message must be at least 3 characters.";
        if (msg.length > 200) return "Message cannot exceed 200 characters.";
        return "";
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        const validationError = validateMessage(message);
        if (validationError) {
            setError(validationError);
            return;
        }
        setShowToast(true);
        setMessage("");
        setError("");
        if (inputRef.current) inputRef.current.blur();
        setTimeout(() => setShowToast(false), 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
        if (error) setError("");
    };

    return (
        <section className="w-full flex flex-col items-center text-center gap-6 mt-8 font-inter relative">
            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-6 right-6 z-50 bg-zinc-100 text-zinc-900 px-6 py-3 rounded-xl shadow-xl font-medium text-sm animate-fade-in flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    Message sent successfully!
                </div>
            )}
            <p className="text-lg text-zinc-500 mb-2 max-w-md mx-auto font-light">
                Want to collaborate on an automation project?
            </p>
            <form onSubmit={handleSend} className="flex w-full max-w-md gap-2 items-center justify-center">
                <input
                    ref={inputRef}
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Send me a message..."
                    className={twMerge(
                        "flex-1 rounded-full border px-6 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition-all focus:outline-none shadow-sm font-inter bg-zinc-900/50 backdrop-blur-sm",
                        error ? "border-red-500/50 focus:border-red-500" : "border-zinc-800 focus:border-zinc-500 focus:bg-zinc-900"
                    )}
                    maxLength={201}
                />
                <button
                    type="submit"
                    className={twMerge(
                        "inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all active:scale-95 hover:bg-white",
                        message.trim() ? "hover:scale-105 cursor-pointer opacity-100" : "opacity-50 cursor-not-allowed"
                    )}
                    disabled={!message.trim()}
                    aria-disabled={!message.trim()}
                >
                    Send <ArrowRight size={16} />
                </button>
            </form>
            {error && (
                <div className="text-red-400 text-xs mt-1 font-medium">{error}</div>
            )}
            <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
};

export const PersonalLanding = () => {
    return (
        <div className="min-h-[95vh] w-full flex items-center justify-center bg-transparent px-4 py-8 text-zinc-50 font-inter relative overflow-hidden">
            {/* Animated background blob - Monochrome */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-[120px] -z-10" />

            <div className="w-full max-w-4xl flex flex-col items-center gap-10 z-10">
                <HeroSection />
                <SocialsBlock />
                <AboutBlock />
                <ConnectSection />
            </div>
            <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
      .font-inter { font-family: 'Inter', system-ui, sans-serif; }
      .font-geist { font-family: 'Geist', 'Inter', system-ui, sans-serif; }
      .animate-glow { animation: glow 4s ease-in-out infinite alternate; }
      @keyframes glow {
        from { opacity: 0.3; transform: scale(1); }
        to { opacity: 0.6; transform: scale(1.1); }
      }
    `}</style>
        </div>
    );
};
