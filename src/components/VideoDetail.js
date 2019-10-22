import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className=''>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
        </div>
    )
}

export default VideoDetail;