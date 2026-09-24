import { useState } from "react";
import { topicCategories } from "../data/TopicData";
import ArticleCard from "../components/ArticleCard";
import { FaHashtag, FaSearch } from "react-icons/fa";
import { localtags } from "../data/LocalTags";

export default function Topics() {
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = topicCategories.filter(
    (topic) =>
      topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const articlesToDisplay =
    selectedTopic === "all"
      ? localtags
      : localtags.filter((article) => article.tag === selectedTopic);

  const getArticleCount = (slug) =>
    localtags.filter((article) => article.tag === slug).length;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 mb-16">
      <header className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-RobotoMono mb-2">
          <FaHashtag />
          <span>Explore Categories</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-Poppins text-slate-100">
          Topics & Tech Stacks
        </h1>
        <p className="font-RobotoMono text-xs md:text-sm text-slate-400">
          Select a topic to dive into curated articles and tutorials.
        </p>

        <div className="relative w-full max-w-md mt-4">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-RobotoMono"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {filteredCategories.map((topic) => {
          const Icon = topic.icon;
          const isSelected = selectedTopic === topic.slug;
          const count = getArticleCount(topic.slug);

          return (
            <div
              key={topic.slug}
              onClick={() => setSelectedTopic(isSelected ? "all" : topic.slug)}
              className={`p-5 rounded-2xl border bg-slate-900/80 cursor-pointer transition-all flex flex-col justify-between gap-4 ${
                topic.border
              } ${
                isSelected
                  ? "border-blue-500 bg-slate-800/80 shadow-lg shadow-blue-500/10"
                  : "border-slate-800/80 hover:bg-slate-800/40"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl ${topic.bg} ${topic.color}`}>
                  <Icon className="text-xs md:text-lg" />
                </div>
                <span className="text-xs font-RobotoMono text-slate-400 bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700/50">
                  {count} {count === 1 ? "article" : "articles"}
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-100 font-Poppins mb-1">
                  {topic.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="text-xs font-medium font-RobotoMono text-blue-400 flex items-center gap-1">
                <span>
                  {isSelected ? "Showing Articles ↓" : "View Articles →"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-slate-800/80 pt-10">
        <div className="flex justify-between items-center text-slate-400 text-xs md:text-sm font-RobotoMono mb-8">
          <span className="capitalize text-slate-300">
            {selectedTopic === "all"
              ? "All Articles"
              : `#${selectedTopic} Articles`}{" "}
            ({articlesToDisplay.length})
          </span>
          {selectedTopic !== "all" && (
            <button
              onClick={() => setSelectedTopic("all")}
              className="text-xs text-blue-400 hover:underline"
            >
              Clear Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesToDisplay.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
