import React from 'react';
import Nav from '../Nav';

class Resume extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
    }

    render() {
        return (
            <div>
                <Nav />
                <h1>Resume</h1>
            </div>
        )
    }
}

export default Resume;