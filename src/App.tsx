import { Route, Routes } from "react-router";

import AboutUs from "./pages/AboutUs";
import OurTeams from "./pages/OurTeams";
import Marketplace from "./pages/Marketplace";
import Roadmap from "./pages/Roadmap";
import Whitepaper from "./pages/Whitepaper";
import News from "./pages/News";
import FAQs from "./pages/FAQs";
import Community from "./pages/Community";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Security from "./pages/Security";
import CommonLayout from "./components/layouts/CommonLayout";

export default function App() {
  return (
    <CommonLayout>
      <Routes>
        <Route index element={<Marketplace />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="our-teams" element={<OurTeams />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="whitepaper" element={<Whitepaper />} />
        <Route path="news" element={<News />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="community" element={<Community />} />
        <Route path="legal" element={<Legal />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="security" element={<Security />} />
      </Routes>
    </CommonLayout>
  );
}
