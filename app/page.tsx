import Hero from "@/components/Hero";
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
      <section id="about" className={section}>
        <AboutMe />
      </section>
      <hr className={divider} />
      <section id="career" className={section}>
        <Career />
      </section>
      <hr className={divider} />
      <section id="awards" className={section}>
        <Award />
      </section>
      <hr className={divider} />
      <section id="project" className={section}>
        <Project />
      </section>
      <hr className={divider} />
      <section id="others" className={section}>
        <Others />
      </section>
    </>
  );
}
