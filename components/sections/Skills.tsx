import { skillGroups } from "@/data/skills";

export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="mb-14 text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
                    Skills
                </p>
                <h2 className="text-4xl font-bold text-white md:text-5xl">
                    Tech Stack
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                    Technologies and tools I use to build projects, solve problems, and
                    create clean and efficient workflows.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {skillGroups.map((group) => {
                    const Icon = group.icon;

                    return (
                        <article
                            key={group.title}
                            className="group rounded-2xl border border-[#1d1d1d] bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]"
                        >
                            <div className="mb-5 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10 text-green-400 transition group-hover:bg-green-500/15">
                                    <Icon size={22} strokeWidth={1.8} />
                                </div>

                                <h3 className="text-lg font-semibold text-white">
                                    {group.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-[#2a2a2a] bg-[#161616] px-3 py-1.5 text-sm text-gray-300 transition hover:border-green-500/30 hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
