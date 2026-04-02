import { services } from "@/data/services";

export default function Services() {
    return (
        <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="mb-12 text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
                    Services
                </p>
                <h2 className="text-4xl font-bold md:text-5xl">What I do</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {services.map((service) => {
                    const Icon = service.icon;

                    return (
                        <article
                            key={service.title}
                            className={`group rounded-2xl border bg-[#111111] p-8 transition duration-300 hover:-translate-y-1 ${service.active
                                ? "border-green-500/40 shadow-[0_0_30px_rgba(34,197,94,0.08)]"
                                : "border-[#1d1d1d] hover:border-green-500/30"
                                }`}
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 text-green-400">
                                <Icon size={28} strokeWidth={1.8} />
                            </div>

                            <h3 className="text-2xl font-semibold text-white">
                                {service.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-400">
                                {service.description}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
