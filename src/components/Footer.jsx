import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-24 text-white flex flex-col justify-center items-center gap-4 text-center mb-16 mx-8">
      <h3 className="font-Poppins text-2xl md:text-4xl text-[#3b82f6] font-bold">
        DevPulse
      </h3>
      <p className="font-RobotoMono tracking-tight text-slate-300 text-xs sm:text-base md:text-lg">
        Home of the latest news in the worrld of tech.
      </p>

      <div className="flex flex-row mt-6 gap-6 mb-4">
        <a
          href="ttps://x.com/Web3Wanderer9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="w-6 h-6 cursor-pointer text-slate-300 hover:text-slate-200 active:text-slate-300" />
        </a>

        <a
          href="https://www.linkedin.com/in/emmanuel-agbai-867aa9364/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin className="w-6 h-6 cursor-pointer text-slate-300 hover:text-slate-200 active:text-slate-300" />
        </a>

        <a
          href="https://github.com/Emmanuelsomto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 cursor-pointer text-slate-300 hover:text-slate-200 active:text-slate-300" />
        </a>
      </div>

      <p className="font-Poppins text-sm md:text-lg text-slate-400 leading-relaxed tracking-wide">
        &copy;{new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}
