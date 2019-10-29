import React from 'react';

import './VideoDetail.css';

const VideoDetail = ({video}) => {
    if (!video) {
        return (
            <div>
                <div className="ui embed">
                    <div className='playingVideo'/>
                </div>
            </div>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(video);
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} allowFullScreen title='Video player' frameBorder="0" className='playingVideo'/>
            </div>
            <div className="playingVideoDetails">
                <div className="videoTitle">{video.snippet.title}</div>
                <hr></hr>
                <div className="publishDate">{video.snippet.publishedAt}</div>
                <div className="channelTitle">{video.snippet.channelTitle}</div>
                <div className="videoDescription">{video.snippet.description}</div>


            </div>
        </div>
    )
}

export default VideoDetail;