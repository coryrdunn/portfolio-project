import React from 'react';
import Nav from '../Nav';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="titleBar">
                    <h1>About Me</h1>
                </div>
            </div>
        )
    }
}

export default About;