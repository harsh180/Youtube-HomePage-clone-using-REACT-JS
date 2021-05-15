import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Video.css';

function Video({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="VideoCard">
            <img  className="Video_thumbnail" src={image} alt=""/>
    <div className="Video__info">
             <Avatar className="Video_avatar" 
             alt={channel} 
             src={channelImage}/>
            <div className="Video_text">
               <h4>{title}</h4>
               <p>{channel}</p>
               <p>
               {views} . {timestamp}
               </p>
            </div>
    </div>
        </div>
    )
}

export default Video
