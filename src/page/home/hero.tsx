import { LogoImg } from "@/components/hero-img";
import { Link } from "react-router";

interface Props extends React.ComponentProps<"div"> {}

export const Hero = ({ ...props }: Props) => {
  return (
    <div className="relative min-h-screen" {...props}>
      {/* Bubble Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-sm"></div>
        <div className="absolute top-40 right-20 h-96 w-96 animate-pulse rounded-full bg-blue-400/5 blur-sm delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 h-80 w-80 animate-pulse rounded-full bg-blue-600/8 blur-sm delay-2000"></div>
        <div className="absolute right-1/3 bottom-40 h-72 w-72 animate-pulse rounded-full bg-blue-300/6 blur-sm delay-3000"></div>
        <div className="absolute top-1/4 left-1/3 h-2 w-2 animate-bounce rounded-full bg-blue-400/40 delay-500"></div>
        <div className="absolute top-1/3 right-1/4 h-1 w-1 animate-bounce rounded-full bg-blue-300/60 delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/5 h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500/50 delay-1500"></div>
        <div className="absolute right-1/5 bottom-1/4 h-1 w-1 animate-bounce rounded-full bg-blue-400/40 delay-2000"></div>
        <div className="absolute top-1/2 left-1/6 h-1 w-1 animate-bounce rounded-full bg-blue-300/50 delay-2500"></div>
        <div className="absolute top-3/4 right-1/6 h-2 w-2 animate-bounce rounded-full bg-blue-500/30 delay-3000"></div>
      </div>

      {/* Hero Content */}

      <div className="z-11 mx-auto max-w-[1200px] transform pt-12 text-center">
        <LogoImg className="mx-auto size-36" />

        <h1 className="m-0 translate-y-[20px] transform animate-[fadeInUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards_0.5s] bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb] bg-clip-text text-[2.986rem] font-extrabold tracking-tight text-transparent md:text-[2.986rem]">
          Clin Technologies
        </h1>
        <p className="mt-[10px] mb-0 translate-y-[20px] transform animate-[fadeInUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards_0.8s] text-[1.728rem] font-normal tracking-normal text-[#94a3b8] md:text-[1.728rem]">
          Revolutionizing clinical documentation through{" "}
          <span className="font-semibold text-[#f59e0b]">HIPAA COMPLIANT</span> advanced artificial
          intelligence, giving healthcare providers more time for what truly matters — patient care.
          try it for <span className="font-semibold text-[#f59e0b]">FREE</span> today
        </p>
        <p className="mx-auto mt-[30px] max-w-[700px] translate-y-[20px] transform animate-[fadeInUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards_1.1s] text-[1.44rem] leading-normal text-[#e2e8f0]">
          Our sophisticated AI platform intelligently processes clinical conversations, creating
          accurate documentation that integrates with your existing EMR system.
        </p>
        <div className="mt-[40px] flex translate-y-[20px] transform animate-[fadeInUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards_1.4s] flex-col justify-center gap-5 md:flex-row">
          <Link
            className="inline-block rounded-full border-2 border-[#3b82f6] bg-transparent px-8 py-4 text-center text-white shadow-[0_5px_15px_rgba(37,99,235,0.2)] transition-colors hover:bg-[rgba(59,130,246,0.1)]"
            to="/login"
            data-discover="true"
          >
            Login
          </Link>
          <Link
            className="relative z-1 inline-block overflow-hidden rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] px-8 py-4 text-center text-white shadow-[0_5px_15px_rgba(37,99,235,0.4)] transition-all hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)]"
            to="/signup"
            data-discover="true"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};
