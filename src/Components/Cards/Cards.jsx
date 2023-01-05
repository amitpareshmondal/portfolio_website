import React from "react";
import "./Cards.css"
function Card({emoji, heading, details}){
    return (
        <div className="card">
            <img src={emoji}/>
            <span>{heading}</span>
            <span>{details}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    )
}
export default Card;