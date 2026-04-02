type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
    status?: string;
    link?: string;
};

export default function ProjectCard({
    title,
    description,
    tech,
    status,
    link,
}: ProjectCardProps) {
    return (
        <article className="group rounded-2xl border border-[#1d1d1d] bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]">
            <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                        <span className="text-lg font-bold">{`</>`}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>

                {status ? (
                    <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                        {status}
                    </span>
                ) : null}
            </div>

            <p className="text-sm leading-7 text-gray-400">{description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
                {tech.map((item) => (
                    <span
                        key={item}
                        className="rounded-full border border-[#2a2a2a] bg-[#161616] px-3 py-1 text-xs text-gray-300"
                    >
                        {item}
                    </span>
                ))}
            </div>

            <div className="mt-6">
                {link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-medium text-green-400 transition hover:text-green-300"
                    >
                        View project
                        <span className="ml-2">↗</span>
                    </a>
                ) : (
                    <span className="inline-flex items-center text-sm font-medium text-gray-500">
                        Private / local project
                    </span>
                )}
            </div>
        </article>
    );
}
