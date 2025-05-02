import { ProductTheme } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getBackgroundColorByTheme(theme: ProductTheme) {
  switch (theme) {
    case "Dark":
      return "bg-gradient-to-r from-[#DD5AFE] to-[#6366F1]";
    case "Light":
      return "bg-gradient-to-r from-[#49DD81] to-[#22B4C6]";
    case "Colorful":
      return "bg-gradient-to-r from-[#FE5A5A] to-[#F163D2]";
    case "Halloween":
      return "bg-gradient-to-r from-[#FE955A] to-[#F1DA63]";
    default:
      return "bg-transparent";
  }
}
