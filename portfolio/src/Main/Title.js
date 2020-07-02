import React from 'react';
import './Title.css';
import ReactTypingEffect from "react-typing-effect";

const Title = ({form, children}) => {
    return (
        <p className="Main-text">
            <ReactTypingEffect
                text={children}
                speed={180}
                typingDelay={1300}
            />
        </p>
    );
};

export default Title;