import { AuthorOnlineStatus } from "@/types";
import { cn } from "@/utils";
import { useMemo } from "react";

export default function OnlineIcon({
  onlineStatus,
  className,
}: {
  onlineStatus: AuthorOnlineStatus;
  className?: string;
}) {
  const { color, color2 } = useMemo(() => {
    switch (onlineStatus) {
      case "online":
        return { color: "#49DD81", color2: "#22B4C6" };
      case "offline":
        return { color: "#fa3434", color2: "red" };
      case "busy":
        return { color: "#F163D2", color2: "#FE5A5A" };
      default:
        return { color: "#FE955A", color2: "#F1DA63" };
    }
  }, [onlineStatus]);

  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <defs>
        <linearGradient
          id={`paint0_linear_${onlineStatus}`}
          x1="0.333344"
          y1="0.5"
          x2="7.6829"
          y2="0.517079"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" style={{ stopColor: color }} />
          <stop offset="100%" style={{ stopColor: color2 }} />
        </linearGradient>
      </defs>
      <path
        d="M7.66668 4L6.85334 3.07L6.96668 1.84L5.76334 1.56667L5.13334 0.5L4.00001 0.986667L2.86668 0.5L2.23668 1.56333L1.03334 1.83333L1.14668 3.06667L0.333344 4L1.14668 4.93L1.03334 6.16333L2.23668 6.43667L2.86668 7.5L4.00001 7.01L5.13334 7.49667L5.76334 6.43333L6.96668 6.16L6.85334 4.93L7.66668 4ZM3.12668 5.33667L2.33334 4.53667C2.30244 4.50583 2.27793 4.4692 2.2612 4.42887C2.24447 4.38855 2.23586 4.34532 2.23586 4.30167C2.23586 4.25801 2.24447 4.21478 2.2612 4.17446C2.27793 4.13413 2.30244 4.0975 2.33334 4.06667L2.35668 4.04333C2.48668 3.91333 2.70001 3.91333 2.83001 4.04333L3.36668 4.58333L5.08334 2.86333C5.21334 2.73333 5.42668 2.73333 5.55668 2.86333L5.58001 2.88667C5.71001 3.01667 5.71001 3.22667 5.58001 3.35667L3.60668 5.33667C3.47001 5.46667 3.26001 5.46667 3.12668 5.33667Z"
        fill={`url(#paint0_linear_${onlineStatus})`}
      />
    </svg>
  );
}
