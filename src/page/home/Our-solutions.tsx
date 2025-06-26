import { Check, Clock, FileText, Mic } from "lucide-react";
import SolutionCard from "./solution-card";

export function OurSolutions() {
  const solutions = [
    {
      icon: <Check className="h-6 w-6 text-white" />,
      title: "Validify",
      description:
        "Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures coding accuracy, and maintains regulatory compliance.",
      borderColor: "#10B981",
      iconBgColor: `rgba(30,58,138,0.3)`,
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Redactify",
      description:
        "Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining clinical context.",
      borderColor: "#F59E0B",
      iconBgColor: `rgba(30,58,138,0.3)`,
    },
    {
      icon: <Mic className="h-6 w-6 text-white" />,
      title: "TranscriptX",
      description:
        "Spend less time documenting. TranscriptX dictates and transcribes clinical conversations in real-time, automatically generating structured documentation that integrates seamlessly with your EMR system.",
      borderColor: "#3B82F6",
      iconBgColor: `rgba(30,58,138,0.3)`,
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Chartwright",
      description:
        "Your best friend with charting – turn any normal text into comprehensive, structured clinical documentation. Chartwright intelligently formats and organizes information for optimal workflow efficiency.",
      borderColor: "#EC4899",
      iconBgColor: `rgba(30,58,138,0.3)`,
    },
  ];

  return (
    <section className="bg-background relative px-6 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-blue-400/3 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-blue-400 md:text-5xl">Our Solutions</h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-300">
            Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare
            documentation:
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              borderColor={solution.borderColor}
              iconBgColor={solution.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
