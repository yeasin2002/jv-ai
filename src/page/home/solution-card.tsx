import { cn } from "@/utils";
import type { ReactNode } from "react";

interface SolutionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  borderColor: string;
  iconBgColor: string;
}

export default function SolutionCard({
  icon,
  title,
  description,
  // borderColor,
  // iconBgColor,
}: SolutionCardProps) {
  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-t-[3px] border-[rgba(96,165,250,0.2)] border-t-[#10b981] bg-[rgba(30,58,138,0.3)] p-8 shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl",
        )}
      >
        <div className="mb-5 inline-flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[rgba(16,185,129,0.1)] text-[32px] text-[#10b981] transition-all duration-300 hover:scale-110">
          {icon}
        </div>
        <h3 className="mt-0 mb-4 text-[1.44rem] font-semibold text-[#60a5fa]">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
