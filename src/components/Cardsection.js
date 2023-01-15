import React from "react";
import "../css/card.css";
import Card from "./Card";

function Cardsection(props) {
    return (
        <div className="cardsection" data-overrideslant={props.noSlant === true ? "true": "false"}
            data-color={props.color === "dark" ? "dark" : props.color === "light" ? "light" : "false"}>
            {props.cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    image={card.image != null ? [card.image[0], card.image[1]]: null}
                    link={card.link != null ? [card.link.url, card.link.text]: null}
                    content={card.content}
                />
            ))}
        </div>
    );
}

export default Cardsection;