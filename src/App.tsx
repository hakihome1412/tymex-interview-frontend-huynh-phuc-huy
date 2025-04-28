import { Route, Routes } from "react-router";

import AboutUs from "./pages/AboutUs";
import OurTeams from "./pages/OurTeams";
import Marketplace from "./pages/Marketplace";
import Roadmap from "./pages/Roadmap";
import Whitepaper from "./pages/Whitepaper";
import SparkleBackground from "./components/SparkleBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-[#00000033] overflow-x-hidden">
      <SparkleBackground />

      <Routes>
        <Route index element={<Marketplace />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="our-teams" element={<OurTeams />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="whitepaper" element={<Whitepaper />} />
      </Routes>
    </div>
  );
}
