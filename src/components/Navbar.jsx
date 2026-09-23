import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="text-white flex justify-between items-center gap-6 p-4 px-6 mt-1 mx-2 fixed right-0 left-0 z-50 top-2 border border-slate-800 bg-[#0a0f1d] backdrop-blur-md rounded-xl">
      <Link to="/" className="text-2xl font-bold text-[#3b82f6] md:text-3xl">
        DevPulse
      </Link>
      <div className="hidden md:flex gap-12 font-Poppins font-medium text-base md:text-lg">
        <Link to="/topics" className="hover:text-blue-400">
          Topics
        </Link>
        <Link to="/bookmarks" className="hover:text-blue-400">
          Bookmarks
        </Link>
        <Link to="/latest" className="hover:text-blue-400">
          Latest
        </Link>
      </div>

      <button onClick={toggleNavbar} className="flex md:hidden cursor-pointer">
        {isOpen ? (
          <FaTimes className="w-6 h-6 text-slate-400" />
        ) : (
          <FaBars className="w-6 h-6 text-slate-400" />
        )}
      </button>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 text-left right-0 left-0 top-20 z-50 absolute px-6 py-6 bg-[#0a0f1d]">
          <Link
            to="/topics"
            onClick={toggleNavbar}
            className="w-full font-Poppins text-slate-400 text-lg font-medium hover:text-blue-500 active:text-blue-600 border-b border-cyan-900 pb-2"
          >
            Topics
          </Link>
          <Link
            to="/bookmarks"
            onClick={toggleNavbar}
            className="w-full font-Poppins text-slate-400 text-lg font-medium hover:text-blue-500 active:text-blue-600 border-b border-cyan-900 pb-2"
          >
            Bookmarks
          </Link>
          <Link
            to="/latest"
            onClick={toggleNavbar}
            className="w-full font-Poppins text-slate-400 text-lg font-medium hover:text-blue-500 active:text-blue-600 border-b border-cyan-900 pb-2"
          >
            Latest
          </Link>
        </div>
      )}
    </nav>
  );
}
