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
                <div className="projectContainer">
                    <div className="details">
                        I graduated from Weber State University with a Bachelor of Science
                        in Computer Science in 2017. Along with my BS degree, I obtained
                        a certification in Mobile Application Development. Prior to attending
                        Weber, I received multiple certifications in Website Design.
                        <br /><br />
                        I am currently a Full-Stack Software Developer for ClearView in Roy, UT.
                        I use C#, ASP.net, HTML, CSS, JavaScript, AngularJS, jQuery, and SQL to
                        develop web-based software for call centers worldwide.
                        <br /><br />
                        In addition to my position at ClearView, I develop web and mobile applications
                        as a freelance developer under the company name Revolution 6 Development. I enjoy
                        developing mobile applications in Android and iOS.
                        <br /><br />
                        When I am not developing, I enjoy spending time with my wife and 3 kids. I am an 
                        avid mountain biker and road cyclist. I enjoy setting and accomplishing goals that force me out of 
                        my comfort zone and encourage me to grow.
                    </div>
                </div>
            </div>
        )
    }
}

export default About;