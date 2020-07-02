import React from 'react';
import './Seminar.css';

const Seminar = ({form, children}) => {
    return (
        <div className="Seminar-wrap">
            <h1>Conference & Seminar</h1>
            <div>
                <p className="date">2018.11.23</p>
                Agile Korea Conference 2018
            </div>
            <div>
                <p className="date">2020.01.15</p>
                AWS AppSync로 만드는 서버리스 GraphQL 서비스
            </div>
        </div>
    );
};

export default Seminar;