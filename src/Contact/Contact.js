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
                    <a className="socialLink" href="https://www.linkedin.com/in/cory-r-dunn-8704b293/">
                        <img className="socialIcon" src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png" alt="linkedIn" /></a>
                    <a className="socialLink" href="https://github.com/coryrdunn">
                        <img className="socialIcon" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="github" /></a>
                    <a className="socialLink" href="https://bitbucket.org/coryrdunn/">
                        <img className="socialIcon" src="https://app.shippable.com/mktg/images/logos/bitbucket-square.png" alt="bitbucket" /></a>
                </div>
            </div>
        )
    }
}

export default Contact;