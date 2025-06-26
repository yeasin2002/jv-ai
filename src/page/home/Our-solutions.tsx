export function OurSolutions() {
  return (
    <section id="features" className="min-h-[400px] bg-[#0f172a] px-10 py-12 md:py-24">
      <h2 className="mb-8 text-center text-[2.074rem] font-bold tracking-tight text-[#60a5fa]">
        Our Solutions
      </h2>
      <div className="mx-auto mb-8 max-w-[1000px] text-center">
        <p>
          Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare
          documentation:
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl border border-t-[3px] border-[rgba(96,165,250,0.2)] border-t-[#10b981] bg-[rgba(30,58,138,0.3)] p-8 shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
          <div className="mb-5 inline-flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[rgba(16,185,129,0.1)] text-[32px] text-[#10b981] transition-all duration-300 hover:scale-110">
            ✓
          </div>
          <h3 className="mt-0 mb-4 text-[1.44rem] font-semibold text-[#60a5fa]">Validify</h3>
          <p>
            Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy,
            integrity, coding, and compliance. Validify automatically identifies documentation gaps,
            ensures coding accuracy, and maintains regulatory compliance.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-t-[3px] border-[rgba(96,165,250,0.2)] border-t-[#f59e0b] bg-[rgba(30,58,138,0.3)] p-8 shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
          <div className="mb-5 inline-flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[rgba(245,158,11,0.1)] text-[32px] text-[#f59e0b] transition-all duration-300 hover:scale-110">
            ⊘
          </div>
          <h3 className="mt-0 mb-4 text-[1.44rem] font-semibold text-[#60a5fa]">Redactify</h3>
          <p>
            Effortlessly redact HIPAA identifiers from text, documents, and structured data with
            Redactify – automating your compliance workflow. Protect sensitive patient information
            while maintaining clinical context.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-t-[3px] border-[rgba(96,165,250,0.2)] border-t-[#3b82f6] bg-[rgba(30,58,138,0.3)] p-8 shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
          <div className="mb-5 inline-flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[rgba(59,130,246,0.1)] text-[32px] text-[#3b82f6] transition-all duration-300 hover:scale-110">
            🗣️
          </div>
          <h3 className="mt-0 mb-4 text-[1.44rem] font-semibold text-[#60a5fa]">TranscriptX</h3>
          <p>
            Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions
            of patient encounters into text, understanding complex medical terminology and clinical
            context for superior accuracy.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-t-[3px] border-[rgba(96,165,250,0.2)] border-t-[#ec4899] bg-[rgba(30,58,138,0.3)] p-8 shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
          <div className="mb-5 inline-flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[rgba(236,72,153,0.1)] text-[32px] text-[#ec4899] transition-all duration-300 hover:scale-110">
            📝
          </div>
          <h3 className="mt-0 mb-4 text-[1.44rem] font-semibold text-[#60a5fa]">Chartwright</h3>
          <p>
            Your best friend with charting – turn any normal text into a high-quality chart,
            delivered exactly how healthcare professionals need it with extensive customization
            options to match your workflow and documentation standards.
          </p>
        </div>
      </div>
    </section>
  );
}
