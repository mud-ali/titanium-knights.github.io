import React from "react";
import "./css/card.css";
import Card from "./Card";

function Cardsection(props) {
    return (
        <div className="cardsection">
            {props.cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    image={card.image ? {src: card.image.src, alt: card.image.alt} : null}
                    content={card.content}
                />
            ))}
        </div>
    );
}

export default Cardsection;