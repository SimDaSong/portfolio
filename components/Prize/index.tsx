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
              <dt className={globalClasses.subText}>{prize.semester}</dt>
              <dt className={globalClasses.text}>{prize.title}</dt>
              <dd className={globalClasses.subText}>{prize.department}</dd>
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
