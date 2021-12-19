import { ReactElement } from "react";
import Link from "@/components/Link";

type Item = {
  date?: string;
  title: string;
  role?: string;
  content: ReactElement;
};

type Other = {
  title: string;
  items: Item[];
};

export const others: Other[] = [
  {
    title: "Conference & Seminar",
    items: [
      {
        title: "2020.01.17",
        role: "listener",
        content: (
          <>
            <p>
              <Link href="https://www.facebook.com/groups/1129292383932010/permalink/1239784209549493/">
                퀵랩 뽀개기 핸즈온 세미나
              </Link>
            </p>
            <p>
              GCP, Qwiklabs을 통해 서버 생성, 관리, 로드 밸런싱 등의 실습을
              진행하였습니다.
            </p>
          </>
        ),
      },
      {
        title: "2020.01.15",
        role: "listener",
        content: (
          <>
            <p>
              <Link href="https://github.com/SimDaSong/ausg-2020-handson-appsync">
                AWS AppSync로 만드는 서버리스 GraphQL 서비스
              </Link>
            </p>
            <p>
              AWS Amplify를 통하여 GraphQL API 서비스를 생성하고 배포한 후
              React에 GraphQL API 연동 코드를 추가하는 실습을 진행하였습니다.
            </p>
          </>
        ),
      },
      {
        title: "2018.11.23",
        role: "봉사자, listener",
        content: (
          <>
            <p>
              <Link href="https://www.samsungsds.com/kr/insights/Agile-Korea-Conference-2018.html">
                Agile Korea Conference 2018
              </Link>
            </p>
            <p>
              봉사자로 참여하여 컨퍼런스 안내를 돕고, 지정된 업무가 끝나면
              연사자 분들의 연사를 들었습니다.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "대외활동",
    items: [
      {
        date: "2018.03~2018.08",
        title: "멋쟁이 사자처럼 6기",
        role: "운영진",
        content: (
          <>
            <p>
              <Link href="https://www.likelion.net/">멋쟁이 사자처럼</Link>은 IT
              교육을 위한 비영리 단체입니다.
            </p>
            <p>
              각 대학 별 운영진들이 해당 대학의 학생들에게 프로그래밍을 무료로
              가르쳐주며, 제가 활동했던 6기 때에는 'Ruby on Rails'를 통한 웹
              프로그래밍 구현을 교육 하였습니다.
            </p>
            <p>
              본격적으로 학기가 시작하기 전에는 운영진들끼리 진행하는 부산
              스터디에 참가하여 부산대학교 멋쟁이사자처럼 분들과 함께, 중앙
              운영진 분들이 제공해주시는 강의에 대해 스터디를 진행하였고
            </p>
            <p>
              학기가 시작한 이후에는 학교 운영진으로 활동하며 매주 codecademy를
              토대로 한 강의 자료를 직접 만들어 수업을 진행했습니다.
            </p>
            <p>
              수업 이외에 과제 역시 진행하였으며, 과제 제출물에 대해 코드 리뷰를
              진행하였습니다.
            </p>
            <p>
              학기가 끝난 후 방학 때에는 팀원들과 함께 Ruby on Rails를 통해
              간단한 프로젝트를 함께 만들어보았습니다.
            </p>
          </>
        ),
      },
      // {
      //   date: "2019.12~2020.02",
      //   title: "코멘토 직무부트캠프",
      //   role: "멘티",
      //   content: `C++, 코멘토`,
      // },
    ],
  },
  {
    title: "교내활동",
    items: [
      // {
      //   date: "2019-2학기",
      //   title: "어셈블리언어및실습 튜터링",
      //   role: "튜티",
      //   content: <>x86 Assembly\t세종교수학습지원센터</>,
      // },
      {
        date: "2019-1학기, 2019-2학기",
        title: "Programming Language Center 근무",
        role: "근로장학생",
        content: (
          <>
            <p>
              Programming Language Center는 저희 학과에서 운영하는 곳으로, 학기
              시작 전에 코딩 테스트를 보고 선발된 학생들이 근무하는 곳입니다.
            </p>
            <p>
              저희 학과 학생들 뿐만 아니라, C,C++,Python 수업을 듣는 타과
              학생들도 찾아와 코딩에 대해 질문을 하면 근무하는 학생들이 그
              질문에 대해 답을 해줍니다.
            </p>
            <p>
              Programming Language Center에서 근무하면서 받았던 다양한 질문들
              덕분에 저 또한 배웠던 내용에 대해 한 번 더 생각해 볼 수 있는
              기회가 되었고, 한 층 더 성장할 수 있었습니다.
            </p>
          </>
        ),
      },
      {
        date: "2019-1학기",
        title: "Java 스터디",
        role: "팀장",
        content: (
          <>
            <p>
              Java 수업을 듣는, 저 포함 7명의 학과 사람들과 한 학기 동안 Java
              스터디를 진행했습니다.
            </p>
            <p>
              매주 2명의 인원이 수업에서 주어진 과제 이외에 교재 내 연습 문제를
              풀어옵니다.
            </p>
            <p>
              문제를 풀어온 사람은 직접 자신이 짠 코드에 대해 설명을 하며, 다른
              인원들은 코드 리뷰를 하는 방식으로 진행했습니다.
            </p>
          </>
        ),
      },
      {
        date: "2018-2학기",
        title: "지역맞춤형 진로체험",
        role: "교육멘토",
        content: (
          <>
            <p>
              교육부가 진행하는 자유학기제 지역맞춤형 진로체험 프로그램의
              일환으로, 중학생들을 대상으로 Scratch 수업을 진행했습니다.
            </p>
            <p>
              만들어져 있는 강의 자료를 토대로 학생들과 함께 hands-on
              프로그래밍을 진행하였고 수업을 잘 따라오지 못하는 학생들에게
              옆에서 도움을 주었습니다.
            </p>
          </>
        ),
      },
      {
        date: "2018-2학기",
        title: "컴퓨터언어2(C++) 수업 튜터링",
        role: "튜터",
        content: (
          <>
            <p>
              교내 학습지원센터에서 주최하는 프로그램(타과 학생 대상)과 학과
              학술 소모임 스터디(전공 학생 대상)에 참여하여 한 학기 동안
              컴퓨터언어2 수업 튜터링을 진행했습니다.
            </p>
            <p>
              앞선 1학기에서 참여한 튜터링 프로그램에서 좋은 성과를 거둬, 한
              학과 당 2명만 참여할 수 있는 프로그램에 교수님의 추천을 받아
              참여할 수 있었습니다.
            </p>
            <p>
              컴퓨터언어1(C) 수업 튜터링을 진행할 때처럼 저만의 강의자료를 매주
              만들어 튜티링을 진행했습니다.
            </p>
          </>
        ),
      },
      {
        date: "2018-1학기",
        title: "컴퓨터언어1(C) 수업 튜터링",
        role: "튜터",
        content: (
          <>
            <p>
              교내 학습지원센터에서 주최하는 프로그램(타과 학생 대상)과 학과
              학술 소모임 스터디(전공 학생 대상)에 참여하여 한 학기 동안
              컴퓨터언어1 수업 튜터링을 진행했습니다.
            </p>
            <p>
              제가 컴퓨터언어1 수업을 수강할 때에 교수님께서 제공해주셨던 수업
              PPT를 수정하여 저만의 강의자료를 매주 만들어 튜터링을
              진행했습니다.
            </p>
            <p>
              튜티들에게 어떻게 가르쳐 주어야 튜티들의 이해 속도가 빨라질지
              고민하는 것과, 매주 강의 자료를 준비 하는 것이 쉬운 일만은
              아니었지만 열심히 고민하고 노력했던 덕분에 튜티들 뿐만 아니라 저
              역시 성장할 수 있었습니다.
            </p>
          </>
        ),
      },
      {
        date: "2017-2학기",
        title: "C++ 스터디",
        role: "튜티",
        content: (
          <>
            <p>
              학과 학술 소모임의 C++ 스터디에서 튜티로 활동하며 매주 과제를
              진행하고 리뷰를 받았습니다.
            </p>
            <p>
              해당 스터디 덕분에 C++ 언어를 배우는 과목인 컴퓨터언어2 과목에서
              A+를 받을 수 있었습니다.
            </p>
          </>
        ),
      },
      {
        date: "2017-1학기",
        title: "C 스터디",
        role: "튜티",
        content: (
          <>
            <p>
              학과 학술 소모임의 C 스터디에서 튜티로 활동하며 매주 과제를
              진행하고 리뷰를 받았습니다.
            </p>
            <p>
              해당 스터디 덕분에 C 언어를 배우는 과목인 컴퓨터언어1 과목에서
              A+를 받을 수 있었습니다.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Interview",
    items: [
      {
        date: "2018.12.12",
        title: "교내 학생홍보기자단 인터뷰",
        content: (
          <>
            <Link href="http://sejong.korea.ac.kr/user/boardList.do?command=view&page=2&boardId=1480&boardSeq=75107&id=kr_060400000000">
              [Talk about dream]소비수단을 생산수단으로-컴퓨터융합소프트웨어학과
              심다송 학우 인터뷰
            </Link>
          </>
        ),
      },
    ],
  },
];
