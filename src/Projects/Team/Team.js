import React from 'react';
import './Team.css';
import HelloMirror from "./hello-mirror.jpg";
import Fuya from "./fuya.png";

const Team = ({form, children}) => {
    return (
        <div className="team">
            <h2>팀프로젝트</h2>

            <div className="team-wrap">
                <div className="card">
                    <div className="image" style={{backgroundImage: `url(${ HelloMirror })`}}></div>
                    <p>헬로미러</p>
                </div>
                <div className="card">
                    <div className="image" style={{backgroundImage: `url(${ Fuya })`}}></div>
                    <p>푸야</p>
                </div>
            </div>
        </div>
    );
};

export default Team;