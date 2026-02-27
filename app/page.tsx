import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
import Award from "@/components/Award";
import Project from "@/components/Project";
import Others from "@/components/Others";

const classes = {
  homeWrap: "grid grid-cols-1 gap-y-12",
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className={classes.homeWrap}>
        <section id="about">
          <AboutMe />
        </section>
        <section id="career">
          <Career />
        </section>
        <section id="awards">
          <Award />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="others">
          <Others />
        </section>
      </div>
    </>
  );
}
