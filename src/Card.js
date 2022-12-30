import React from "react";
import "./css/card.css";

function Card(props) {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            {props.image !== null ? <img src={props.image.src} alt={props.image.alt} /> : null}
            <p>{props.content}</p>
        </div>
    );
}

export default Card;