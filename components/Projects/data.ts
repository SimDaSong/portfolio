type Item = {
  date: string;
  name: string;
  href: string;
  imageSrc: string;
  tags: string[];
};

type Project = {
  title: string;
  items: Item[];
};

export const projects: Project[] = [];
