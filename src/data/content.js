export const personalInfo = {
  name: "Isaac Vance",
  title: "Software Engineer & Founder",
  tagline: "Artist. Engineer. Creator.",
  location: "Arvada, CO",
  email: "isaacchristophervance@gmail.com",
  resumeUrl: "/images/Isaac_Vance_Resume.pdf",
  bio: [
    "I'm a software engineer, entrepreneur, and creative thinker currently building three products: Conduit, a SaaS platform for contractors; TerminaLLM, a mobile terminal app purpose-built for AI-assisted development over SSH; and Sentinel, an AI-powered democratic health monitoring system.",
    "By day, I serve as a Senior Cloud Engineer at Cadre Government Solutions, where I work on the Department of State's worldwide VisaOps platform -- a critical 7-module Rails application that processes visa operations globally. I've led a Rails 7 migration, resolved payment velocity attacks that improved throughput by 20%, and refactored database schemas for international scalability.",
    "Previously at Recurly, I spent over two years across payments engineering roles, shipping integrations across Ruby, Golang, and Node.js microservices that processed over $1 billion in monthly transactions. I also contributed to the open-source Recurly.js tokenization library.",
    "I'm a power user of AI coding tools -- Claude Code and OpenCode with Sonnet and Opus are integral to my daily workflow. I built TerminaLLM specifically because I wanted to run these tools from my phone, and Conduit, Sentinel, and this website were all built with AI-assisted development.",
    "I hold two Bachelor's degrees from CU Boulder: Computer Science, and Mathematics & Economics."
  ],
  quote: {
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts"
  },
}

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/isaac-vance", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/isaacvance1027", icon: "github" },
  { name: "Spotify", url: "https://open.spotify.com/artist/5GYUtpEjPH0nJR8DvX9mDd", icon: "spotify" },
  { name: "SoundCloud", url: "https://soundcloud.com/isaac-vance", icon: "soundcloud" },
  { name: "Instagram", url: "https://www.instagram.com/isaacvancemusic/", icon: "instagram" },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Music", href: "#music" },
]

export const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "Ruby on Rails", level: 92, label: "Expert" },
      { name: "React", level: 82, label: "Advanced" },
      { name: "JavaScript", level: 80, label: "Advanced" },
      { name: "Golang", level: 72, label: "Advanced" },
      { name: "Python", level: 68, label: "Proficient" },
      { name: "Flutter / Dart", level: 65, label: "Proficient" },
      { name: "Node.js", level: 70, label: "Advanced" },
      { name: "C / C++", level: 55, label: "Proficient" },
    ]
  },
  {
    category: "Tools & Infrastructure",
    items: [
      { name: "AI Coding Tools", level: 95, label: "Expert" },
      { name: "Git & GitHub", level: 92, label: "Expert" },
      { name: "REST API Design", level: 88, label: "Expert" },
      { name: "Payment Systems", level: 85, label: "Expert" },
      { name: "Docker / Kubernetes / GCP", level: 72, label: "Advanced" },
      { name: "PostgreSQL / MySQL", level: 78, label: "Advanced" },
      { name: "CI/CD & GitHub Actions", level: 75, label: "Advanced" },
      { name: "Linux / CLI / SSH", level: 80, label: "Advanced" },
    ]
  },
  {
    category: "AI & LLM Ecosystem",
    items: [
      { name: "Claude Code / Anthropic", level: 95, label: "Expert" },
      { name: "OpenCode (Sonnet / Opus)", level: 92, label: "Expert" },
      { name: "Prompt Engineering", level: 88, label: "Expert" },
      { name: "LLM Integration & APIs", level: 80, label: "Advanced" },
      { name: "AI-First Development", level: 92, label: "Expert" },
    ]
  }
]

