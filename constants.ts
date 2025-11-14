import { Project, ProjectCategory, Kanji } from "./types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project Cypherstream",
    description:
      "Real-time data visualization dashboard for tracking network anomalies using D3.js and WebSocket APIs.",
    category: ProjectCategory.FRONTEND,
    imageUrl: "https://picsum.photos/seed/cypher/600/400",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "D3.js", "WebSocket", "TypeScript"],
  },
  {
    id: 2,
    title: "Neural Matrix API",
    description:
      "A RESTful API for a machine learning model that predicts user behavior, built with Node.js and Express.",
    category: ProjectCategory.BACKEND,
    imageUrl: "https://picsum.photos/seed/neural/600/400",
    repoUrl: "#",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    id: 3,
    title: "Ghostrunner Commerce",
    description:
      "A full-stack e-commerce platform for futuristic apparel, featuring a Stripe integration and a custom CMS.",
    category: ProjectCategory.FULLSTACK,
    imageUrl: "https://picsum.photos/seed/ghost/600/400",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: 4,
    title: "Data Haven",
    description:
      "Secure, encrypted cloud storage solution with a focus on privacy. Frontend built with Vue.js.",
    category: ProjectCategory.FRONTEND,
    imageUrl: "https://picsum.photos/seed/haven/600/400",
    repoUrl: "#",
    tags: ["Vue.js", "Pinia", "Encryption"],
  },
  {
    id: 5,
    title: "Code Katana",
    description:
      "An online IDE for competitive programming with live code execution via a sandboxed Docker environment.",
    category: ProjectCategory.FULLSTACK,
    imageUrl: "https://picsum.photos/seed/katana/600/400",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["Next.js", "Docker", "Redis", "Python"],
  },
  {
    id: 6,
    title: "Ronin Auth Service",
    description:
      "A microservice for handling authentication and authorization across multiple applications. Written in Go.",
    category: ProjectCategory.BACKEND,
    imageUrl: "https://picsum.photos/seed/ronin/600/400",
    repoUrl: "#",
    tags: ["Go", "gRPC", "OAuth2"],
  },
];

export const KANJI_CAPTCHA_SET: Kanji[] = [
  { char: "電", romaji: "den" },
  { char: "脳", romaji: "nou" },
  { char: "侍", romaji: "samurai" },
  { char: "力", romaji: "chikara" },
  { char: "愛", romaji: "ai" },
  { char: "光", romaji: "hikari" },
  { char: "闇", romaji: "yami" },
  { char: "夢", romaji: "yume" },
  { char: "竜", romaji: "ryuu" },
  { char: "未来", romaji: "mirai" },
];
