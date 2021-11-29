import React from "react";
import globalClasses from "@/styles/global-classes";
import Title from "@/components/Title";
import { prizes } from "./data";

const Prize = () => {
  return (
    <div>
      <Title>🏆 PRIZE</Title>
      <div className={globalClasses.tableWrap}>
        {prizes.map((prize, idx) => (
          <div key={idx} className={globalClasses.tableRow}>
            <div>
              <p className={globalClasses.subText}>{prize.semester}</p>
              <p className={globalClasses.text}>{prize.title}</p>
              <p className={globalClasses.subText}>{prize.department}</p>
            </div>
            <div
              className="sm:col-span-4"
              dangerouslySetInnerHTML={{ __html: prize.info }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prize;
