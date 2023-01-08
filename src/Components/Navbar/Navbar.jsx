import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

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
                Services
              </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="works" spy={true} smooth={true}>
                Experience
              </Link>
                        </li>
                        <li><Link activeClass="active" to="portfolio" spy={true} smooth={true}>
                References
              </Link></li>
                        <li>
                        <Link activeClass="active" to="testimonials" spy={true} smooth={true}>
                Testimonials
              </Link>
                        </li>
                    </ul>
                </div>
                <button className="button n-button">Contact</button>
            </div>

        </div>
    )
}
export default Navbar;