"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Services", href: "#services" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Writeups", href: "/writeups" },
        { name: "Contact me", href: "#contact" },
    ];



    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0b0b]/90 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <a href="#home" className="text-2xl font-bold tracking-wide text-white">
                    mregrag
                </a>

                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`text-sm transition ${link.name === "Contact me" ? "rounded-full border border-green-500/30 px-4 py-2 text-green-400 hover:bg-green-500 hover:text-black" : "text-gray-300 hover:text-green-400"}`} >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="text-white md:hidden" >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {open && (
                <div className="border-t border-white/5 bg-[#0f0f0f] md:hidden">
                    <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-3 text-sm text-gray-300 transition hover:text-green-400" >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
