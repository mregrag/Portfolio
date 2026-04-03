import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { siteConfig } from "@/data/site";

const items = [
    {
        title: "Email",
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        icon: FaEnvelope,
    },
    {
        title: "Phone",
        value: siteConfig.phone,
        href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
        icon: FaPhone,
    },
    {
        title: "GitHub",
        value: "GitHub Profile",
        href: siteConfig.github,
        icon: FaGithub,
    },
    {
        title: "LinkedIn",
        value: "LinkedIn Profile",
        href: siteConfig.linkedin,
        icon: FaLinkedinIn,
    },
];

export default function InfoCards() {
    const visibleItems = items.filter((item) => item.href);

    return (
        <section className="mx-auto max-w-6xl px-6 py-16">

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {visibleItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            key={item.title}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            className="group flex items-center gap-4 rounded-2xl border border-[#222222] bg-[#161616] px-5 py-4 transition duration-300 hover:border-green-500/30 hover:bg-[#191919]" >
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400">
                                <Icon size={18} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-white">{item.title}</p>
                                <p className="truncate text-sm text-gray-400 transition group-hover:text-gray-300">
                                    {item.value}
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
