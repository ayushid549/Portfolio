import React from "react";
import "./css/Homepage.css";
import Navbar from "./Navbar";
import MyPic from "./image/Myimage.png";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typewriter from 'typewriter-effect';


const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="home-page">
                <div className="about-profile">
                    <div className="greeting-section">
                        <h1>Hi I'm Ayushi</h1>
                        <div className="typewriter">
                            <Typewriter loop={true}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("DSA Learner")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Frontend Developer")
                                        .start();
                                }}
                            />
                        </div>
                    </div>

                    { /* <div className="btn">
                        <button><a href="#" target="_blank">Resume</a></button>
                    </div>
                  */}
                    <div className="social-links">
                        <a href="https://twitter.com/d72129780?t=buqXT0bZliKgmaVu__5l0w&s=08" target="_blank"><TwitterIcon /></a>
                        <a href="https://www.linkedin.com/in/ayushi-dubey-1085a020b/" target="_blank"><LinkedInIcon /></a>
                        <a href="https://github.com/ayushid549" target="_blank"><GitHubIcon /></a>
                    </div>
                </div>
                <div className="profile">
                    <img src={MyPic} alt="my image" />
                </div>
            </div>
        </div>
    );
}

export default Homepage;