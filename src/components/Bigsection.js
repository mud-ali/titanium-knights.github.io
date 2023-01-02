import { React, useState } from 'react';
import '../css/bigsection.css';
import Play from './Play';
import Card from './Card';

function Bigsection(props) {
    const [videoShow, setVideo] = useState(false);
    
    return (
        <div className="bigsection">
            <div className={"bigsection-"+props.settings.side}>
                <div className="bigsection-image">
                    {props.image !== undefined ? <img width={props.image.size??""} src={props.image.src} alt={props.image.alt} /> : null}
                </div>
            </div>

            <div className="bigsection-header">
                <h1>{props.title}</h1>
                {props.subtitle !== "" ? <h2 style={{fontSize:props.settings.subtitleSize}}>{props.subtitle}</h2> : null}
            </div>

            <div className="bigsection-content">
                {(props.content ?? "") !== "" ? <p>{props.content}</p> : null}

                {props.bullets !== undefined ? <ul>
                    {props.bullets.map((bullet, index) => {
                        return (
                            <span key={index+"span"}>
                                <li key={index}>{bullet.header}</li>
                                <ul key={index+"ul"}>
                                    {bullet.content.map((content, bindex) => {
                                        return (
                                            <li key={"n"+bindex}>{content}</li>
                                        )
                                    })}
                                </ul> <br/>
                            </span>
                        )
                    })}
                </ul> : null}
                {props.cards !== undefined && props.cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        image={card.image ? {src: card.image.src, alt: card.image.alt} : null}
                        content={card.content}
                        link={card.link}
                        settings={card.settings}
                    />
                ))}

                {props.plus?.video !== undefined ? <Play
                    videoTitle={props.title}
                    videoShow={videoShow}
                    setVideo={setVideo}
                    videoSrc={props.plus.video}
                /> : null}
            </div>
        </div>
    );
}

export default Bigsection;