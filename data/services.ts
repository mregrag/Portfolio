import { Code2, Globe, Palette } from "lucide-react";

export const services = [
    {
        title: "System Programming",
        description: "Building low-level projects in C and C++, with focus on processes, signals, sockets, memory, and system calls.",
        icon: Code2,
    },
    {
        title: "Web Development",
        description: "Creating modern full-stack applications with React, TypeScript, Next.js, and backend technologies.",
        icon: Globe,
        active: true,
    },
    {
        title: "DevOps & Deployment",
        description: "Working with Docker, Nginx, and service-based architectures to deploy secure and maintainable applications.",
        icon: Palette,
    },
];
