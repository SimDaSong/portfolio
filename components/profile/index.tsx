import React from "react";

import Contact from "@/components/contact";
import SubTitle from "@/components/sub-title";
import { introductions } from "@/utils/data";

const classes = {
  profileWrap: "grid items-center gap-y-10 lg:max-w-7xl",
  introWrap: "mt-4 text-gray-500",
};

export function Profile() {
  return (
    <div className={`lg:grid-cols-5 ${classes.profileWrap}`}>
      <div className="lg:col-span-3">
        <SubTitle>심다송, Sim Da-song</SubTitle>
        <div className={classes.introWrap}>
          {introductions.map((intro, idx) => (
            <p key={idx}>{intro}</p>
          ))}
        </div>
      </div>
      <Contact className="lg:col-span-2" />
    </div>
  );
}

export default Profile;
