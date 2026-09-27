import { latestData } from "../data/LatestData";

export default function Latest() {
  return (
    <div className="text-white mt-34 grid grid-cols-1 md:grid-cols-3 mx-6 gap-3">
      {latestData.map((data) => (
        <div key={data.id} className="border border-slate-700 bg-slate-900 mb-4 px-6 p-10 rounded-md">
          <span className="font-bold text-xl md:text-2xl font-Poppins text-blue-400">{data.tag}</span>
          <h3 className="mt-4 mb-6 font-medium text-slate-300">{data.title}</h3>
          <p className="font-RobotoMono tracking-tight mb-4 text-sm">{data.summary}</p>
          <p className="text-slate-300 font-normal font-mono text-sm md:text-lg">{data.date}</p>
        </div>
      ))}
    </div>
  );
}
