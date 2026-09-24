import {
  FaCode,
  FaFileCode,
  FaLayerGroup,
  FaDesktop,
  FaTerminal,
  FaBolt,
} from "react-icons/fa";

export const topicCategories = [
  {
    slug: "react",
    name: "React",
    description:
      "Component-driven UI development, hooks, and modern state management patterns.",
    icon: FaCode,
    colour: "text-sky-400",
    border: "hover:border-sky-500/50",
    bg: "bg-sky-300",
  },

  {
    slug: "javascript",
    name: "JavaScript",
    description:
      "ES6+ features, async/await mechanics, DOM manipulation, and core language fundamentals.",
    icon: FaFileCode,
    colour: "bg-yellow-400",
    border: "hover:border-yellow-500/50",
    bg: "bg-yellow-300",
  },

  {
    slug: "tailwindcss",
    name: "Tailwind CSS",
    description:
      "Utility-first CSS styling, responsive design patterns, and custom component architecture.",
    icon: FaLayerGroup,
    colour: "text-cyan-400",
    border: "hover:border-cyan-500/50",
    bg: "bg-cyan-400",
  },

  {
    slug: "nextjs",
    name: "Next.js",
    description:
      "Production-ready full-stack applications with App Router, SSR, and Server Actions.",
    icon: FaBolt,
    colour: "text-slate-200",
    border: "hover:border-slate-500/50",
    bg: "bg-slate-400",
  },

  {
    slug: "css",
    name: "CSS",
    description:
      "Modern CSS layouts, Flexbox, Grid, subgrid, container queries, and keyframe animations.",
    icon: FaDesktop,
    colour: "text-blue-400",
    border: "hover:border-blue-500/50",
    bg: "bg-blue-400",
  },

  {
    slug: "webdev",
    name: "Web Dev",
    description:
      "Full-stack software engineering, browser performance, security, and web architecture.",
    icon: FaTerminal,
    colour: "text-emerald-400",
    border: "hover:border-emerald-500/50",
    bg: "bg-emerald-500",
  },
];
