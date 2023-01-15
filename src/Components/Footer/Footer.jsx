import React from 'react';
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import "./Footer.css";
function Footer(){
    return(
        <div className='footer'>
            <img src={Wave} style={{width:"100%"}}/>
            <div className='f-content'>
                <span>mandalamit325@gmail.com</span>
                <div className='f-icons'>
                    <a href='https://www.linkedin.com/in/amit-mondal-78a450205/' target="_blank">
                    <Linkedin color='white' size="3rem"/>
                    </a>
                    <a href='https://www.instagram.com/mandalamit325' target="_blank">
                    <Insta color='white' size="3rem"/>
                    </a>
                    <a href='https://www.github.com/amitpareshmondal' target="_blank">
                    <Github color='white' size="3rem"/>
                    </a>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Footer;