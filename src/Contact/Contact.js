import React from 'react';
import Nav from '../Nav';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="titleBar">
                    <h1>Contact Me</h1>
                </div>
            </div>
        )
    }
}

export default Contact;