interface Props extends React.ComponentProps<"section"> {}

export const Benefits = ({ ...props }: Props) => {
  return (
    <section id="benefits" className="min-h-[400px] bg-[#1E293B] px-10 py-12 md:py-24" {...props}>
      <h2 className="mb-8 text-center text-[2.074rem] font-bold tracking-tight text-[#60a5fa]">
        Benefits
      </h2>
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-4">Healthcare providers using Clin Technologies solutions report:</p>
        <ul className="mb-8 list-disc pl-8">
          <li className="mb-2">Reduction in documentation time by 40-60%</li>
          <li className="mb-2">Improved work-life balance with less after-hours charting</li>
          <li className="mb-2">Enhanced patient interaction due to less focus on note-taking</li>
          <li className="mb-2">More comprehensive and consistent clinical documentation</li>
          <li className="mb-2">Reduced risk of documentation errors and omissions</li>
        </ul>
        <div className="mt-[30px] flex flex-col justify-center gap-5 md:flex-row">
          <a
            href="https://super-liger-e3b5ad.netlify.app/login"
            className="inline-block rounded-full border-2 border-[#3b82f6] bg-transparent px-8 py-4 text-center text-white shadow-[0_5px_15px_rgba(37,99,235,0.2)] transition-colors hover:bg-[rgba(59,130,246,0.1)]"
          >
            Login
          </a>
          <a
            href="https://super-liger-e3b5ad.netlify.app/signUp"
            className="relative z-1 inline-block overflow-hidden rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] px-8 py-4 text-center text-white shadow-[0_5px_15px_rgba(37,99,235,0.4)] transition-all hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)]"
          >
            Signup
          </a>
        </div>
      </div>
    </section>
  );
};

