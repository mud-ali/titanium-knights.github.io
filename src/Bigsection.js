import { React, useState } from 'react';
import './css/bigsection.css';
import Play from './Play';

function Bigsection(props) {
    const [videoShow, setVideo] = useState(false);
    
    return (
        <div className="bigsection">
            <div className={"bigsection-"+props.side}>
                <div className="bigsection-image">
                    <img src={props.image.src} alt={props.image.alt} />
                </div>
            </div>
            <div className="bigsection-header">
                <h1>{props.title}</h1>
                {props.subtitle !== "" ? <h2>{props.subtitle}</h2> : null}
            </div>
            <div className="bigsection-content">
                {(props.content ?? "") !== "" ? <p>{props.content}</p> : null}
                {props.bullets !== undefined ? <ul>
                    {props.bullets.map((bullet, index) => {
                        return <li>{bullet}</li>
                    })}
                </ul> : null}
                {props.plus !== undefined ? <Play
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