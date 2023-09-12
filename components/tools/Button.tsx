import React from "react";
import Spinner from "./Spinner";
type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  loading?: boolean;
  variant?: "fill" | "outline";
  color?: "accent" | "white" | "accent2" | "accent3" | "accent4";
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl";
};
const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  type = "button",
  loading = false,
  variant = "fill",
  color = "accent",
  textSize = "md",
}) => {
  const FillColors = {
    accent:
      "border border-transparent bg-accent-600 hover:bg-accent-700 focus:ring-accent-500 focus:ring-offset-accent-200 text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
    white: "border border-transparent bg-white text-accent-300",
    accent2: "border border-transparent text-black-1 bg-accent-300",
    accent3: "border border-transparent bg-black-1 text-accent-300",
    accent4: "border border-transparent bg-black-1 text-white",
  };

  const OutlineColors = {
    accent: "border border-accent-500 text-accent-500",
    white: "border border-white text-white",
    accent2: "border border-black-1 text-black-1",
    accent3: "border border-black-1 text-black-1",
    accent4: "border border-black-1 text-black-1",
  };

  const Sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  const variantClass =
    variant === "fill" ? FillColors[color] : OutlineColors[color];
  const textSizeClass = Sizes[textSize];

  return (
    <button
      className={`${className} ${variantClass} ${textSizeClass} flex gap-2 py-2 px-4 font-bold rounded-md justify-center items-center transition ease-in duration-200`}
      onClick={onClick}
      type={type}
      disabled={loading}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