export const experience = [
  {
    company: "Conduit, TerminaLLM & Sentinel",
    role: "Founder & Solo Developer",
    period: "2024 - Present",
    location: "Arvada, CO",
    description: "Building three products simultaneously with AI-assisted development: a SaaS platform, a mobile terminal app, and a democratic health monitoring system.",
    highlights: [
      "Conduit: Full SaaS with job management, invoicing, Stripe Connect payments, scheduling, and team management (Rails 8 + React + Tailwind)",
      "TerminaLLM: Flutter mobile app with SSH, SFTP, media drop for AI agents, on-device speech-to-text, encrypted vault, and iOS Live Activities",
      "Sentinel: AI-powered daily briefing system tracking democratic health indices using Claude, RSS ingestion, and economic data (Rails 8 + React)",
      "Built all three products as a solo developer using Claude Code and OpenCode with Sonnet and Opus",
    ],
    tech: ["Ruby on Rails", "React", "Flutter", "Stripe", "Anthropic Claude", "Tailwind CSS"],
  },
  {
    company: "Cadre Government Solutions",
    role: "Senior Cloud Engineer",
    period: "Mar 2024 - Present",
    location: "Remote / Denver, CO",
    description: "Senior engineer on the Department of State VisaOps platform -- a critical 7-module Rails application that handles worldwide visa processing operations.",
    highlights: [
      "Led migration from Classic to Zeitwerk autoloading for full Rails 7 upgrade of the VisaOps platform",
      "Fixed American Express payment velocity decline issue, stopping bot attacks and improving payment throughput by 20%",
      "Refactored database schema to extract overloaded countries model into a new globally-scoped table",
      "One of three total engineers managing the entire 7-module application for worldwide DOS operations",
      "Built json-based config tooling used by test engineers to onboard new countries into the platform",
    ],
    tech: ["Ruby on Rails", "GCP", "Kubernetes", "Docker", "PostgreSQL", "RabbitMQ"],
  },
  {
    company: "Recurly, Inc.",
    role: "Software Engineer - Payments",
    period: "Sep 2021 - Feb 2024",
    location: "Remote / Boulder, CO",
    description: "Full-stack payments engineering across four major microservices processing over $1 billion in monthly transactions. Progressed from Escalations Engineer to Payments Success Engineer.",
    highlights: [
      "Designed and canary-released AVS/Partial-AVS and CVV system for Chase Orbital gateway integration",
      "Sole engineer on PCI compliance fix processing 20M+ records via multithreaded scripts -- only Associate Engineer to ever receive SPOT recognition award",
      "Deployed hot fixes across Ruby, Node, and open-source Recurly.js to ensure $20M subscription batch success",
      "Built new integrations to third-party payment APIs across Ruby, Golang, and Node.js microservices",
    ],
    tech: ["Ruby on Rails", "Golang", "Node.js", "React", "GCP", "REST APIs"],
  },
  {
    company: "Sporian Microsystems",
    role: "Software Development Intern",
    period: "May 2020 - Oct 2020",
    location: "Lafayette, CO",
    description: "Built a Flask web application for a government contract project involving helicopter diagnostics and mechanical prognostic analysis from field-deployed microcontrollers.",
    highlights: [
      "Built Flask web app using Jinja templates for displaying data from field-deployed microcontrollers",
      "Refactored low-code generated Django app to assess cost/benefit of functionality to implementation weight",
    ],
    tech: ["Python", "Flask", "Django", "JavaScript", "SQLite", "Git"],
  },
  {
    company: "University of Colorado Boulder",
    role: "B.S. Computer Science",
    period: "2019 - 2021",
    location: "Boulder, CO",
    description: "Second Bachelor's degree in Computer Science with coursework in algorithms, operating systems, machine learning, and concurrent programming.",
    highlights: [
      "Algorithms & Data Structures",
      "Operating Systems & Concurrent Programming",
      "Machine Learning & Computational Mathematics",
    ],
    tech: ["C", "C++", "Python", "Java", "MIPS Assembly"],
  },
  {
    company: "University of Colorado Boulder",
    role: "B.A. Mathematics & Economics",
    period: "2012 - 2016",
    location: "Boulder, CO",
    description: "Double major in Mathematics and Quantitative Economics with focus on statistical modeling and economic theory.",
    highlights: [
      "Statistical Modeling & Econometrics",
      "Linear Algebra & Differential Equations",
      "Probability Theory & Real Analysis",
    ],
    tech: ["MATLAB", "R", "Stata"],
  },
]

