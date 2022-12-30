import React from "react";
import './css/bigsection.css';

function Play(props) {
    return (
        <div className="play" onClick={()=>{
            props.setVideo(!props.videoShow);
        }}>
            {props.videoShow ? <div className="bg-cover"></div> : null}
            <i className={"fa-solid fa-"+(props.videoShow?"xmark":"play")}></i>
            {props.videoShow ? <iframe
                title={props.videoTitle}
                className="play-video"
                src={props.videoSrc}
            ></iframe> : null}
        </div>
    )
}

export default Play;