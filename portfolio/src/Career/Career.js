import React from 'react';
import './Career.css';
import java from "../Images/java.png";
import spring from "../Images/spring.png";
import nodejs from "../Images/nodejs.png";
import git from "../Images/git.png";
import docker from "../Images/docker.png";
import mysql from "../Images/mysql.png";
import nginx from "../Images/nginx.png";
import css from "../Images/css.png";
import html5 from "../Images/html-5.png";

const Career = ({form, children}) => {
    return (
        <div className="Career-wrap" id="Career">
            <h1 className="title"><mark>CAREER</mark></h1>

            <div className="card-wrap">
                <div className="card">
                    <p className="date">2019.12~2020.02</p>
                    <p className="company">지에이시스템</p>
                    <div className="tech">
                        <img src={java} alt={'java'}/>
                        <img src={spring} alt={'spring'}/>
                    </div>
                    <div>SI 회사인 (주)지에이시스템에 2개월 간 인턴으로 근무하며 Spring에 대한 이해를 높였습니다.</div>
                </div>
                <div className="card">
                    <p className="date">2020.04~ing</p>
                    <p className="company">오늘의꽃</p>
                    <div className="tech">
                        <img src={nodejs} alt={'Node.js'}/>
                        <img src={html5} alt={'html5'}/>
                        <img src={css} alt={'css'}/>
                        <img src={git} alt={'git'}/>
                        <img src={docker} alt={'docker'}/>
                        <img src={nginx} alt={'nginx'}/>
                    </div>
                    <div>새벽 꽃 시장 유통업체인 오늘의꽃에서 홈페이지 유지 보수를 담당하고 있습니다.<br/>
                    포인트, 쿠폰 기능 등을 만들었으며 11월 말에 홈페이이지 2.0 버전 제작을 앞두고 있습니다.</div>
                </div>
            </div>

            <p className="caption">
                개발 아이콘 제작자 <a href="https://www.flaticon.com/kr/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon"> www.flaticon.com</a>
            </p>
        </div>
    );
};

export default Career;