"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);

    function scroll(direction: "left" | "right") {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -380 : 380,
            behavior: "smooth",
        });
    }

    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">

            {/* Header — matches Skills exactly */}
            <div className="mb-14 text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
                    Portfolio
                </p>
                <h2 className="text-4xl font-bold text-white md:text-5xl">
                    My 42 Projects
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                    A selection of projects I built during my 42 journey, focused on C,
                    algorithms, UNIX, system administration, and problem solving.
                </p>
            </div>

            {/* Arrows */}
            <div className="mb-5 flex justify-end gap-2">
                <button
                    onClick={() => scroll("left")}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1d1d1d] bg-[#111111] text-gray-400 transition hover:border-green-500/40 hover:text-green-400"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1d1d1d] bg-[#111111] text-gray-400 transition hover:border-green-500/40 hover:text-green-400" >
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* Scrollable Cards — negative margin to break out of max-w-6xl */}
            <div
                ref={scrollRef}
                className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {projects.map((project) => (
                    <div key={project.title} className="w-[340px] flex-none md:w-[380px]">
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            status={project.status}
                            link={project.github}
                        />
                    </div>
                ))}
            </div>

        </section>
    );
}
