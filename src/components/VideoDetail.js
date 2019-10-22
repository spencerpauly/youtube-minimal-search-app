import React from 'react';

import './VideoDetail.css';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className="playingVideoContainer ui embed">
                <iframe src={videoSrc} allowFullScreen title='Video player' frameborder="0" className='playingVideo'/>
            </div>
        </div>
    )
}

export default VideoDetail;