import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  fullWidth?: boolean;
}

const NeonButton = ({
  children,
  className,
  variant = "primary",
  fullWidth = false,
  ...props
}: NeonButtonProps) => {
  const baseStyles =
    "relative px-8 py-4 font-bold uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";
  
  const variants = {
    primary:
      "bg-accent text-black hover:bg-white hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]",
    outline:
      "bg-transparent border border-accent text-accent hover:bg-accent hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]",
    ghost: "bg-transparent text-white hover:text-accent",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], fullWidth && "w-full", className)}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 transition-transform duration-700 skew-x-12" />
      )}
    </button>
  );
};

export default NeonButton;
