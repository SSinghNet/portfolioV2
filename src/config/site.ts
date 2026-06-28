export interface WorkEntry {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  chips: string[];
}

export interface ProjectEntry {
  title: string;
  bullets: string[];
  chips: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface MixEntry {
  title: string;
  metadata: string;
  platform: string;
  platformUrl: string;
}

export interface TrackEntry {
  title: string;
  bpm: number;
  key: string;
  duration: string;
}

export interface GearItem {
  name: string;
  type: string;
}

export interface LinkEntry {
  platform: string;
  handle: string;
  url: string;
}

export const siteConfig = {
  name: "Sumeet Singh",
  initials: "SMT",
  description: "Software Engineer",
  tagline: "Software engineer specializing in scalable systems, cloud infrastructure, and agentic AI.",
  links: {
    github: "https://github.com/SSinghNet",
    email: "sumeet605@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumeet-singh-net",
  },

  work: [
    {
      role: "Agentic Engineer",
      company: "Noom",
      dates: "June 2026 – Present",
      bullets: [
        "Building the future of agentic systems.",
      ],
      chips: ["Python", "AWS", "CloudFormation", "Docker", "LLMs", "Agentic AI"],
    },
    {
      role: "Software Engineer",
      company: "Rutgers University",
      dates: "August 2023 – Present",
      bullets: [
        "Enhanced myCommunity, a large-scale WordPress platform serving 50,000+ students and 1,000+ organizations",
        "Led new feature development, infrastructure updates, and performance improvements across PHP, WordPress, and BuddyBoss",
        "Automated event workflows with custom PHP plugins and optimized queries, improving site performance by 50%",
        "Designed and documented internal REST APIs with OpenAPI 3.0 and Swagger UI",
        "Built real-time data sync between the Club Database and myCommunity, automatically syncing 1,000+ club records",
        "Refactored themes with JS and CSS — added dark mode, improved accessibility, and responsive design",
        "Developed React demos and Flutter prototypes to validate new features with stakeholders",
      ],
      chips: ["PHP", "WordPress", "JavaScript", "REST APIs", "OpenAPI", "MySQL", "Firestore", "React", "Flutter"],
    },
    {
      role: "Software Engineer Intern",
      company: "Universal Selfcare LLC",
      dates: "September 2025 – December 2025",
      bullets: [
        "Built secure and scalable backend features in Go for a healthcare SaaS platform",
        "Refactored backend into a consistent controller-service-repository architecture, reducing duplication",
        "Configured GCP IAM for role-based access control across services",
        "Deployed PostgreSQL Cloud SQL for compliant handling of sensitive healthcare data",
      ],
      chips: ["Go", "GCP", "IAM", "PostgreSQL", "Cloud SQL"],
    },
  ] as WorkEntry[],

  projects: [
    {
      title: "AI Playlist Generator",
      bullets: [
        "Java Spring Boot microservices backend with Spring AI and Gemini 2.5 for prompt interpretation",
        "Integrates with Spotify Web API for metadata retrieval, authentication, and playlist export",
        "Spring Cloud Eureka for service discovery; services containerized with Docker on AWS ECS Fargate",
        "AWS ECR for container storage, ALB for routing, API Gateway for external traffic",
        "Next.js frontend hosted on Vercel",
      ],
      chips: ["Java", "Spring Boot", "Spring AI", "Gemini 2.5", "Microservices", "Spotify API", "Docker", "AWS ECS", "Next.js"],
      image: "images/aiplaylist.png",
      github: "https://github.com/SSinghNet/ai-playlist",
      demo: "https://aiplaylist.ssingh.net/",
    },
    {
      title: "Whisk",
      bullets: [
        "Cross-platform cooking app with React Native and Expo featuring barcode scanning for pantry management",
        "Groq LLM integration generates AI-powered recipe suggestions from the user's current pantry",
        "Node.js/Express REST API with Prisma ORM on Supabase Postgres",
        "Jest unit and integration tests for API logic and data layer",
      ],
      chips: ["TypeScript", "React Native", "Expo", "Node.js", "Express.js", "Prisma", "Supabase", "Jest", "Groq"],
      github: "https://github.com/SSinghNet/Whisk",
    },
    {
      title: "SSingh.Net Music",
      bullets: [
        "Dynamic music blog with Node.js/Express backend and React/Tailwind CSS frontend",
        "Custom RESTful API for managing albums, artists, tags, and related metadata",
        "MySQL database with AWS S3 integration for image storage and retrieval",
      ],
      chips: ["JavaScript", "TypeScript", "React", "Tailwind", "Express.js", "Node.js", "MySQL", "AWS S3"],
      image: "images/SSinghNetMusic.png",
      github: "https://github.com/SSinghNet/music.ssingh.net",
      demo: "https://music.ssingh.net/",
    },
    {
      title: "CLox",
      bullets: [
        "Compiler and bytecode VM written in C for the Lox language",
        "Single-pass compilation to custom bytecode interpreted by the VM",
        "Custom garbage collector for memory management",
        "Architecture similar to Python, Ruby, and Lua implementations",
      ],
      chips: ["C", "Lox"],
      github: "https://github.com/SSinghNet/clox",
    },
    {
      title: "LinkBase",
      bullets: [
        "Linktree-style landing page builder with customizable links and themes built in PHP/Laravel",
        "Secure auth with login/signup workflows and user-specific routing",
        "Full analytics system tracking page views, per-link clicks, and user agent data",
        "Analytics processing handled asynchronously via Laravel queues to reduce request latency",
      ],
      chips: ["PHP", "Laravel", "Blade", "Tailwind CSS"],
      github: "https://github.com/SSinghNet/Linkbase",
    },
    {
      title: "JLox",
      bullets: [
        "Tree-walk interpreter in Java for the Lox language using the JVM as backbone",
        "Scanner → parser → resolver → interpreter pipeline",
        "Implements variables, functions, closures, classes, and inheritance",
      ],
      chips: ["Java", "Lox"],
      github: "https://github.com/SSinghNet/jlox",
    },
    /* {
      title: "SSingh.Net Music Admin Portal",
      bullets: [
        "Admin portal for managing the SSingh.Net Music blog content",
        "Built with TypeScript, React, and Tailwind CSS",
      ],
      chips: ["TypeScript", "React", "Tailwind"],
      image: "images/musicadmin.png",
      github: "https://github.com/SSinghNet/musicadminmodern",
    }, */
    {
      title: "S.SSingh.Net",
      bullets: [
        "URL shortener built with PHP and MySQL",
      ],
      chips: ["PHP", "MySQL", "CSS"],
      image: "images/SSSinghNet.png",
      github: "https://github.com/SSinghNet/S.SSingh.Net",
      demo: "https://s.ssingh.net/",
    },
  ] as ProjectEntry[],

  certificates: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      provider: "Amazon Web Services",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/a230c8845f2a474686494db23896d2ed",
      issueDate: "Aug 2025",
      expiryDate: "Aug 2028",
      image: "images/aws-certified-solutions-architect-associate.png",
    },
    {
      name: "Docker Foundations Professional Certificate",
      provider: "Docker, Inc",
      link: "https://www.linkedin.com/learning/certificates/bd1e051ee88f47bbb0892afa641eb9922376a46fed69813eb8c38cea0eb3879d",
      issueDate: "Jan 2026",
    },
  ],

  education: [
    {
      institution: "Rutgers University – New Brunswick",
      location: "New Brunswick, NJ",
      degree: "B.S. Computer Science · Mathematics",
      dates: "September 2023 – May 2026",
    },
  ],

  skills: {
    languages: ["Java", "PHP", "Go", "TypeScript", "JavaScript", "C", "Python", "SQL"],
    frameworks: ["WordPress", "Spring Boot", "React", "Next.js", "Node.js", "Express.js", "Flutter", "Tailwind"],
    dev: ["AWS", "GCP", "Docker", "MySQL", "MariaDB", "PostgreSQL", "Firebase", "Git"],
  },

  blogPosts: [
    {
      date: "Jan 2026",
      title: "Building a Bytecode VM in C",
      excerpt: "A walkthrough of CLox — single-pass compilation, garbage collection, and why it's faster than tree-walking.",
      url: "#",
    },
    {
      date: "Dec 2025",
      title: "Microservices on AWS ECS Fargate",
      excerpt: "How I deployed a Spring Boot microservice cluster with ECR, ECS, and an Application Load Balancer.",
      url: "#",
    },
    {
      date: "Oct 2025",
      title: "AI-Powered Playlists with Spring AI and Gemini",
      excerpt: "Integrating Google's Gemini 2.5 model into a Spring Boot service for natural language playlist generation.",
      url: "#",
    },
  ],

  musicConfig: {
    bio: "DJ and music producer based in New Jersey. Blending deep house, techno, and open format sets.",
    mixes: [
      {
        title: "Late Night Session Vol. 1",
        metadata: "2h 15m · Mixed Live",
        platform: "SoundCloud",
        platformUrl: "#",
      },
      {
        title: "Deep Frequencies EP",
        metadata: "58m · Studio Mix",
        platform: "Mixcloud",
        platformUrl: "#",
      },
      {
        title: "Open Format Vol. 3",
        metadata: "1h 42m · Live Set",
        platform: "SoundCloud",
        platformUrl: "#",
      },
    ] as MixEntry[],
    productions: [
      { title: "Frequency Drift", bpm: 128, key: "Am", duration: "4:22" },
      { title: "Static Sky", bpm: 140, key: "Fm", duration: "5:01" },
      { title: "Neon Undertow", bpm: 124, key: "Cm", duration: "3:58" },
      { title: "Phase Shift", bpm: 132, key: "Gm", duration: "4:45" },
    ] as TrackEntry[],
    gear: {
      hardware: [
        { name: "Pioneer CDJ-3000", type: "Media Player" },
        { name: "Pioneer DJM-900NXS2", type: "Mixer" },
        { name: "Roland TR-8S", type: "Drum Machine" },
      ] as GearItem[],
      software: [
        { name: "Ableton Live 12", type: "DAW" },
        { name: "Serato DJ Pro", type: "DJ Software" },
        { name: "Native Instruments Kontakt", type: "Sampler" },
      ] as GearItem[],
    },
    links: [
      { platform: "SoundCloud", handle: "@smt", url: "#" },
      { platform: "Instagram", handle: "@smt.music", url: "#" },
      { platform: "YouTube", handle: "SMT Music", url: "#" },
      { platform: "Mixcloud", handle: "@smt", url: "#" },
    ] as LinkEntry[],
  },
};
