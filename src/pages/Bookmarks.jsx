import { bookmarksData } from "../data/BookmarksData";

export default function Bookmarks() {
  return (
    <div className="text-white mt-34 grid grid-cols-1 md:grid-cols-3 mx-6 gap-4">
      {bookmarksData.map((data) => (
        <div
          key={data.id}
          className="border border-slate-700 bg-slate-800 px-6 py-8 rounded-md"
        >
          <span className="font-Poppins text-xl md:text-2xl text-slate-300 font-black">
            {data.category}
          </span>
          <h3 className="mt-4 mb-4 font-RobotoMono font-semibold text-blue-500 text-base tracking-tight">
            {data.title}
          </h3>
          <p className="font-medium leading-relaxed text-sm md:text-lg mb-4">
            {data.description}
          </p>
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-xs md:text-sm text-blue-500 hover:underline hover:text-blue-400 active:text-blue-400"
          >
            Visit Resources &rarr;
          </a>
        </div>
      ))}
    </div>
  );
}
