interface Props extends React.ComponentProps<"div"> {}

export const Technology = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <section id="technology" className="min-h-[400px] bg-[#0f172a] px-10 py-12 md:py-24">
        <h2 className="mb-8 text-center text-[2.074rem] font-bold tracking-tight text-[#60a5fa]">
          Our Technology
        </h2>
        <div className="mx-auto max-w-[1000px]">
          <p className="mb-4">
            At Clin Technologies, we've built our platform on groundbreaking AI technology
            specifically designed for healthcare. Our solutions use the latest advancements in
            natural language processing and machine learning to create a system that truly
            understands the complexities of medical documentation.
          </p>
        </div>
        <div className="mx-auto mt-[50px] grid w-full max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-xl border border-[rgba(96,165,250,0.2)] bg-[rgba(30,58,138,0.3)] p-[35px] shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
            <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[rgba(59,130,246,0.1)] transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]">
              <div className="text-[30px] text-[#60a5fa]">🧠</div>
            </div>
            <h3 className="mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4 text-[1.728rem] font-semibold text-[#60a5fa]">
              Sophisticated Natural Language Processing
            </h3>
            <p>
              At the core of our platform is an advanced foundation model. This enables our system
              to grasp the nuances of clinical conversations — understanding context, recognizing
              intent, and accurately interpreting medical terminology. This deep comprehension
              allows the AI to generate clear, concise, and contextually relevant medical notes
              automatically.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-[rgba(96,165,250,0.2)] bg-[rgba(30,58,138,0.3)] p-[35px] shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
            <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[rgba(59,130,246,0.1)] transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]">
              <div className="text-[30px] text-[#60a5fa]">🔄</div>
            </div>
            <h3 className="mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4 text-[1.728rem] font-semibold text-[#60a5fa]">
              Learning Mode &amp; Personalization
            </h3>
            <p>
              Our AI doesn't rely on generic templates. We initiate the process by learning directly
              from your specific cases and workflows. The system intelligently refines its
              understanding and output based on your ongoing feedback. With each processed case, its
              accuracy and alignment with your unique clinical documentation needs become
              increasingly precise, ensuring a truly personalized solution.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-[rgba(96,165,250,0.2)] bg-[rgba(30,58,138,0.3)] p-[35px] shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
            <div className="flex flex-wrap gap-[15px]">
              <div className="mb-5 inline-flex items-center rounded-[25px] border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.1)] px-[15px] py-[6px] transition-all duration-300 hover:bg-[rgba(16,185,129,0.2)]">
                <span className="mr-[10px] text-[18px] text-[#10b981]">🔒</span>
                <span className="text-[0.833rem] font-semibold tracking-[0.05em] text-white">
                  HIPAA COMPLIANT
                </span>
              </div>
              <div className="mb-5 inline-flex items-center rounded-[25px] border border-[rgba(79,70,229,0.3)] bg-[rgba(79,70,229,0.1)] px-[15px] py-[6px] transition-all duration-300 hover:bg-[rgba(79,70,229,0.2)]">
                <span className="mr-[10px] text-[18px] text-[#818cf8]">📝</span>
                <span className="text-[0.833rem] font-semibold tracking-[0.05em] text-white">
                  BUSINESS ASSOCIATE AGREEMENT
                </span>
              </div>
            </div>
            <h3 className="mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4 text-[1.728rem] font-semibold text-[#60a5fa]">
              Robust Data Privacy &amp; Security
            </h3>
            <p>
              Protecting sensitive health information is paramount. Our AI solutions are architected
              with a security-first approach, incorporating principles like 'zero trust'. We utilize
              robust security measures, including comprehensive encryption (both at rest and in
              transit) and strict, role-based access controls, to ensure data integrity and
              confidentiality, limiting access exclusively to authorized personnel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
