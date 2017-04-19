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
                <div className="projectContainer">
                    <div className="projectTitle">Summary</div>
                    <br />
                    <div className="details">
                        The combination of my experience and education provides me with the necessary skill set to apply basic to intermediate 
                        knowledge of mobile software architecture to perform software development tasks associated with developing, debugging 
                        or designing mobile applications according to provided design specifications.
                    </div>
                    <br />
                </div>
                <div className="projectContainer">
                    <div className="projectTitle">Experience</div>
                    <div className="projectSubTitle">Software Developer</div>
                    <div className="projectCompanyTitle"><em>ClearView &#8226; Roy, UT</em></div>
                    <div className="projectList">
                        <ul>
                            <li>Design, build, and implement additional modules and updates to the ClearView web application</li>
                            <li>Aid in database design and creation</li>
                            <li>Provide maintenance, support, and troubleshooting for end-users</li>
                            <li>Be responsive and flexible with ad-hoc requests from customers and other departments</li>
                            <li>Develop and foster a team atmosphere that exhibits teamwork within the department and with other departments</li>
                        </ul>
                    </div>
                    <br />
                    <div className="projectSubTitle">Application Developer / Owner</div>
                    <div className="projectCompanyTitle"><em>Revolution 6 Development &#8226; South Ogden, UT</em></div>
                    <div className="projectList">
                        <ul>
                            <li>Native Android Development</li>
                            <li>Native iOS Development (Swift)</li>
                            <li>Native iOS Development (Objective-C)</li>
                            <li>Cross-Platform Development (PhoneGap)</li>
                        </ul>
                    </div>   
                    <br />
                    <div className="projectSubTitle">Student Developer</div>
                    <div className="projectCompanyTitle"><em>Weber State University &#8226; Ogden, UT</em></div>
                    <div className="projectList">
                        <ul>
                            <li>Console Applications</li>
                            <li>Mobile Applications</li>
                            <li>Web Applications</li>
                            <li>Database</li>
                        </ul>
                    </div>   
                    <br />
                    <div className="projectSubTitle">Technical Specialist</div>
                    <div className="projectCompanyTitle"><em>Fresenius Medical Care &#8226; Ogden, UT</em></div>
                    <div className="projectList">
                        <ul>
                            <li>Manage a crew of 15-20 people in a fast paced work environment</li>
                            <li>Possess a thorough understanding of pneumatic, electric, and robotic mechanical systems</li>
                            <li>Debug and resolve issues that arise within various systems</li>
                            <li>Interface between crew members and upper management</li>
                            <li>Provide extensive training to crew members to maximize team effectiveness</li>
                            <li>Volunteer work with Engineering Department to implement 5S standards which improve efficiency</li>
                        </ul>
                    </div>                                      
                </div>
                <div className="projectContainer">
                    <div className="projectTitle">Education</div>
                    <br />
                    <div className="projectSubTitle">Bachelor of Science &#8226; Computer Science</div>
                    <div className="projectCompanyTitle"><em>Weber State University &#8226; Ogden, UT</em></div>
                    <br />
                    <div className="projectSubTitle">Associates of Applied Science &#8226; Computer Science</div>
                    <div className="projectCompanyTitle"><em>Weber State University &#8226; Ogden, UT</em></div>
                    <br />
                    <div className="projectSubTitle">Certificate of Competency &#8226; Mobile Application Development</div>
                    <div className="projectCompanyTitle"><em>Weber State University &#8226; Ogden, UT</em></div>    
                    <br />                
                </div>
            </div>
        )
    }
}

export default Resume;