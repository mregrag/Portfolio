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
        value: siteConfig.github,
        href: siteConfig.github,
        icon: FaGithub,
    },
    {
        title: "LinkedIn",
        value: siteConfig.linkedin,
        href: siteConfig.linkedin,
        icon: FaLinkedinIn,
    },
];

export default function InfoCards() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            key={item.title}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            className="group rounded-2xl border border-[#1c1c1c] bg-[#111111] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400 transition group-hover:bg-green-500/15">
                                <Icon size={22} />
                            </div>

                            <h3 className="text-sm font-semibold tracking-wide text-white">
                                {item.title}
                            </h3>

                            <p className="mt-2 break-words text-sm leading-6 text-gray-400 transition group-hover:text-gray-300">
                                {item.value}
                            </p>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
