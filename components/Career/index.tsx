import React from "react";
import globalClasses from "@/styles/global-classes";
import Title from "@/components/Title";
import { careers } from "./data";

export default function Career() {
  return (
    <div>
      <Title>💻 CAREER</Title>
      <div className={globalClasses.tableWrap}>
        {careers.map((career, idx) => (
          <div key={idx} className={globalClasses.tableRow}>
            <div>
              <p className={globalClasses.subText}>{career.date}</p>
              <p className={globalClasses.text}>{career.name}</p>
              <p className={globalClasses.subText}>{career.role}</p>
            </div>
            <div className="sm:col-span-4 mt-4 md:mt-0">{career.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
