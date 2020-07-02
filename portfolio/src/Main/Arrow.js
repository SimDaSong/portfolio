import React from 'react';
import './Arrow.css';

class Arrow extends React.Component {
    state = {hidden: 'hidden'};

    componentWillMount() {
        var that = this;
        setTimeout(function() {
            that.show();
        }, that.props.wait);
    }
    show() {
        this.setState({hidden : "show"});
    }
    render () {
        return (
            <div className={`${this.state.hidden} arrow`}>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default Arrow;