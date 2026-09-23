import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import {
  FaGlobe,
  FaCode,
  FaFileCode,
  FaLayerGroup,
  FaDesktop,
  FaTerminal,
  FaBolt,
} from "react-icons/fa";

const tagList = [
  { name: "all", label: "All Feeds", icon: FaGlobe },
  { name: "react", label: "React", icon: FaCode },
  { name: "javascript", label: "JavaScript", icon: FaFileCode },
  { name: "tailwindcss", label: "Tailwind", icon: FaLayerGroup },
  { name: "css", label: "CSS", icon: FaDesktop },
  { name: "webdev", label: "Web Dev", icon: FaTerminal },
  { name: "nextjs", label: "Next.js", icon: FaBolt },
];

export default function Home() {
  const localtags = [
    {
      id: 0,
      title: "Mastering React 19 State Management and Custom Hooks",
      tag: "react",
      url: "https://dev.to/t/react",
      user: {
        name: "Alex Dev",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      },
      readable_publish_date: "Sep 22",
      public_reactions_count: 142,
      reading_time_minutes: 5,
    },
    {
      id: 1,
      title: "Tailwind CSS v4 Configuration & Architecture Guidelines",
      tag: "tailwindcss",
      url: "https://dev.to/t/tailwindcss",
      user: {
        name: "Sarah Code",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      },
      readable_publish_date: "Sep 20",
      public_reactions_count: 88,
      reading_time_minutes: 4,
    },
    {
      id: 2,
      title: "Deep Dive into JavaScript Async/Await & Event Loop Mechanics",
      tag: "javascript",
      url: "https://dev.to/t/javascript",
      user: {
        name: "Michael Tech",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      },
      readable_publish_date: "Sep 18",
      public_reactions_count: 210,
      reading_time_minutes: 6,
    },
    {
      id: 3,
      title: "Building Production-Ready Full-Stack Apps with Next.js App Router",
      tag: "nextjs",
      url: "https://dev.to/t/nextjs",
      user: {
        name: "David Frontend",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      },
      readable_publish_date: "Sep 15",
      public_reactions_count: 95,
      reading_time_minutes: 7,
    },
    {
      id: 4,
      title: "Modern CSS Layout Patterns: Container Queries & Subgrid Deep Dive",
      tag: "css",
      url: "https://dev.to/t/css",
      user: {
        name: "Emma Web",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      },
      readable_publish_date: "Sep 14",
      public_reactions_count: 64,
      reading_time_minutes: 3,
    },
    {
      id: 5,
      title: "Full-Stack Web Development Roadmap for Modern Engineers",
      tag: "webdev",
      url: "https://dev.to/t/webdev",
      user: {
        name: "Chris Engineer",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=chris",
      },
      readable_publish_date: "Sep 12",
      public_reactions_count: 175,
      reading_time_minutes: 5,
    },
    {
      id: 6,
      title: "Optimizing React Performance with Memo, useCallback & Virtualization",
      tag: "react",
      url: "https://dev.to/t/react",
      user: {
        name: "Alex Dev",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      },
      readable_publish_date: "Sep 10",
      public_reactions_count: 175,
      reading_time_minutes: 5,
    },
    {
      id: 7,
      title: "Modern JavaScript Features Every Developer Should Master",
      tag: "javascript",
      url: "https://dev.to/t/javascript",
      user: {
        name: "Michael Tech",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      },
      readable_publish_date: "Sep 08",
      public_reactions_count: 240,
      reading_time_minutes: 6,
    },
    {
      id: 8,
      title: "Designing Custom Cyberpunk and Dark UIs with Tailwind CSS",
      tag: "tailwindcss",
      url: "https://dev.to/t/tailwindcss",
      user: {
        name: "Sarah Code",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      },
      readable_publish_date: "Sep 05",
      public_reactions_count: 120,
      reading_time_minutes: 4,
    },
    {
      id: 9,
      title: "Server Actions, Optimistic UI Updates, and Data Mutation in Next.js",
      tag: "nextjs",
      url: "https://dev.to/t/nextjs",
      user: {
        name: "David Frontend",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      },
      readable_publish_date: "Sep 03",
      public_reactions_count: 89,
      reading_time_minutes: 5,
    },
    {
      id: 10,
      title: "Advanced CSS Animations, Micro-Interactions & Hardware Acceleration",
      tag: "css",
      url: "https://dev.to/t/css",
      user: {
        name: "Emma Web",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      },
      readable_publish_date: "Aug 30",
      public_reactions_count: 150,
      reading_time_minutes: 4,
    },
    {
      id: 11,
      title: "Clean Architecture Principles in Large-Scale Frontend Applications",
      tag: "webdev",
      url: "https://dev.to/t/webdev",
      user: {
        name: "Chris Engineer",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=chris",
      },
      readable_publish_date: "Aug 28",
      public_reactions_count: 275,
      reading_time_minutes: 7,
    },
    {
      id: 12,
      title: "Building Custom React Hooks for Persistent Local Storage & Caching",
      tag: "react",
      url: "https://dev.to/t/react",
      user: {
        name: "Alex Dev",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      },
      readable_publish_date: "Aug 25",
      public_reactions_count: 198,
      reading_time_minutes: 5,
    },
    {
      id: 13,
      title: "Understanding JavaScript Closures, Lexical Scope & Memory Leaks",
      tag: "javascript",
      url: "https://dev.to/t/javascript",
      user: {
        name: "Michael Tech",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      },
      readable_publish_date: "Aug 22",
      public_reactions_count: 310,
      reading_time_minutes: 6,
    },
    {
      id: 14,
      title: "Building Responsive Dashboard Layouts with CSS Grid & Tailwind",
      tag: "tailwindcss",
      url: "https://dev.to/t/tailwindcss",
      user: {
        name: "Sarah Code",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      },
      readable_publish_date: "Aug 20",
      public_reactions_count: 165,
      reading_time_minutes: 4,
    },
    {
      id: 15,
      title: "Mastering CSS Flexbox & Grid for Complex Component Layouts",
      tag: "css",
      url: "https://dev.to/t/css",
      user: {
        name: "Emma Web",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      },
      readable_publish_date: "Aug 18",
      public_reactions_count: 140,
      reading_time_minutes: 5,
    },
    {
      id: 16,
      title: "Essential Web Performance Metrics: Understanding Core Web Vitals",
      tag: "webdev",
      url: "https://dev.to/t/webdev",
      user: {
        name: "Chris Engineer",
        profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=chris",
      },
      readable_publish_date: "Aug 15",
      public_reactions_count: 220,
      reading_time_minutes: 6,
    },
  ];

  const [selectedTag, setSelectedTag] = useState("all");

  const filteredArticles =
    selectedTag === "all"
      ? localtags
      : localtags.filter((article) => article.tag === selectedTag);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-34 mb-16">
      <header className="text-center text-white max-w-2xl mx-auto mb-10 flex flex-col items-center gap-3">
        <h1 className="text-2xl md:text-4xl font-bold font-Poppins text-blue-500">
          Discover top stories from tech writers.
        </h1>
        <p className="tracking-wide font-RobotoMono text-xs md:text-sm text-slate-300">
          Stay up to date with modern web development, engineering insights, and
          daily developer news.
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-2.5 my-8">
        {tagList.map((tag) => {
          const Icon = tag.icon;
          const isSelected = selectedTag === tag.name;
          return (
            <button
              key={tag.name}
              onClick={() => setSelectedTag(tag.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs cursor-pointer font-medium mb-8 transition-all ${
                isSelected
                  ? "bg-cyan-500/20 text-blue-300 border border-blue-500/50"
                  : "bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <Icon className={isSelected ? "text-blue-400" : "text-slate-500"} />
              <span>{tag.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between items-center text-slate-400 border-b border-slate-800/80 text-xs md:text-sm font-RobotoMono pt-4 pb-3 mb-8">
        <span className="capitalize text-slate-300">
          Showing #{selectedTag} posts ({filteredArticles.length})
        </span>
        <span className="flex items-center gap-2 text-blue-400 text-xs">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span>Live Feed</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </main>
  );
}