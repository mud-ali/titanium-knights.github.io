import React from "react";
import "../css/card.css";
import Card from "./Card";

function Cardsection(props) {
    return (
        <div className="cardsection">
            {props.cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    image={card.image !== null ? [card.image[0], card.image[1]]: null}
                    content={card.content}
                />
            ))}
        </div>
    );
}

export default Cardsection;