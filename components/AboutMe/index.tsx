import Title from "@/components/Title";
import Contact from "./Contact";
import Education from "./Education";
import Skill from "./Skill";
import { introductions } from "@/data/introductions";

const classes = {
  profileWrap: "grid items-center gap-y-10 lg:max-w-7xl",
  introWrap: "mt-4 [color:var(--text-secondary)]",
};

const AboutMe = () => {
  return (
    <div>
      <Title>👩🏻‍💻 ABOUT ME</Title>
      <div className=" grid grid-cols-1 gap-y-12">
        <div className={`lg:grid-cols-5 ${classes.profileWrap}`}>
          <div className="lg:col-span-3">
            <div className={classes.introWrap}>
              {introductions.map((intro, idx) => (
                <p key={idx}>{intro}</p>
              ))}
            </div>
          </div>
          <Contact className="lg:col-span-2" />
        </div>
        <Education />
        <Skill />
      </div>
    </div>
  );
};

export default AboutMe;
