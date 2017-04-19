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
                <div className="projectContainer">
                    <div className="details">Phone: 801&#8226;309&#8226;4183</div>
                    <div className="details">Email: coryrdunn@gmail.com</div>
                    <a href="https://www.linkedin.com/in/cory-r-dunn-8704b293/"><img src="../Images/In-2C-21px-TM.png" alt="linkedIn" /></a>
                </div>
            </div>
        )
    }
}

export default Contact;