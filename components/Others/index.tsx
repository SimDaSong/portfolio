import React from "react";
import globalClasses from "@/styles/global-classes";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import { others } from "./data";

const classes = {
  othersContentWrap: "grid grid-cols-1 gap-y-8 mt-5",
};

const Others = () => {
  return (
    <div>
      <Title>👀 OTHERS</Title>
      <div className={classes.othersContentWrap}>
        {others.map((other, idx) => (
          <div key={idx}>
            <SubTitle>{other.title}</SubTitle>
            <div>
              {other.items.map((other, idx) => (
                <div key={idx} className={globalClasses.tableRow}>
                  <div>
                    <p className={globalClasses.subText}>{other.date}</p>
                    <p className={globalClasses.text}>{other.title}</p>
                    <p className={globalClasses.subText}>{other.role}</p>
                  </div>
                  <div
                    className="sm:col-span-4 mt-4"
                    dangerouslySetInnerHTML={{ __html: other.info }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
