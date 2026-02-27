import SubTitle from "@/components/SubTitle";
import { skills } from "@/data/skills";
import Ul from "@/components/Ul";

const classes = {
  tableRow: "py-5 border-b md:grid md:grid-cols-5 md:gap-6 [border-color:var(--border-divider)]",
  text: "break-words font-bold sm:mt-0",
};

const Skill = () => {
  return (
    <div>
      <SubTitle>SKILLS</SubTitle>
      <div>
        {skills.map((skill, idx) => (
          <div key={idx} className={classes.tableRow}>
            <div>
              <p className={classes.text}>{skill.name}</p>
            </div>
            <div className="mt-4 md:mt-0 col-span-4">
              <Ul>
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </Ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
