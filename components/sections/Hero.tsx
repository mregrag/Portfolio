import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Hero() {
    return (
        <section
            id="home"
            className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24" >
            <div className="space-y-6">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-green-400">
                        {siteConfig.location}
                    </p>

                    <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                        Hi, I am
                        <br />
                        <span className="text-green-400">{siteConfig.name}</span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-300">{siteConfig.title}</p>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
                        {siteConfig.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <a
                        href={siteConfig.cv}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-green-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-green-400" >
                        Download CV
                    </a>

                    <a
                        href="#projects"
                        className="rounded-full border border-gray-700 px-5 py-3 text-sm font-medium text-white transition hover:border-green-400 hover:text-green-400" >
                        View Projects
                    </a>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border-8 border-[#151515] bg-[#111111] md:h-[450px] md:w-[450px]">
                    <Image
                        src="/profile.jpg"
                        alt={`${siteConfig.name} profile image`}
                        fill
                        className="object-cover"
                        priority />
                </div>
            </div>
        </section>
    );
}
