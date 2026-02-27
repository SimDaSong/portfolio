import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
import Award from "@/components/Award";
import Project from "@/components/Project";
import Others from "@/components/Others";

const section = "py-12";
const divider = "border-t [border-color:var(--border-divider)]";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn as="section" className={section} id="about">
        <AboutMe />
      </FadeIn>
      <hr className={divider} />
      <FadeIn as="section" className={section} id="career">
        <Career />
      </FadeIn>
      <hr className={divider} />
      <FadeIn as="section" className={section} id="awards">
        <Award />
      </FadeIn>
      <hr className={divider} />
      <FadeIn as="section" className={section} id="project">
        <Project />
      </FadeIn>
      <hr className={divider} />
      <FadeIn as="section" className={section} id="others">
        <Others />
      </FadeIn>
    </>
  );
}
