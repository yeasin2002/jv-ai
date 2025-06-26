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
  borderColor,
  iconBgColor,
}: SolutionCardProps) {
  return (
    <div
      className={`relative rounded-2xl border-2 bg-slate-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:transform hover:shadow-2xl`}
      style={{ borderColor }}
    >
      {/* Icon */}
      <div className="mb-6">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-semibold text-blue-400">{title}</h3>

      {/* Description */}
      <p className="text-base leading-relaxed text-gray-300">{description}</p>
    </div>
  );
}
