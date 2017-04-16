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
                <div className="titleBar">
                    <h1>Resume</h1>
                </div>
            </div>
        )
    }
}

export default Resume;