export const projects = [
  {
    title: "Conduit",
    description: "Full-featured SaaS platform for contractors -- job management, invoicing, Stripe Connect payments, scheduling, and team management. Built with Rails 8 + React + Tailwind CSS, almost entirely with AI-assisted development.",
    tech: ["Ruby on Rails", "React", "Tailwind CSS", "Stripe Connect", "PostgreSQL"],
    url: "https://conduitforcontractors.com",
    featured: true,
  },
  {
    title: "TerminaLLM",
    description: "Mobile terminal app (iOS & Android) purpose-built for running AI coding agents like Claude Code over SSH from your phone. Features media drop, encrypted vault, SFTP, on-device speech-to-text, and iOS Live Activities.",
    tech: ["Flutter", "Dart", "SSH", "SFTP", "Whisper AI", "AES-256"],
    url: "https://github.com/isaacvance1027",
    featured: true,
  },
  {
    title: "Sentinel",
    description: "AI-powered democratic health monitoring system that ingests politically diverse news sources, economic data from FRED and Yahoo Finance, and produces daily briefings with structural threat and resilience indices via Claude. Includes portfolio analysis and AI chat.",
    tech: ["Ruby on Rails", "React", "Anthropic Claude", "Recharts", "MySQL"],
    url: "https://sentinelwatcher.com",
    featured: true,
  },
  {
    title: "Recurly.js (Contributor)",
    description: "Contributed to the open-source client-side JavaScript library that enables merchants to securely collect and tokenize payment information for the Recurly API. Deployed critical hot fixes for subscription payment success.",
    tech: ["JavaScript", "Payments", "PCI Compliance", "Open Source"],
    url: "https://github.com/recurly/recurly-js",
    featured: false,
  },
  {
    title: "This Website",
    description: "Personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Dark-first design system with animated skill sliders, scroll-triggered animations, and theme toggle.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    url: "https://github.com/isaacvance1027/personal_website",
    featured: false,
  },
  {
    title: "Multi-Threaded C",
    description: "Concurrent programming exercises in C demonstrating thread synchronization, mutexes, and parallel algorithms.",
    tech: ["C", "POSIX Threads", "Concurrency"],
    url: "https://github.com/isaacvance1027/Multi_Threading_Practice/tree/master/PA3",
    featured: false,
  },
]

export const music = {
  intro: "I'm a multi-instrumentalist, singer/songwriter, audio engineer, and recording producer. I play guitar, bass, drums, keys, and various other instruments both casually and professionally.",
  quote: {
    text: "A jack of all trades is a master of none, but oftentimes better than a master of one.",
    author: "Middle English Saying"
  },
  spotifyArtistUrl: "https://open.spotify.com/artist/5GYUtpEjPH0nJR8DvX9mDd",
  soundcloudUrl: "https://soundcloud.com/isaac-vance",
  spotifyEmbedUrl: "https://open.spotify.com/embed/artist/5GYUtpEjPH0nJR8DvX9mDd?utm_source=generator&theme=0",
  bands: [
    {
      name: "Shady Oaks",
      role: "Guitar, Bass & Vocals",
      genre: "Indie Rock / Blues Rock / Garage Rock",
      description: "Shady Oaks is an indie rock band from Denver that blends styles of alternative, blues and garage rock. The five-piece band brings listeners original music that is both dreamy and psychedelic, yet equally rugged.",
      tags: ["Alternative", "Blues Rock", "Garage Rock", "Indie Rock", "Yallternative"],
      spotifyEmbedUrl: "https://open.spotify.com/embed/artist/4HIwTk417WhtcbGLItzwKM?utm_source=generator",
      spotifyArtistUrl: "https://open.spotify.com/artist/4HIwTk417WhtcbGLItzwKM",
      bandcampUrl: "https://shadyoaks.bandcamp.com",
    },
    {
      name: "Mr. Knobs",
      role: "Mixing, Bass & Guitar",
      genre: "Electro Pop / Prog Pop",
      description: "Mr. Knobs is a Denver-based electro pop project blending catchy melodies with progressive arrangements and a touch of dada. Their debut EP features Isaac on mixing, bass, and guitar alongside vocalist Vidushi Goyal.",
      tags: ["Electro Pop", "Prog Pop", "Dada", "Pop"],
      spotifyEmbedUrl: "https://open.spotify.com/embed/artist/6DOQwpUIylSjvcrWLPCi62?utm_source=generator",
      spotifyArtistUrl: "https://open.spotify.com/artist/6DOQwpUIylSjvcrWLPCi62",
      bandcampUrl: "https://mrknobs.bandcamp.com",
    },
  ],
}

export const interests = [
  "AI-Assisted Development",
  "Entrepreneurship",
  "Music Production",
  "Mathematics & Statistics",
  "Sailing & Racing",
  "Chess",
  "Woodworking",
  "Golf & Hiking",
]
