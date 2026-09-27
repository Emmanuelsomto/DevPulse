import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import Topics from "./pages/Topics";
import Bookmarks from "./pages/Bookmarks";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/latest" element={<Latest />} />
      </Routes>
      <Footer />

      <Analytics />
    </div>
  );
}

export default App;
