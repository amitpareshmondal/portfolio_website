import React from "react";
import { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/webdev1.png";
import Fiverr from "../../img/portfolio1.png";
import Amazon from "../../img/fast.png";
import Shopify from "../../img/seo.png";
import Facebook from "../../img/wordpress3.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Works(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="works" id="works">
             <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome </span>
                <span>Services</span>
                <span>
                As a Full Stack Developer, I specialize in building custom websites <br/>
                 tailored to your unique needs. Additionally, I offer services such as <br/> 
                 setting up a blog on Wordpress or Blogger with hosting and SEO support and <br/> 
                 creating engaging web stories to drive more traffic to your website.
                {/* I specialize in creating custom portfolio websites tailored to your specific needs.
                    <br/>
                    <br/>
                    As a full stack web developer, I specialize in creating custom websites accoring to your need               <br/>
                    <br/>
                    Setup a Blog on Wordpress or Blogger with hosting support and SEO
                    <br/>
                    <br/>
                    Can make webstories for your website to drive more traffic */}
                </span>
                <AnchorLink href='#contact'>
                <button className="button s-button">Hire Me</button>
                </AnchorLink>
               
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>
            {/* Right Side */}
            <div className="w-right">
                <motion.div 
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}
                className="w-mainCircle">
                   <div className="w-secCircle">
                    <img src={Upwork} alt=""/>
                   </div>
                   <div className="w-secCircle">
                    <img src={Fiverr} alt=""/>
                   </div>
                   <div className="w-secCircle">
                    <img src={Amazon} alt=""/>
                   </div>
                   <div className="w-secCircle">
                    <img src={Shopify} alt=""/>
                   </div>
                   <div className="w-secCircle">
                    <img src={Facebook} alt=""/>
                   </div>
                </motion.div> 
                {/* Background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}
export default Works;