import React from "react";
import './css/Skills.css';

const Education = (props) => {
    return (
        <div className="skills-page">
            <div className="skills">
                    <img src={props.image} alt="icon" className="icon"></img>
            </div>
       </div>

    );
}

export default Education;