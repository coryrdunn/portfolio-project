import React from 'react';
import Nav from '../Nav';
import './Projects.css';
import '../App.css';

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
                            <img className="ssVert" src="https://lh3.googleusercontent.com/MrCBxnnKiIPPU90-CxMJIBRVswpKApYVw5c9g84RpANJnNwFY3k2FeGX-zrPC8KcqCZNDhOoOqq3FnX3XO-PuYau1QeWhOYXPJvbf6iVNKeMwVCjJ4Y47u4Hgv15V9vs3KLHmHA09rutwsEmG4Z3-NhDZDvuGKPtYelYH_o78MFla80WX-0j_P3weqa8S_UzW-3Mh9t4jehBy7QZiVXk_p8qL8lQ0V0A7gZgj6YACUO3DoVap0yeXUdiVmGGaYAWGbq_oKj5Sj5RTKthLr1bapk6YT_rDIGl-zb9_waMa7yRnityrO3oYUW72zlDVK47QyN2DabS1AodAYIViS_JpOmh_5_1n4liXvAvkGMnydz7qv49_eHttJr6tbg3PLr4PV6rXo1Q8WFrYgD3e05yY4e2BPIDj_xInoCUYiPRED2XYQHsEuIBvMVhRZTvvTD21U_B-VgkRXrkrJ8x9Ok7ipuWYbhkNDwqE7Rhx_nX7P87UQQQSicET6mmyrWQrz_FIx5upYInVAKaZWBJeOpppD0N4_6-ovr9nVDane6rtA_MT3q7Knv7NPloToAe0JZqhHAI1AbXPuMBdbmfKq8EGdGgWIAbDf-26V2cP9Mjpy6VHz3K_i2k=w621-h1104-no" alt="Downtown Auto Body Project" />
                            <img className="ssVert" src="https://lh3.googleusercontent.com/QHuyWPDRrU-6hnmnLAdESRAdQ-jwUtU6iwGS0Hxau4ZILWfYPiJShrHuPle2J5aBJg9CDrP7HbYjb0IZ9hrYYjFQGUJqb8t7VV3UUOujLfmojucX2HdI5dnmBTW6GRr_j8bcei2rFEDZi43t8W1uwS7dQ1v0rsdDypkz5VR9zi4mR2ZJ6Wq81XjBfXR8NQ7F9gs9_fWk4Awu7AQ38y9Zumr1Y0OCGXH9E_Gp9lHZI3MHePBLDjUc3wMwLC6E8r-FZgMJJ61RnTNr1ygM9y62OopJDJy0A9GTJdV1KDGhaoVTLf0SAz8-6BfRP_w2VTRVqTIrcfj8mjPa31k-MwEU9iKbXqGLhjM24hA13D6YlNX9pD3UJa4SrBVfFmNuDfB-E-38cRufCAYDXSi134CoIiYvy0kI8eHZ69kNe0bi0Uw5ainKMK8XOOmC4_hHShANOLCnnbVtRsw8WowzXjuI_7hXDpBTqp9Ocxn-NWTJF_PTeF6uI80bzypXQbWLcE77ImkuWzFwlqIOoLsRO_UooR7FIBVgB3JEmDPVoK54ovNO1rKAp-Pp5WzNif_b_vC846f-HHoC42w-R9GUm0XdBh78bU4ggII1B63RLznV0ZqoSW3jj8ZO=w621-h1104-no" alt="Downtown Auto Body Project" />
                            <img className="ssVert" src="https://lh3.googleusercontent.com/TG4r5_T5dzoIjn98HsDDNFty9sPpazgkhvfVJEM5kBYSDR24xc-yOUP_iGNarRJuL0btsSaZ1WZibfWq1SiOz_2IlLVID8TtAvyOE1eiqAAmstufw1y_gYoUPdMNiZK15HQXvz3EZu0Eu-wST8ktV9DGP2dYPbRROj1EzfBFwvaT9-ydmrrgAgkLHrga80higstfVzWv9x_6dbWzYE6QiijAlF-ao77EB3X3q3TdNyWwzEThM2VXehB8ztqUKJIk8wA4RzAHIdztfHjeAjbKeSP4-_iVVbpGq7URcq_gVlwS7ySLxAjxhvc0bWT2kDPGqOwG_-tWRm1Zh4bVywRlOYKe5yEihsmwegYpb7qVmxnJB6S3E3oNDxTG4JLn0QKvNvUNebqUVVXiQKkxItA0Ir4-QUXCGDWPzKv2fCuUd9bl76CmNo93YJuP5dcrQnSTQmDxqJLseZB91VYLmzDW1ID9gknwGXhU-d177M5ECCein8FLm3egnohOyDpTD7fPPZN71JlXAEasTm3FMVAD88ph1vEmANMM1GUhS7cE_uh64h_SFVDX84s_O1Dj-_ni5Yl86Hm1z7RGdne15ez5BpAOu9sEXWQ-cb6Fu73YEdCfPszJoWib=w621-h1104-no" alt="Downtown Auto Body Project" />
                        </div>
                        <p className="projectDetails">iOS mobile app developed for local auto body shop. The app allows customers to request appointments, 
                            record accident information, take pictures of damage, call towing company, call 911, contact shop via phone or email,
                            and find directions to the shop.
                        </p>
                        <a className="projectLinks" href="https://bitbucket.org/coryrdunn/downtownautobodyios">Bit Bucket Repo</a>
                    </div>
                    {/*Calculator*/}
                    <div className="projectContainer">
                        <div className="projectHeader">
                            <div className="projectTitle">Calculator - Android App</div>
                            <em>Java</em>
                        </div>
                        <div className="screenshots">
                            <img className="ssVert" src="https://lh3.googleusercontent.com/hCrRTph4tFcWy0xh0OKZkdQaDaJmyBl5PMF9rTwwAmGVYbHs80F4R7IYNybbSN4OgoY=h900-rw" alt="Calculator Project" />
                            <img className="ssHoriz" src="https://lh3.googleusercontent.com/QV5XWdO9KsMbYXjnFNVzpvIwacadYpcJlblTXyV-YPkK4HSPMOuuDwi_NkktbMaLxTE=h900-rw" alt="Calculator Project" />
                        </div>
                        <p className="projectDetails">Android mobile app that allows users to perform basic four function calculations.
                        </p>
                        <a className="projectLinks" href="https://play.google.com/store/apps/details?id=cdunn.calculator&hl=en">Google Play</a>
                        <a className="projectLinks" href="https://bitbucket.org/coryrdunn/calculatorapp-android">Bit Bucket Repo</a>
                    </div>
                    {/*Mythic Lighting Design*/}
                    <div className="projectContainer">
                        <div className="projectHeader">
                            <div className="projectTitle">Mythic Lighting Design - Web</div>
                            <em>HTML &#8226; CSS &#8226; Javascript &#8226; Bootstrap</em>
                        </div>
                        <div className="screenshots">
                            <img src="http://icarus.cs.weber.edu/~cd16509/mythic/MythicLogoWhite.png" alt="Mythic Project" />
                        </div>
                        <p className="projectDetails">Website developed for local stage & event lighting design company. The site offers users information
                            about the company, portfolio of past work, and contact information.
                        </p>
                        <a className="projectLinks" href="http://icarus.cs.weber.edu/~cd16509/mythic/Mythic.html">Visit Website</a>
                        <a className="projectLinks" href="https://github.com/coryrdunn/MythicLightingDesign">GitHub Repo</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;