import React from "react";
import './css/aboutme.css';
import MyPic from "./image/Myimage.png";
import Navbar from "./Navbar";

const AboutMe = () => {
    return (
        <div>
            <div className="about-page">
                <h1>About Me</h1>
                <div className="about-container">
                    <div className="about-right">
                        <img src={MyPic} alt="my image"></img>
                    </div>
                    <div className="about-left">
                        <div className="about-me">
                            <span className="span-1">Ayushi Dubey</span><br></br>
                            <span className="span-2">Frontend Developer</span>
                            <p>
                                My Name is Ayushi Dubey.I am a pre-final year student at Indore Institute of Science and
                                technology,Indore.I am a Self-Learner who is currently exploring a new technologies in the field
                                of web development.I am a Frontend developer ,DSA Learner and an Intermediate problem Solver at
                                various coding plateforms like geeksforgeeks,codechef and leetcode.<br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default AboutMe;