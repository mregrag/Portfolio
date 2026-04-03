# Mohamed Regrag — Portfolio

A modern and responsive personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS** to showcase my background, skills, and projects from **1337 / 42 Network**.

## Overview

This project is my personal portfolio website. It highlights who I am, the technologies I work with, the projects I built, and the best ways to contact me.

The goal of this portfolio is to present my work in a clean, simple, and professional way while keeping the codebase well structured and easy to maintain.

## Features

- Modern responsive design
- Built with Next.js App Router
- Clean component-based architecture
- Static portfolio data stored in dedicated data files
- Projects section for 42 / personal work
- Skills and services sections
- Contact form with backend email support
- Downloadable CV
- Reusable UI structure for future updates

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons / Lucide React
- **Email handling:** Next.js API Route
- **Deployment:** Vercel

## Project Structure

```bash
app/
  api/
    contact/
      route.ts
  layout.tsx
  page.tsx

components/
  layout/
    Footer.tsx
    Navbar.tsx
  sections/
    About.tsx
    Contact.tsx
    Hero.tsx
    InfoCards.tsx
    Projects.tsx
    Services.tsx
    Skills.tsx
  ui/
    ProjectCard.tsx
    SectionHeading.tsx

data/
  projects.ts
  services.ts
  site.ts
  skills.ts

lib/
  utils.ts

public/
  cv.pdf
  profile.jpg
