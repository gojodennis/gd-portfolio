import Link from "next/link";

export function Navbar() {
    const links = [
        { name: "Work", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 flex justify-center py-6">
            <div className="flex items-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                <Link href="/" className="text-sm font-bold tracking-tight hover:text-white/80 transition-colors">
                    GOJO
                </Link>
                <div className="h-4 w-px bg-white/10" />
                <div className="flex gap-6">
                    {links.map((link) => (
                        <Link key={link.name} href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
