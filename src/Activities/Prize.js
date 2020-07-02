import React from 'react';
import './Prize.css';

const Prize = ({form, children}) => {
    return (
        <div className="Prize-wrap">
            <h1>Prize</h1>

            <div className="card-wrap">
                <div className="card">
                    <p className="semester">2017-2학기</p>
                    <p className="title">교내 코딩경진대회</p>
                    <p>금상 2회</p>
                    {/*<p>C, C++</p>*/}
                    <p>컴퓨터융합소프트웨어학과</p>
                </div>
                <div className="card">
                    <p className="semester">2018-1학기</p>
                    <p className="title">자기 주도 창의 설계 프로그램</p>
                    <p>장려상</p>
                    {/*<p>C, C++</p>*/}
                    <p>세종교수학습지원센터</p>

                    {/*<p>세종교수학습지원센터에서 주최하는 '자기 주도 창의 설계 프로그램'에 참여하여 **100만원의 지원금**을 받으며 4명의 팀원들과 **'헬로 미러'**라는 프로젝트를 만들었습니다.*/}

                    {/*주차별 보고서, 중간 보고서, 최종 보고서를 성실히 작성 하였고, 프로젝트 역시 성공적으로 완성한 덕분에 **장려상**을 받을 수 있었습니다.*/}

                    {/*### 📃 해당 프로젝트 링크*/}
                    {/*: https://www.notion.so/simdasong/f714ddabe9b94918bb873399f0ff6921](https://www.notion.so/simdasong/f714ddabe9b94918bb873399f0ff6921)*/}
                    {/*</p>*/}
                </div>
                <div className="card">
                    <p className="semester">2018-1학기</p>
                    <p className="title">스마트 APP 개발 공모전</p>
                    <p>우수상</p>
                    <p>고려대학교 세종캠퍼스 IT지원팀</p>
                    {/*<p>IT 지원팀에서 주최하는 '스마트 APP 개발 공모전'에 '고려대학교 세종캠퍼스 재난알리미'라는 앱 구상도를 제출하였고 우수상을 받았습니다.</p>*/}
                </div>
                <div className="card">
                    <p className="semester">2018-2학기</p>
                    <p className="title">‘스터디그룹’ 프로그램의 ‘자료구조 스터디’</p>
                    <p>장려상</p>
                    <p>세종교수학습지원센터</p>

                    {/*<p>4명의 팀원들과 세종교수학습지원센터에서 주최하는 '스터디그룹'프로그램에 참여하여 30만원의 지원금을 받으며 자료 구조 스터디를 진행하였습니다.*/}
                    {/*해당 지원금은 자료구조 공부를 위한 도서를 구입하는 데에 썼습니다.*/}
                    {/*    매주 번갈아 가며 한 명씩 해당 자료구조에 맞는 코딩 문제를 팀원들에게 과제로 내어주면, 팀원들은 각자 문제를 풀어본 뒤 일주일 뒤 다시 만나 각자의 코드를 리뷰하는 방식으로 스터디를 진행하였습니다.</p>*/}
                </div>
            </div>
        </div>
    );
};

export default Prize;