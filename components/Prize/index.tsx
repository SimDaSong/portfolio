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
              <p className={globalClasses.subText}>{prize.date}</p>
              <p className={globalClasses.text}>{prize.title}</p>
              <p className={globalClasses.subText}>{prize.department}</p>
            </div>
            <div className="sm:col-span-4 mt-4 md:mt-0">{prize.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prize;
