import { ReactElement } from "react";

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
        <br />
        <p>
          <b>기능 추가</b>
        </p>
        <br />
        <ul className="list-disc list-inside">
          <li>포인트 기능 구현</li>
          <li>Iamport 간편 결제 기능 구현</li>
          <li>쿠폰 기능 구현</li>
          <li>배송비, 배송비플랜, 상품 면세/과세 적용</li>
          <li>회원 등급제 도입</li>
          <li>메인 페이지를 관리자가 수정할 수 있게 하는 기능 추가</li>
          <li>그 외 기능 추가 요구사항 구현</li>
        </ul>
        <br />
        <p>
          <b>유지 보수</b>
        </p>
        <br />
        <ul className="list-disc list-inside">
          <li>DB 내 불명확한 column 수정 및 data cleansing</li>
          <li>slow query 개선</li>
          <li>API 응답 속도 개선</li>
          <li>레거시 코드 리팩토링</li>
          <li>
            그 외 오류 수정 및 dotenv, helmet 등의 라이브러리를 사용하여
            프로젝트 설정
          </li>
        </ul>
      </>
    ),
  },
];
