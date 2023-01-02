import React from "react";
import "../css/card.css";

function Card(props) {
    return (
        <div className={"card "+props.settings?.forceColor??""}>
            <h3>{props.title}</h3>
            {props.image !== null ? <img src={props.image.src} alt={props.image.alt} /> : null}
            <p>{props.content}</p>
            {props.link !== undefined ? <a href={props.link.url} target="_blank" rel="noreferrer">{props.link.text}</a> : null}
        </div>
    );
}

export default Card;