import css1 from "../assets/css-1.jpg";
import css2 from "../assets/css-2.jpg";
import css3 from "../assets/css-3.jpg";
import js1 from "../assets/js-1.jpg";
import js2 from "../assets/js-2.jpg";
import nextjs1 from "../assets/nextjs-1.jpg";
import nextjs2 from "../assets/nextjs-2.jpg";
import nextjs3 from "../assets/nextjs-3.jpg";
import react1 from "../assets/react-1.jpg";
import react2 from "../assets/react-2.jpg";
import react3 from "../assets/react-3.jpg";
import tailwindcss1 from "../assets/tailwind-1.jpg";
import tailwindcss2 from "../assets/tailwind-2.jpg";
import tailwindcss3 from "../assets/tailwind-3.jpg";
import webdev1 from "../assets/webdev-1.jpg";
import webdev2 from "../assets/webdev-2.jpg";
import webdev3 from "../assets/webdev-3.jpg";

export default function ArticleCard({ article, index = 0 }) {
  const imagePools = {
    css: [css1, css2, css3],
    javascript: [js1, js2],
    nextjs: [nextjs1, nextjs2, nextjs3],
    react: [react1, react2, react3],
    tailwindcss: [tailwindcss1, tailwindcss2, tailwindcss3],
    webdev: [webdev1, webdev2, webdev3],
  };

  const allbanners = [
    css1,
    css2,
    css3,
    js1,
    js2,
    nextjs1,
    nextjs2,
    nextjs3,
    react1,
    react2,
    react3,
    tailwindcss1,
    tailwindcss2,
    tailwindcss3,
    webdev1,
    webdev2,
    webdev3,
  ];

  const primaryTag =
    article?.tag?.toLowerCase() ||
    article?.tag_list?.[0]?.toLowerCase() ||
    "webdev";

  const targetPool = imagePools[primaryTag] || allbanners;
  const imageIndex = index % targetPool.length;
  const cardBannerUrl = targetPool[imageIndex] || css1;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-slate-700 transition-all">
      <a href={article?.url || "#"} target="_blank" rel="noopener noreferrer">
        <img
          src={cardBannerUrl}
          alt={article?.title || "Article Banner"}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
      </a>

      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-800 border border-slate-700 shrink-0">
            <img
              src={
                article?.user?.profile_image ||
                "https://api.dicebear.com/7.x/avataaars/svg?seed=dev"
              }
              alt={article?.user?.name || "Author"}
              className="w-full h-full object-cover mb-6"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-200">
              {article?.user?.name || "Anonymous Dev"}
            </span>
            <span className="text-xs text-slate-400">
              {article?.readable_publish_date || "Recently"}
            </span>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-slate-100 hover:text-blue-400 active:text-blue-500 transition-colors line-clamp-2">
          <a
            href={article?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {article?.title || "Untitled Post"}
          </a>
        </h2>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60 font-RobotoMono">
          <span>❤️ {article?.public_reactions_count ?? 0}</span>
          <span>{article?.reading_time_minutes ?? 1} mins read</span>
        </div>
      </div>
    </div>
  );
}
