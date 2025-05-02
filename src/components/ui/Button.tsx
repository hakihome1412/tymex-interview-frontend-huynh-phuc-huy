import { cn } from "@/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType?: "primary" | "secondary";
  size?: "medium" | "large";
  isFit?: boolean;
  isHighlight?: boolean;
}

export default function Button({
  children,
  buttonType = "primary",
  size = "medium",
  isFit = false,
  isHighlight = false,
  ...props
}: ButtonProps) {
  const { className, ...restProps } = props;

  return (
    <button
      className={cn(
        "cursor-pointer py-1 px-4 rounded-sm flex justify-center items-center font-semibold text-white transition duration-300",
        buttonType === "secondary" &&
          "bg-[#FBC625] text-black hover:bg-[#FBC625]",
        buttonType === "primary" &&
          "bg-gradient-to-r from-[#da458f66] to-[#da34dd66] hover:from-[#DA458F] hover:to-[#DA34DD]",
        size === "medium" && "h-[44px]",
        size === "large" && "h-[70px]",
        isFit && "w-fit",
        buttonType === "primary" && isHighlight && "bg-gradient-to-r from-[#DA458F] to-[#DA34DD] hover:from-[#da458f66] hover:to-[#da34dd66]",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
