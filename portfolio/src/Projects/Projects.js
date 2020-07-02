import React from 'react';
import './Projects.css';
import Personal from './Personal/Personal';
import Team from './Team/Team';

class Projects extends React.Component {
    render () {
        return (
            <div className="Project-wrap" id="Projects">
                <h1 className="title">
                    <mark>PROJECTS</mark>
                </h1>

                <Personal/>
                <Team/>
            </div>
        );
    }
};

export default Projects;