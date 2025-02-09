import React from 'react';
import '../style/video.css';
import './VideoItem.css'

const VideoItem = ({video , handleVideoSelect}) => {
    if (!video) {
        return (
            <div className="videoItemFlexbox">
                <div className='videoPlaceholderImage'></div>
                <div className="videoDetailsContainer">
                    <div className="videoTitle blurryText">Example video name here pls hire me</div>
                    <div className="videoCreator blurryText">Spencer Pauly</div>
                </div>
            </div>
        )
    }

    return (
        <div onClick={ () => handleVideoSelect(video)} className='videoItemFlexbox'>
            <div className="videoImageContainer">
                <img src={video.snippet.thumbnails.medium.url} width="160px" height="90px" alt="" />
            </div>
            <div className="videoDetailsContainer">
                <div className="videoTitle">{video.snippet.title}</div>
                <div className="videoCreator">{video.snippet.channelTitle}</div>
            </div>
        </div>
    )
};
export default VideoItem;