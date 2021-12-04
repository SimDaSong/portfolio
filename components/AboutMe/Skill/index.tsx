import SubTitle from "@/components/SubTitle";
import globalClasses from "@/styles/global-classes";
import React from "react";
import { skills } from "./data";
import Ul from "@/components/Ul";

const Skill = () => {
  return (
    <div>
      <SubTitle>SKILLS</SubTitle>
      <div>
        {skills.map((skill, idx) => (
          <div key={idx} className={globalClasses.tableRow}>
            <div>
              <p className={globalClasses.text}>{skill.name}</p>
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
