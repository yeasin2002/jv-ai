interface Props extends React.ComponentProps<"div"> {}

export const Contact = ({ ...props }: Props) => {
  return (
    <section id="contact" className="min-h-[400px] px-10 py-12 md:py-24" {...props}>
      <h2 className="mb-8 text-center text-[2.074rem] font-bold tracking-tight text-[#60a5fa]">
        Get Started
      </h2>
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-8 text-center">
          Ready to transform your clinical documentation process? Contact our team to learn how Clin
          Technologies can be tailored to your specific healthcare setting.
        </p>
        <div className="mx-auto max-w-[600px] rounded-xl border border-[rgba(96,165,250,0.2)] bg-[#1e293b] p-8 shadow-lg">
          <div className="mt-8 text-center">
            <p className="text-[#94a3b8]">
              Or reach us directly via email at{" "}
              <a href="mailto:support@clintechso.com" className="text-[#60a5fa] hover:underline">
                support@clintechso.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col justify-center gap-5 md:flex-row">
          <a
            className="inline-block rounded-full border-2 border-[#3b82f6] bg-transparent px-8 py-4 text-center text-white shadow-[0_5px_15px_rgba(37,99,235,0.2)] transition-colors hover:bg-[rgba(59,130,246,0.1)]"
            href="/login"
            data-discover="true"
          >
            Login
          </a>
          <a
            className="relative z-1 inline-block overflow-hidden rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] px-8 py-4 text-center text-white shadow-[0_5px_15px_rgba(37,99,235,0.4)] transition-all hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)]"
            href="/signup"
            data-discover="true"
          >
            Signup
          </a>
        </div>
      </div>
    </section>
  );
};
