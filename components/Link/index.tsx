import React, { ReactElement } from "react";

type Props = {
  children: ReactElement | string;
  href: string;
};

const Link = (props: Props) => {
  const { children, href } = props;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      {children}
    </a>
  );
};

export default Link;
