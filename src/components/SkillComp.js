import React from 'react';
import Skills from './Skills';
import './css/skillcomp.css';
import c from "./image/c.png";
import cpp from "./image/cpp.png";
import html from "./image/html.png";
import css from "./image/css.png";
import js from "./image/js.png";
import react from "./image/React.png";
import Navbar from './Navbar';

export default function SkillComp() {
    return (
        <div>
            <div className='skill-comp'>
                <h1>Skills</h1>
                <div className='skill-container'>
                    <div className='tech-skill-container'>
                        <h2>Technical Skills</h2>
                        <div className="skill-icons">
                            <div className='skill1'>
                                <Skills image={c} />
                                <Skills image={cpp} />
                                <Skills image={html} />
                            </div>
                            <div className='skill2'>
                                <Skills image={css} />
                                <Skills image={js} />
                                <Skills image={react} />
                            </div>
                        </div>
                    </div>
                    <div className='key-skill-container'>
                        <h2>Soft Skills</h2>
                        <div className="key-skill">
                            <div className='key-points'>
                                <h3>Communication</h3>
                            </div>
                            <div className='key-points'>
                                <h3>Presentation</h3>
                            </div>
                            <div className='key-points'>
                                <h3>Flexiblity</h3>
                            </div>
                            <div className='key-points'>
                                <h3>Team Work</h3>
                            </div>
                            <div className='key-points'>
                                <h3>Leadership</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
