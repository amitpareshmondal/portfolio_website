import React from 'react';
import "./Intro.css";
import Floatingdiv from '../Floatingdiv/Floatingdiv';
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Insta from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import Crown from "../../img/crown.png";
function Intro(){
    return(
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I Am</span>
                    <span>Amit Mondal</span>
                    <span>A passionate MERN stack developer, Blogger and content creator , love to collaborate, learn and build new things</span>
                </div>
                <button className='i-button button'>Hire Me</button>
                <div className='i-icons'>
                    <img src={Github}/>
                    <img src={Linkedin}/>
                    <img src={Insta} />
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1}/>
                <img src={Vector2}/>
                <img src={boy}/>
                <img src={glassesimoji}/>
                <div style={{top:"4%", left:"68%", position:"absolute"}}>
                <Floatingdiv image={Crown} txt1="Web" txt2="Developer"/>
            </div>
            <div style={{top:"18rem", left:"0rem"}}>
                <Floatingdiv image={thumbup} txt1="Best Design" txt2="Award" />
            </div>
            <div className='blur' style={{background:"rgb:(238 210 255)"}}></div>
            <div className='blur' style={{background:"#C1F5FF", top:"17rem",width:"21rem", height:"11rem", left:"-9rem"}}></div>
            </div>
           
        </div> 
    )
}
export default Intro;