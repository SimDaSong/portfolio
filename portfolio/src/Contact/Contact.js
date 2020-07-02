import React from 'react';
import './Contact.css';
import github from './github.png';
import mail from './mail.png';
import facebook from './facebook.png';

const Contact = ({form, children}) => {
    return (
        <div className="Contact-wrap" id="Contact">
            <h1 className="title"><mark>CONTACT</mark></h1>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SimDaSong">
                    <img src={github} alt={'github'}/>
                </a>
            </div>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="mailto:song58449@gmail.com">
                    <img src={mail} alt={'mail'}/>
                </a>
            </div>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100008001034636">
                <img src={facebook} alt={'facebook'}/>
                </a>
            </div>
        </div>
    );
};

export default Contact;