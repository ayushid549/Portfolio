import React from 'react';
import './css/Navbar.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar_main">
            <div className="logo">
                <span className='s1'> Ayushi </span>
                <span className='s2'> Dubey</span>
            </div>

            <div className='navbar'>
                <NavLink activeClass="active" to="/" ><a>Home</a></NavLink>
                <NavLink activeClass="active" to="/About" ><a>About</a></NavLink>
                <NavLink activeClass="active" to="/Education" ><a>Education</a></NavLink>
                <NavLink activeClass="active" to="/SkillComp" ><a>Skills</a></NavLink>
                <NavLink activeClass="active" to="/CodingCard" ><a>Profiles</a></NavLink>
                <NavLink activeClass="active" to="/Contact" ><a>Contact</a></NavLink>
            </div>
        </div>
    )
}

export default Navbar;