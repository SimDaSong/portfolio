import type { NextPage } from "next";

import React from "react";
import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
import Prize from "@/components/Prize";
import Project from "@/components/Project";
import Others from "@/components/Others";

const classes = {
    homeWrap: "grid grid-cols-1 gap-y-12"
}

const Home: NextPage = () => {
  return (
      <div className={classes.homeWrap}>
        <AboutMe />
        <Career />
        <Prize />
        <Project />
        <Others />
      </div>
  );
};

export default Home;
