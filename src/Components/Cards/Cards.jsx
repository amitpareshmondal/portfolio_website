import React from "react";
import "./Cards.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Card({emoji, heading, details}){
    return (
        <div className="card">
            <img src={emoji}/>
            <span>{heading}</span>
            <span>{details}</span>
            <AnchorLink href='#contact'>
            <button className="c-button">NEED HELP</button>
            </AnchorLink>
            
        </div>
    )
}
export default Card;