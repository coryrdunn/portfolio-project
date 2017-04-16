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
                <h1>About Me</h1>
            </div>
        )
    }
}

export default About;