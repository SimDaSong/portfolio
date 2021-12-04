import React from "react";
import globalClasses from "@/styles/global-classes";
import Title from "@/components/Title";
import { awards } from "./data";

const Award = () => {
  return (
    <div>
      <Title>🏆 AWARDS</Title>
      <div>
        {awards.map((award, idx) => (
          <div key={idx} className={globalClasses.tableRow}>
            <div>
              <p className={globalClasses.subText}>{award.date}</p>
              <p className={globalClasses.text}>{award.title}</p>
              <p className={globalClasses.subText}>{award.department}</p>
            </div>
            <div className="sm:col-span-4 mt-4 md:mt-0">{award.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Award;
