import React from "react";
import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Cards/Cards";
import Resume from "./resume.pdf";
import { motion } from "framer-motion"
function Services(){
    const transition = {
        duration: 1,
        type: "spring",
      };
    return (
        <div className="services" id="Services">
            {/*Left Side */}
            <div className="awesome">
                <span>My Tech</span>
                <span>Stack</span>
                <span>
                    Feel free to message if you need help in any of the 
                    <br/>
                    mentioned domains           
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>
            {/*Right Side */}
            <div className="cards" >
                <motion.div 
                initial={{ left: "25rem" }}
                whileInView={{ left: "14rem" }}
                transition={transition}
                style={{left:"14rem"}}>
                <Card emoji={Heartemoji} heading="Frontend" details="Building stunning Frontend w/ ReactJS & NextJS"/>
                </motion.div>
                <motion.div 
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                style={{top:"12rem", left:"-4rem"}}>
                <Card emoji={Glasses} heading="SEO" details="Rank websites on Google and drive more traffic to the website"/>
                </motion.div>
                <motion.div 
                 initial={{ top: "19rem", left: "25rem" }}
                 whileInView={{ left: "12rem" }}
                 transition={transition}
                style={{top:"19rem", left:"12rem"}}>
                <Card emoji={Humble} heading="Backend" details="Creating efficient and secure REST APIs using Node.js & Express."/>
                </motion.div>
                <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>
        </div>
    )
}
export default Services;