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
    <div className={classes.homeWrap}>
      <AboutMe />
      <Career />
      <Award />
      <Project />
      <Others />
    </div>
  );
}
