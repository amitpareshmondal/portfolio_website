import React from 'react';
import "./Intro.css";
import Floatingdiv from '../Floatingdiv/Floatingdiv';
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Insta from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/amit.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import Crown from "../../img/crown.png";
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll";
function Intro(){
    const transition={duration:2,type:"spring"}
    return(
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I Am</span>
                    <span>Amit Mondal</span>
                    <span>A passionate Fullstack MERN developer, Blogger and content creator, love to collaborate, learn and build new things</span>
                </div>
                <AnchorLink href='#contact'>
                <button className='i-button button'>Hire Me</button>
                </AnchorLink>
                
                <div className='i-icons'>
                    <a href='https://github.com/amitpareshmondal' target="_blank">
                    <img src={Github}/>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/mandalamit325/">
                    <img src={Insta} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/amit-mondal-78a450205/">
                    <img src={Linkedin}/>
                    </a>

                    
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1}/>
                <img src={Vector2}/>
                <img src={boy}/>
                <motion.img 
                initial={{left:"-36%"}}
                whileInView={{left:"-24%"}}
                transition={transition}

                src={glassesimoji}/>
                <motion.div 
                initial={{top:"-4%" ,left:"74%"}}
                whileInView={{left:"68%"}}
                transition={transition}
                style={{top:"4%", left:"68%", position:"absolute"}}
                className="floating-div">
                <Floatingdiv image={Crown} txt1="Web" txt2="Developer"/>
            </motion.div>
            <motion.div 
            initial={{left:"9rem", top:"18rem" }}
            whileInView={{left:"0rem"}}
            transition={transition}
            style={{top:"18rem", left:"0rem"}}
            className="floating-div">
                <Floatingdiv image={thumbup} txt1="SEO" txt2="" />
            </motion.div>
            <div className='blur' style={{background:"rgb:(238 210 255)"}}></div>
            <div className='blur' style={{background:"#C1F5FF", top:"17rem",width:"21rem", height:"11rem", left:"-9rem"}}></div>
            </div>
           
        </div> 
    )
}
export default Intro;