import React from "react";
import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Cards/Cards";
import Resume from "./resume.pdf";
function Services(){
    return (
        <div className="services">
            {/*Left Side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem Ipsum is simply a dummy text of printing of printing lorem
                    <br/>
                    ispum is simpley dummy text                
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>
            {/*Right Side */}
            <div className="cards" >
                <div style={{left:"14rem"}}>
                <Card emoji={Heartemoji} heading="Design" details="figma, Sketch, Adobe, Photoshop"/>
                </div>
                <div style={{top:"12rem", left:"-4rem"}}>
                <Card emoji={Glasses} heading="Developer" details="HTML,CSS,JS"/>
                </div>
                <div style={{top:"19rem", left:"12rem"}}>
                <Card emoji={Humble} heading="UI/UX" details="Lorem Ipsum abra ka dabra gilli gilli chu"/>
                </div>
                <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>
        </div>
    )
}
export default Services;