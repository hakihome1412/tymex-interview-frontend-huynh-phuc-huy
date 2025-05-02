import Header from "./Header";
import Footer from "./Footer";
import SparkleBackground from "../SparkleBackground";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  // Auto scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#00000033] overflow-hidden">
      <SparkleBackground />

      <Header />

      <div className="min-h-[calc(100vh-449px)]">{children}</div>

      <Footer />
    </div>
  );
}
