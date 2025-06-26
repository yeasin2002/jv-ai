import { About } from "./about";
import { Benefits } from "./benefits";
import { Hero } from "./hero";
import { Navbar } from "./nav-bar";
import { OurSolutions } from "./Our-solutions";
import { Technology } from "./technology";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OurSolutions />
      <Technology />
      <Benefits />
    </>
  );
};
