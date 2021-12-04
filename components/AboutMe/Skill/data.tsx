type Skill = {
  name: string;
  items: string[];
};
export const skills: Skill[] = [
  {
    name: "Backend",
    items: [
      "Node.js (Express)",
      "Javascript (ES6+),Typescript",
      "MySQL, Sequelize, AWS RDS",
      "AWS EC2, AWS S3",
    ],
  },
  {
    name: "Frontend",
    items: [
      "HTML5, CSS3, Javascript (ES6+), Typescript",
      "React, Next.js",
      "TailwindCSS",
    ],
  },
  {
    name: "Tools",
    items: [
      "Git, GitHub",
      "Slack, Notion, Jetbrain Space",
      "Webstorm, VSCode, Vim",
      "Postman",
      "Sentry",
    ],
  },
];
