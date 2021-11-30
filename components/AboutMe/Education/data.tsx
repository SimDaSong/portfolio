import { ReactElement } from "react";

type Education = {
  name: string;
  date: string;
  content: ReactElement;
};

export const educations: Education[] = [
  {
    name: "고려대학교 세종캠퍼스",
    date: "2017.02~2021.08",
    content: (
      <ul>
        <li>컴퓨터융합소프트웨어학과</li>
        <li>4.13 / 4.5</li>
      </ul>
    ),
  },
];
