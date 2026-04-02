"use client";

import { FormEvent, useState } from "react";
import { Mail, Send, User, MessageSquare } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [feedback, setFeedback] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setFeedback("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            setFeedback("Your message has been sent successfully.");
            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Failed to send your message. Please try again.";

            setStatus("error");
            setFeedback(message);
        }
    }
    return (
        <section id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            <div className="mb-12 text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
                    Contact
                </p>
                <h2 className="text-4xl font-bold text-white md:text-5xl">
                    Get in Touch
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                    Have a project, internship, or collaboration in mind? Send me a message.
                </p>
            </div>

            <div className="rounded-3xl border border-[#1d1d1d] bg-[#111111] p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Name</label>
                            <div className="flex items-center gap-3 rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 focus-within:border-green-500/40">
                                <User size={18} className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email</label>
                            <div className="flex items-center gap-3 rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 focus-within:border-green-500/40">
                                <Mail size={18} className="text-gray-500" />
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Subject</label>
                        <div className="flex items-center gap-3 rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 focus-within:border-green-500/40">
                            <MessageSquare size={18} className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Subject"
                                value={form.subject}
                                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Message</label>
                        <textarea
                            placeholder="Write your message here..."
                            rows={6}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-green-500/40"
                        />
                    </div>

                    <div className="flex flex-col gap-4 border-t border-white/5 pt-4 sm:flex-row sm:items-center sm:justify-between">
                        <p
                            className={`text-sm ${status === "success"
                                ? "text-green-400"
                                : status === "error"
                                    ? "text-red-400"
                                    : "text-gray-500"
                                }`}
                        >
                            {feedback || "I usually reply as soon as possible."}
                        </p>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <Send size={16} />
                            {status === "loading" ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
