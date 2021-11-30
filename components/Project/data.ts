import {
  ARDUINO_UNO,
  AWS_EC2,
  CPP,
  GITHUB_PAGES,
  LOGISIM,
  NEXT_JS,
  PYQT5,
  PYTHON_3,
  RASPBERRY_PI,
  RUBY_ON_RAILS,
  STYLED_COMPONENTS,
  TAILWIND_CSS,
  TYPESCRIPT,
  VERCEL,
  VERILOG,
  WIN32_API,
} from "@/constants";

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

export const projects: Project[] = [
  {
    title: "팀 프로젝트",
    items: [
      {
        date: "2021.11~ing",
        name: "Express boilerplate",
        href: "https://github.com/Beyond-Imagination/express-boilerplate",
        imageSrc: "/project/express-boilerplate.png",
        tags: [LOGISIM, VERILOG],
      },
      {
        date: "2021.09~2021.11",
        name: "Moment",
        href: "https://github.com/Beyond-Imagination/MMT-Server",
        imageSrc: "/project/moment.png",
        tags: [LOGISIM, VERILOG],
      },
      {
        date: "2018.03~2018.08",
        name: "헬로 미러",
        href: "/project/hello-mirror",
        imageSrc: "/project/hello-mirror.png",
        tags: [PYTHON_3, PYQT5, RASPBERRY_PI, ARDUINO_UNO],
      },
      {
        date: "2018.08",
        name: "푸야",
        href: "/project/fuya",
        imageSrc: "/project/fuya.png",
        tags: [RUBY_ON_RAILS, AWS_EC2],
      },
    ],
  },
  {
    title: "개인 프로젝트",
    items: [
      {
        date: "2020.01 ~ ing",
        name: "포트폴리오",
        href: "https://github.com/SimDaSong/portfolio",
        imageSrc: "/project/portfolio.png",
        tags: [NEXT_JS, TYPESCRIPT, TAILWIND_CSS, GITHUB_PAGES],
      },
      {
        date: "2020.01",
        name: "장바구니",
        href: "/project/cart",
        imageSrc: "/project/cart.png",
        tags: [NEXT_JS, TYPESCRIPT, VERCEL, STYLED_COMPONENTS],
      },
      {
        date: "2019.11",
        name: "4-bit CPU",
        href: "https://github.com/SimDaSong/4-bit-cpu",
        imageSrc: "/project/4-bit-cpu.png",
        tags: [LOGISIM, VERILOG],
      },
      {
        date: "2019.10",
        name: "자판기",
        href: "https://github.com/SimDaSong/bending-machine",
        imageSrc: "/project/bending-machine.png",
        tags: [LOGISIM],
      },
      {
        date: "2018.11~2018.12",
        name: "컴퓨터구조 학습도우미",
        href: "https://github.com/SimDaSong/computer-architecture-helper",
        imageSrc: "/project/computer-architecture-helper.png",
        tags: [CPP, WIN32_API],
      },
      {
        date: "2018.05",
        name: "Simple Resource Monitor",
        href: "https://github.com/SimDaSong/simple-resource-monitor",
        imageSrc: "/project/computer-resource-monitor.png",
        tags: [CPP],
      },
      {
        date: "2018.04",
        name: "Process Tree",
        href: "https://github.com/SimDaSong/process-tree",
        imageSrc: "/project/process-tree.png",
        tags: [CPP],
      },
      {
        date: "2018.03",
        name: "CLI",
        href: "https://github.com/SimDaSong/cli",
        imageSrc: "/project/cli.png",
        tags: [CPP],
      },
    ],
  },
];
