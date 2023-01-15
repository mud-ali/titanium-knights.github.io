import React from "react";
import "../css/card.css";

function Card(props) {
    let image = props.image !== undefined && props.image !== null
    ? {
        src: props.image[0],
        alt: props.image[1]
    } : null;

    let link = props.link !== undefined && props.link !== null
    ? {
        url: props.link[0],
        text: props.link[1]
    } : null;

    return (
        <div className={"card"+((props.settings?.forceColor)??"")}>
            <h3>{props.title}</h3>
            {image !== null ? <img src={image.src} alt={image.alt} /> : null}
            <div>{props.content}</div>
            {link !== null && link !== undefined ? <a href={link.url} target="_blank" rel="noreferrer">{link.text}</a> : null}
        </div>
    );
}

export default Card;