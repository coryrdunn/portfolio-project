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
                <h1>Contact Me</h1>
            </div>
        )
    }
}

export default Contact;