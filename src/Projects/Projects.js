import React from 'react';
import Nav from '../Nav';
import './Projects.css'

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="titleBar">
                    <h1>Projects</h1>
                </div>
                <div className="contentContainer">
                    {/*Downtown Auto Body*/}
                    <div className="projectContainer">
                        <div className="projectHeader">
                            <div className="projectTitle">Downtown Auto Body - iOS App</div>
                            <em>Swift &#8226; MongoDB</em>
                        </div>
                        <div className="screenshots">
                            <img src="../Images/downtownSS1.png" alt="Downtown Auto Body Project" />
                            <img src="../Images/downtownSS2.png" alt="Downtown Auto Body Project" />
                            <img src="../Images/downtownSS3.png" alt="Downtown Auto Body Project" />
                        </div>
                        <p className="projectDetails">iOS mobile app developed for local auto body shop. The app allows customers to request appointments, 
                            record accident information, take pictures of damage, call towing company, call 911, contact shop via phone or email,
                            and find directions to the shop.
                        </p>
                        <a href="https://bitbucket.org/coryrdunn/downtownautobodyios">Bit Bucket Repo</a>
                    </div>
                    {/*Calculator*/}
                    <div className="projectContainer">
                        <div className="projectHeader">
                            <div className="projectTitle">Calculator - Android App</div>
                            <em>Java</em>
                        </div>
                        <div className="screenshots">
                            <img src="https://lh3.googleusercontent.com/hCrRTph4tFcWy0xh0OKZkdQaDaJmyBl5PMF9rTwwAmGVYbHs80F4R7IYNybbSN4OgoY=h900-rw" alt="Calculator Project" />
                            <img src="https://lh3.googleusercontent.com/QV5XWdO9KsMbYXjnFNVzpvIwacadYpcJlblTXyV-YPkK4HSPMOuuDwi_NkktbMaLxTE=h900-rw" alt="Calculator Project" />
                        </div>
                        <p className="projectDetails">Android mobile app that allows users to perform basic four function calculations.
                        </p>
                        <a href="https://play.google.com/store/apps/details?id=cdunn.calculator&hl=en">Google Play</a>
                        <a href="https://bitbucket.org/coryrdunn/calculatorapp-android">Bit Bucket Repo</a>
                    </div>
                    {/*Mythic Lighting Design*/}
                    <div className="projectContainer">
                        <div className="projectHeader">
                            <div className="projectTitle">Mythic Lighting Design - Web</div>
                            <em>HTML &#8226; CSS &#8226; Javascript &#8226; Bootstrap</em>
                        </div>
                        <div className="screenshots">
                            <img src="../Images/downtownSS1.png" alt="Mythic Project" />
                            <img src="../Images/downtownSS2.png" alt="Mythic Project" />
                            <img src="../Images/downtownSS3.png" alt="Mythic Project" />
                        </div>
                        <p className="projectDetails">Website developed for local stage & event lighting design company. The site offers users information
                            about the company, portfolio of past work, and contact information.
                        </p>
                        <a href="http://icarus.cs.weber.edu/~cd16509/mythic/Mythic.html">Visit Website</a>
                        <a href="https://github.com/coryrdunn/MythicLightingDesign">GitHub Repo</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;