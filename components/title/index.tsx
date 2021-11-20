import React from "react";

type Props = {
  children: string;
};

const classes = {
  title: "text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl",
};

const Title = (props: Props) => {
  const { children } = props;

  return <p className={classes.title}>{children}</p>;
};

export default Title;
