import React from 'react';
import '../style/video.css';
import './VideoItem.css'

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className='videoItemFlexbox'>
            <img className='videoImage' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className="videoDetailsContainer">
                <div className="videoTitle">{video.snippet.title}</div>
                <div className="videoCreator">{video.snippet.channelTitle}</div>
            </div>
        </div>
    )
};
export default VideoItem;