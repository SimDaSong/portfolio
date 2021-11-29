type Item = {
  date: string;
  title: string;
  role: string;
  info: string;
};

type Other = {
  title: string;
  items: Item[];
};

export const others: Other[] = [];
