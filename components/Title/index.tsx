import React from "react";

type Props = {
  children: string;
};

const classes = {
  title:
    "text-3xl font-bold text-default tracking-tight sm:text-3xl tracking-wide",
};

const Title = (props: Props) => {
  const { children } = props;

  return <p className={classes.title}>{children}</p>;
};

export default Title;
