import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar(){
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Amit</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <li>
                        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                         Home
              </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="Services" spy={true} smooth={true}>
                Skills
              </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="works" spy={true} smooth={true}>
                Services
              </Link>
                        </li>
                        <li><Link activeClass="active" to="experience" spy={true} smooth={true}>
                Experience
              </Link></li>
                        <li>
                        <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
                        Projects
              </Link>
                        </li>
                    </ul>
                </div>
                <AnchorLink href='#contact'>
                <button className="button n-button" to="contact">Contact</button>
                </AnchorLink>
               
            </div>

        </div>
    )
}
export default Navbar;