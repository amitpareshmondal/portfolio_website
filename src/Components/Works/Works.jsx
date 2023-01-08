import React from "react";
import { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
function Works(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="works" id="works">
             <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Works for All These</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem Ipsum is simply a dummy text of printing of printing lorem
                    <br/>
                    ispum is simpley dummy text
                    <br/>
                    Lorem Ipsum is simply a dummy text of printing of printing lorem
                    <br/>
                    Lorem Ipsum is simply a dummy text of printing of printing lorem                
                </span>
              
                <button className="button s-button">Hire Me</button>
                
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