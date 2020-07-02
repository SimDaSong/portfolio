import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    state = {hidden: 'hidden', target: 'main'};

    hideBar = () => {
        const hidden = this.state.hidden;

        (document.getElementById('Main').getBoundingClientRect().bottom <= 0) ?
            (hidden === 'hidden') && this.setState({ hidden: 'show' })
            :
            (hidden === 'show') && this.setState({ hidden: 'hidden' });
    }

    pointMenu = () => {
        let target;

        if (document.getElementById('Contact').getBoundingClientRect().top <= 0) {
            target = 'contact';
        } else if (document.getElementById('Projects').getBoundingClientRect().top <= 0) {
            target = 'projects';
        } else if (document.getElementById('Activities').getBoundingClientRect().top <= 0) {
            target = 'activities';
        } else if (document.getElementById('Career').getBoundingClientRect().top <= 0) {
            target = 'career';
        } else if (document.getElementById('Main').getBoundingClientRect().top <= 0) {
            target = 'main';
        }

        this.setState({ target: target });
    }

    componentDidMount(){
        window.addEventListener('scroll', this.hideBar);
        window.addEventListener('scroll', this.pointMenu);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.hideBar);
        window.removeEventListener('scroll', this.pointMenu);
    }

    render () {
        return (
            <div className="Navigation-wrap">
                <div className={`${this.state.hidden} ${this.state.target}`}>
                    <ul>
                        <li><a href="#Main">HOME</a></li>
                        <li><a href="#Career">CAREER</a></li>
                        <li><a href="#Activities">ACTIVITIES</a></li>
                        <li><a href="#Projects">PROJECTS</a></li>
                        <li><a href="#Contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Navigation;