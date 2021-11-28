import React from "react";

type Props = {
  children: string;
};

const classes = {
  subTitle: "text-2xl font-bold text-default tracking-wide",
};

const SubTitle = (props: Props) => {
  const { children } = props;

  return <p className={classes.subTitle}>{children}</p>;
};

export default SubTitle;