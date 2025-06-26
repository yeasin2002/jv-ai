import { LogoImg } from "@/components/hero-img";
import { Link } from "react-router";

interface Props extends React.ComponentProps<"nav"> {}

export const Navbar = ({ ...props }: Props) => {
  return (
    <nav className="relative z-10 w-full bg-[#0F172A] px-6 pt-3" {...props}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <LogoImg className="h-10 w-10" />
          <span className="text-xl font-semibold text-white">Clin</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center space-x-8 lg:flex">
          <Link to="#" className="text-gray-300 transition-colors hover:text-white">
            About
          </Link>
          <Link to="#" className="text-gray-300 transition-colors hover:text-white">
            Our Solutions
          </Link>
          <Link to="#" className="text-gray-300 transition-colors hover:text-white">
            In Action
          </Link>
          <Link to="#" className="text-gray-300 transition-colors hover:text-white">
            Technology
          </Link>
          <Link to="#" className="text-gray-300 transition-colors hover:text-white">
            Benefits
          </Link>
          <Link to="#" className="text-gray-300 transition-colors hover:text-white">
            Case Use
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
