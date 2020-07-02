import React from 'react';
import './Text.css';

class Text extends React.Component {
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
            <div className={this.state.hidden}>
                <p>
                    대학교 1학년 1학기,<br/>
                    콘솔창에 "Hello World"를 출력하며 개발자로서의 첫 발자국을 내딛었습니다.
                </p>
                <p>
                    오로지 <b>소비의 수단</b>이었던 노트북을<br/>
                    <b>생산의 수단</b>으로서 활용하는 재미에 빠진지 어느덧 3년이 지났습니다.
                </p>
                <p>
                    행복한 개발자가 되어 후배들 양성에 힘 쓰고 싶습니다.
                </p>
            </div>
        );
    }
};

export default Text;