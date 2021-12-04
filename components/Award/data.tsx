import { ReactElement } from "react";
import Link from "@/components/Link";

type Award = {
  date: string;
  title: string;
  department: string;
  content: ReactElement;
};

export const awards: Award[] = [
  {
    date: "2021-08~2021-11",
    title: "2021 관광데이터 활용 공모전",
    department: "한국관광공사, kakao",
    content: (
      <>
        <p>
          Moment, 세상에 하나뿐인 나만의 특별한 여행지도 프로젝트로{" "}
          <b>
            <Link href="https://www.2021tourapi.com/winner.php">장려상</Link>
          </b>
          을 수상했습니다.
        </p>
        <p>
          <Link href="https://github.com/Beyond-Imagination/MMT-Server">
            Back-end 코드
          </Link>
          ,{" "}
          <Link href="https://github.com/Beyond-Imagination/MMT-WebApp">
            Front-end 코드
          </Link>
        </p>
        <p>
          저는 백엔드 파트 팀원으로써 카카오 스토리 API 연동, 관광 공모전 연동
          기능을 구현하였고 환경 변수, Morgan, Husky 등의 프로젝트 세팅을
          담당했습니다.
        </p>
      </>
    ),
  },
  // {
  //   date: "2018-2학기",
  //   title: "‘스터디그룹’ 프로그램의 ‘자료구조 스터디’",
  //   department: "세종교수학습지원센터",
  //   content: (
  //     <ul>
  //       <li>장려상</li>
  //       <li>4명의 팀원들과 세종교수학습지원센터에서 주최하는 '스터디그룹'프로그램에 참여하여 30만원의 지원금을 받으며 자료 구조 스터디를 진행하였습니다.</li>
  //       <li>해당 지원금은 자료구조 공부를 위한 도서를 구입하는 데에 썼습니다.</li>
  //       <li>매주 번갈아 가며 한 명씩 해당 자료구조에 맞는 코딩 문제를 팀원들에게 과제로 내어주면, 팀원들은 각자 문제를 풀어본 뒤 일주일 뒤 다시 만나 각자의 코드를 리뷰하는 방식으로 스터디를 진행하였습니다.</li>
  //     </ul>
  //   ),
  // },
  {
    date: "2018-1학기",
    title: "자기 주도 창의 설계 프로그램",
    department: "세종교수학습지원센터",
    content: (
      <>
        <p>
          4명의 팀원들과 '헬로 미러'라는 프로젝트를 만들었고 <b>장려상</b>을
          수상했습니다.
        </p>
        <p>
          <Link href="/project/hello-mirror">📃 해당 프로젝트 링크</Link>
        </p>
        <p>
          저는 RaspbianOS 세팅, smart-mirror 오픈소스 커스터마이징(locale 변경,
          시계/날씨/뉴스 API를 한국 기반으로 변경 등등), 보고서 작성을
          담당했습니다.
        </p>
      </>
    ),
  },
  {
    date: "2018-1학기",
    title: "스마트 APP 개발 공모전",
    department: "고려대학교 세종캠퍼스 IT지원팀",
    content: (
      <>
        <p>
          저 포함 2명의 팀원들끼리 '고려대학교 세종캠퍼스 재난알리미'라는 앱
          구상도를 제출하였고 <b>우수상</b>을 받았습니다.
        </p>
      </>
    ),
  },
  {
    date: "2017-2학기",
    title: "교내 코딩경진대회",
    department: "컴퓨터융합소프트웨어학과",
    content: (
      <>
        <p>
          <b>금상 2회</b>
        </p>
      </>
    ),
  },
];
