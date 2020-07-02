import React from 'react';
import './Activities.css';
import Prize from './Prize';
import Seminar from "./Seminar";
import Relevent from "./Relevent";

const Activities = ({form, children}) => {
    return (
        <div className="Activities-wrap" id="Activities">
            <p className="title"><mark>ACTIVITIES</mark></p>
            <Prize />
            <Relevent />
            <Seminar />
        </div>
    );
};

export default Activities;