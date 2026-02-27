import React from "react";
import SubTitle from "@/components/SubTitle";
import { educations } from "./data";

const classes = {
  tableRow: "py-5 border-b border-gray-200 md:grid md:grid-cols-5 md:gap-6",
  text: "break-words font-bold sm:mt-0",
  subText: "text-sm font-large text-gray-500",
};

const Education = () => {
  return (
    <div>
      <SubTitle>EDUCATION</SubTitle>
      <div>
        {educations.map((education, idx) => (
          <div key={idx} className={classes.tableRow}>
            <div>
              <p className={classes.subText}>{education.date}</p>
              <p className={classes.text}>{education.name}</p>
            </div>
            <div className="mt-4 md:mt-0 col-span-4">{education.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
