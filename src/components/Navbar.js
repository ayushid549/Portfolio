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
                <NavLink activeClass="active" to="/" >Home</NavLink>
                <NavLink activeClass="active" to="/About" >About</NavLink>
                <NavLink activeClass="active" to="/Education" >Education</NavLink>
                <NavLink activeClass="active" to="/SkillComp" >Skills</NavLink>
                <NavLink activeClass="active" to="/CodingCard" >Profiles</NavLink>
                <NavLink activeClass="active" to="/Contact" >Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar;