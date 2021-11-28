import React from "react";
import globalClasses from "@/styles/global-classes";
import { educations } from "./data";
import SubTitle from "@/components/SubTitle";

const Education = () => {
  return (
    <div>
      <SubTitle>EDUCATION</SubTitle>
      <div className={globalClasses.tableWrap}>
        {educations.map((education, idx) => (
          <div key={idx} className={globalClasses.tableRow}>
            <div>
              <p className={globalClasses.subText}>{education.date}</p>
              <p className={globalClasses.text}>{education.name}</p>
            </div>
            <div
              className="mt-4 md:mt-0 col-span-4"
              dangerouslySetInnerHTML={{ __html: education.info }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
