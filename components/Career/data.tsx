import { ReactElement } from "react";
import Ul from "@/components/Ul";

type Career = {
  date: string;
  name: string;
  role: string;
  content: ReactElement;
};

export const careers: Career[] = [
  {
    date: "2019.12~2020.02",
    name: "지에이시스템",
    role: "개발 인턴",
    content: (
      <>
        <p>
          교내 산학연계 프로그램을 통해 SI 회사인 지에이시스템에 2개월 간
          인턴으로 근무하였습니다.
        </p>
        <p>
          직접적으로 개발에 참여하진 못했지만, 소프트웨어 개발 회사의 개발
          프로세스와 협업 방식에 대해 경험해 볼 수 있었습니다.
        </p>
      </>
    ),
  },
  {
    date: "2020.03~2021.03",
    name: "오늘의꽃",
    role: "백엔드 개발자",
    content: (
      <>
        <p>
          새벽 꽃 시장 유통업체인 오늘의꽃에서
          클라이언트/판매자/관리자/물류관리자 페이지 기능 추가 및 유지 보수를
          담당했습니다.
        </p>
        <p>
          Node.js(Express), MySQL(5.7)(Amazon RDS), Sequelize / ejs / Amazon
          EC2, Amazon S3, Amazon Lambda, Sentry, pm2, Git, Github
        </p>
        <br />
        <p>
          <b>기능 추가</b>
        </p>
        <p>DB 설계부터 구현까지 전부 제가 담당 하였습니다.</p>
        <br />
        <Ul>
          <li>포인트 기능 구현</li>
          <li>Iamport 간편 결제 기능 구현</li>
          <li>쿠폰 기능 구현</li>
          <li>회원 등급제 기능 구현</li>
          <li>메인 페이지를 관리자가 수정할 수 있게 하는 기능 추가</li>
          <li>그 외 기능 추가 요구사항 구현</li>
        </Ul>
        <br />
        <p>
          <b>유지 보수</b>
        </p>
        <p>
          초기에 외주 업체를 통해 제작된 애플리케이션이었으며, 개선해야 할
          사항이 많았습니다.
        </p>
        <p>
          차라리 새로 만드려고까지 하였지만 개발자가 많지 않았고 기능 추가가 더
          급했기 때문에 시간을 쪼개서 점진적으로 개선 해나갔습니다.
        </p>
        <br />
        <Ul>
          <li>DB 내 불명확한 column 수정 및 data cleansing</li>
          <li>slow query 개선</li>
          <li>API 응답 속도 개선</li>
          <li>레거시 코드 리팩토링</li>
          <li>모니터링 환경 구축</li>
        </Ul>
      </>
    ),
  },
];
