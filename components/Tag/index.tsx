
type Props = {
  children: string;
};

const Tag = (props: Props) => {
  const { children } = props;

  return (
    <span className="bg-default text-white px-2 py-0.5 rounded-xl text-xs mr-1 inline-block mt-1">
      {children}
    </span>
  );
};

export default Tag;
