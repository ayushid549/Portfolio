import React from "react";
import './css/footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Navbar from "./Navbar";

const Footer = () =>{
    return(
     <div className="footer-page">
        <a href="#"><TwitterIcon/></a>
        <a href="#"><LinkedInIcon/></a>
        <a href="#"><EmailIcon/></a>
        <a href="#"><GitHubIcon/></a> 
        </div>
    );
}

export default Footer;