
import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Loading({ size = "md", className }: LoadingProps) {
  return (
    <div className={cn(
      "flex justify-center items-center",
      className
    )}>
      <div className={cn(
        "animate-spin rounded-full border-t-transparent",
        size === "sm" && "w-6 h-6 border-2",
        size === "md" && "w-8 h-8 border-2",
        size === "lg" && "w-12 h-12 border-3",
        "border-umami-gold"
      )}></div>
    </div>
  );
}
