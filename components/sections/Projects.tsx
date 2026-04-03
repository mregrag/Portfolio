import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="mb-12 text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
                    Portfolio
                </p>
                <h2 className="text-4xl font-bold md:text-5xl">My 42 Projects</h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                    A selection of projects I built during my 42 journey, focused on C,
                    algorithms, UNIX, system administration, and problem solving.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        status={project.status}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}
