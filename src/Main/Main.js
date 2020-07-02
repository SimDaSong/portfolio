import React, {Component} from 'react';
import './Main.css';
import Arrow from './Arrow';
import Title from './Title';
import Text from './Text';

class Main extends Component {
    render() {
        return (
            <div className="Main-wrap" id="Main">
                <div className="Main-child">
                    <Title>Hello World!</Title>
                    <Text wait={4500}/>
                </div>
                <Arrow wait={5500}/>
            </div>
        );
    }
}

export default Main;