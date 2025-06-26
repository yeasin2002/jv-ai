interface Props extends React.ComponentProps<"div"> {}

export const Hero = ({ ...props }: Props) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0F22]" {...props}>
      {/* Bubble Background Effect */}
      <div className="absolute inset-0">
        {/* Large bubbles */}
        <div className="absolute top-20 left-10 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-40 right-20 h-96 w-96 animate-pulse rounded-full bg-blue-400/5 blur-3xl delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 h-80 w-80 animate-pulse rounded-full bg-blue-600/8 blur-3xl delay-2000"></div>
        <div className="absolute right-1/3 bottom-40 h-72 w-72 animate-pulse rounded-full bg-blue-300/6 blur-3xl delay-3000"></div>

        {/* Small floating particles */}
        <div className="absolute top-1/4 left-1/3 h-2 w-2 animate-bounce rounded-full bg-blue-400/40 delay-500"></div>
        <div className="absolute top-1/3 right-1/4 h-1 w-1 animate-bounce rounded-full bg-blue-300/60 delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/5 h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500/50 delay-1500"></div>
        <div className="absolute right-1/5 bottom-1/4 h-1 w-1 animate-bounce rounded-full bg-blue-400/40 delay-2000"></div>
        <div className="absolute top-1/2 left-1/6 h-1 w-1 animate-bounce rounded-full bg-blue-300/50 delay-2500"></div>
        <div className="absolute top-3/4 right-1/6 h-2 w-2 animate-bounce rounded-full bg-blue-500/30 delay-3000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="relative mx-auto mb-4 h-20 w-20">
            <svg
              className="h-full w-full text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-8 text-4xl font-bold text-blue-400 md:text-5xl lg:text-6xl">
          Clin Technologies
        </h1>

        {/* Description */}
        <div className="mx-auto mb-8 max-w-4xl">
          <p className="mb-6 text-lg leading-relaxed text-gray-300 md:text-xl">
            Revolutionizing clinical documentation through{" "}
            <span className="font-semibold text-orange-400">HIPAA COMPLIANT</span> advanced
            artificial intelligence, giving healthcare providers more time for what truly matters —
            patient care. try it for <span className="font-semibold text-orange-400">FREE</span>{" "}
            today
          </p>

          <p className="text-base leading-relaxed text-gray-400 md:text-lg">
            Our sophisticated AI platform intelligently processes clinical conversations, creating
            accurate documentation that integrates with your existing EMR system.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-blue-400 bg-transparent px-8 py-3 text-lg font-medium text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-white"
          >
            Login
          </Button>
          <Button
            size="lg"
            className="rounded-full bg-blue-500 px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-600"
          >
            Signup
          </Button>
        </div>

        {/* Bottom Icon */}
        <div className="mt-16">
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-600">
            <div className="h-2 w-2 rounded-full bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
