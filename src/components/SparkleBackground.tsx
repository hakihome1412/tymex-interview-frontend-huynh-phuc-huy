import { useEffect, useState } from "react";

import { cn } from "@/utils";

type Sparkle = {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  color: string;
  glow: boolean;
};

export default function SparkleBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate random sparkles
    const newSparkles = Array.from({ length: 300 }, (_, i) => {
      // Determine if this will be a larger glowing star (less frequent)
      const isGlowingStar = Math.random() < 0.25;

      // Colors are blue, white, and purple as requested
      const colors = ["star-white", "star-blue", "star-purple"];
      const colorIndex = Math.floor(Math.random() * 3);

      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: isGlowingStar
          ? Math.floor(Math.random() * 3) + 2
          : Math.floor(Math.random() * 2) + 1,
        delay: Math.floor(Math.random() * 10),
        duration: Math.floor(Math.random() * 4) + 3,
        color: colors[colorIndex],
        glow: isGlowingStar,
      };
    });

    setSparkles(newSparkles);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-br from-black via-[#0a0520] to-[#120a30]">
      {/* Very subtle corner gradients */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-[#1a0a40]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#1a0a40]/10 blur-[120px] rounded-full"></div>

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={cn(
            "absolute rounded-full",
            sparkle.color,
            `animate-twinkle-${sparkle.duration}`,
            `animation-delay-${sparkle.delay}`,
            `sparkle-size-${sparkle.size}`
          )}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            boxShadow: sparkle.glow
              ? sparkle.color === "star-white"
                ? "0 0 12px 3px rgba(255, 255, 255, 0.9)"
                : sparkle.color === "star-blue"
                ? "0 0 12px 3px rgba(120, 120, 255, 0.9)"
                : "0 0 12px 3px rgba(180, 120, 255, 0.9)"
              : "none",
          }}
        />
      ))}
    </div>
  );
}
