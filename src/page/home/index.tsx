import { About } from "./about";
import { Benefits } from "./benefits";
import { CaseUse } from "./case-use";
import { Contact } from "./contact";
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
      <CaseUse />
      <Contact />
    </>
  );
};
