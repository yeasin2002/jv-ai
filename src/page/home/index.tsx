import { About } from "./about";
import { Hero } from "./hero";
import { Navbar } from "./nav-bar";
import { OurSolutions } from "./Our-solutions";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OurSolutions />
    </>
  );
};
