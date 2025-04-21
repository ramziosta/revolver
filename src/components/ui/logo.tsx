
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
}

export function Logo({ size = "md", asLink = true, className, ...props }: LogoProps) {
  const logoContent = (
    <div 
      className={cn(
        "font-playfair tracking-wider text-umami-light flex flex-col items-center justify-center", 
        size === "sm" && "text-xl",
        size === "md" && "text-2xl",
        size === "lg" && "text-4xl",
        className
      )} 
      {...props}
    >
      <div className="flex items-center">
        <img src="/logo.svg" alt="Revolver by Umami" className={cn(
          "mr-2",
          size === "sm" && "w-6 h-6",
          size === "md" && "w-8 h-8",
          size === "lg" && "w-10 h-10",
        )} />
        <span className="font-bold">REVOLVER</span>
      </div>
      <div className="text-sm tracking-[0.3em] mt-0.5">BY UMAMI</div>
    </div>
  );

  if (asLink) {
    return <Link to="/">{logoContent}</Link>;
  }

  return logoContent;
}
