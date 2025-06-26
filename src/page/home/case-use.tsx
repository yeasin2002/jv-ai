interface Props extends React.ComponentProps<"div"> {}

export const CaseUse = ({ ...props }: Props) => {
  return (
    <section id="case-use" className="min-h-[400px] bg-[#0f172a] px-10 py-12 md:py-24" {...props}>
      <h2 className="mb-8 text-center text-[2.074rem] font-bold tracking-tight text-[#60a5fa]">
        Case Use
      </h2>
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-4">
          See how healthcare providers across specialties are transforming their practice with Clin
          Technologies:
        </p>
      </div>
      <div className="mx-auto mt-8 grid w-full max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl border border-[rgba(96,165,250,0.2)] bg-[rgba(30,58,138,0.3)] p-8 shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
          <h3 className="mt-0 mb-4 text-[1.44rem] font-semibold text-[#60a5fa]">Primary Care</h3>
          <p>
            Dr SJ M.D reduced her documentation time by 52%, allowing her to see 3 more patients
            daily while finishing her charts before leaving the office.
          </p>
          <p className="mt-6 mb-2 border-l-[3px] border-[rgba(96,165,250,0.3)] pl-4 text-white italic">
            "This AI tool streamlines a tedious process, reduces 'click fatigue,' and helps me
            reclaim some sanity."
          </p>
          <p className="mt-2.5 text-right text-[0.833rem] font-medium text-[#94a3b8] italic">
            — Dr. SJ, MD
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-[rgba(96,165,250,0.2)] bg-[rgba(30,58,138,0.3)] p-8 shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
          <h3 className="mt-0 mb-4 text-[1.44rem] font-semibold text-[#60a5fa]">
            Emergency Medicine
          </h3>
          <p>
            Our ED department implemented Clin Tech, resulting in more thorough documentation and a
            70% decrease in chart completion time during high-volume periods. Our nurses love it.
          </p>
          <p className="mt-2.5 text-right text-[0.833rem] font-medium text-[#94a3b8] italic">
            — Emergency Department (ED) Nurse Manager
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-[rgba(96,165,250,0.2)] bg-[rgba(30,58,138,0.3)] p-8 shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
          <h3 className="mt-0 mb-4 text-[1.44rem] font-semibold text-[#60a5fa]">
            Behavioral Health
          </h3>
          <p className="mb-2 border-l-[3px] border-[rgba(96,165,250,0.3)] pl-4 text-white italic">
            "Chartwright has been transformative for our clinic. Our therapists were drowning in
            documentation; We've slashed average charting time to{" "}
            <strong>under 3 minutes per patient</strong>, freeing up hours for direct care. More
            importantly, we've seen a significant{" "}
            <strong>reduction in documentation errors and compliance flags</strong>. It's not just
            faster; it's <em>smarter</em> documentation."
          </p>
          <p className="mt-2.5 text-right text-[0.833rem] font-medium text-[#94a3b8] italic">
            — Clinical Director, Behavioral Health Practice
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-[rgba(96,165,250,0.2)] bg-[rgba(30,58,138,0.3)] p-8 shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
          <h3 className="mt-0 mb-4 text-[1.44rem] font-semibold text-[#60a5fa]">Case Management</h3>
          <p className="mb-2 border-l-[3px] border-[rgba(96,165,250,0.3)] pl-4 text-white italic">
            "Honestly, with the number of patients I manage, documentation felt like a constant,
            losing battle. But this AI feels like getting an assistant. It takes my detailed notes
            and <strong>instantly</strong> creates the clear, customized charts I need. I'm getting
            hours back each week – hours I can now spend directly with patients, tackling barriers,
            not just typing."
          </p>
          <p className="mt-2.5 text-right text-[0.833rem] font-medium text-[#94a3b8] italic">
            — Social Worker/Case Manager
          </p>
        </div>
      </div>
    </section>
  );
};
