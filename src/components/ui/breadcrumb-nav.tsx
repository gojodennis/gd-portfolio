"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { FolderOpen, Command, Briefcase, Menu, X, Home } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function BreadcrumbNav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { label: "Home", href: "/", icon: Home },
        { label: "Projects", href: "/projects", icon: FolderOpen },
        { label: "Skills", href: "/skills", icon: Command },
        { label: "Experience", href: "/experience", icon: Briefcase },
    ];

    // Find current page label for mobile header
    const currentPage = items.find(item => item.href === pathname) || items[0];

    return (
        <div className="mb-8 font-medium relative z-50">
            {/* Desktop View */}
            <div className="hidden md:flex items-center gap-2 text-zinc-500 text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
                <span className="text-zinc-300">gojodennis</span>
                {items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <div key={item.href} className="flex items-center gap-2">
                            <span>/</span>
                            <Link
                                href={item.href}
                                className={twMerge(
                                    "transition-colors hover:text-zinc-200 flex items-center gap-1.5",
                                    isActive ? "text-zinc-100" : "text-zinc-500"
                                )}
                            >
                                {item.icon === FolderOpen && <item.icon size={14} />}
                                {item.icon === Command && <item.icon size={14} />}
                                {item.icon === Briefcase && <item.icon size={14} />}
                                {item.label}
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
                <div className="flex items-center justify-between text-zinc-300">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-zinc-500">gojodennis</span>
                        <span className="text-zinc-700">/</span>
                        <span className="text-zinc-100 flex items-center gap-1.5">
                            {currentPage.icon && <currentPage.icon size={14} />}
                            {currentPage.label}
                        </span>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 -mr-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 right-0 top-full mt-2 bg-[#191919] border border-zinc-800 rounded-lg shadow-xl overflow-hidden p-2 flex flex-col gap-1"
                        >
                            {items.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={twMerge(
                                            "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors",
                                            isActive
                                                ? "bg-zinc-800 text-zinc-100"
                                                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                                        )}
                                    >
                                        {item.icon && <item.icon size={16} />}
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
