import { ReactElement } from "react";

type Props = {
  children: ReactElement | string;
};

const Block = (props: Props) => {
  const { children } = props;

  return <div className="bg-gray-100 p-6 rounded">{children}</div>;
};

export default Block;
