import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { localtags } from "../data/LocalTags";

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
  const [selectedTag, setSelectedTag] = useState("all");
  const filteredArticles =
    selectedTag === "all"
      ? localtags
      : localtags.filter((article) => article.tag === selectedTag);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 mb-16">
      <header className="text-center text-white max-w-2xl mx-auto mb-10 flex flex-col items-center gap-3">
        <h1 className="text-2xl md:text-4xl font-bold font-Poppins text-blue-500">
          Discover top stories from tech writers.
        </h1>
        <p className="tracking-wide font-RobotoMono text-xs md:text-sm text-slate-300">
          Stay up to date with modern web development, engineering insights, and
          daily developer news.
        </p>
      </header>

      <div className="flex flex-wrap justify-center items-center gap-2.5 my-8">
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