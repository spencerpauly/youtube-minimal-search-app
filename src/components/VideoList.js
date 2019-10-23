import React from 'react';
import VideoItem from './VideoItem';

import './VideoList.css'

const VideoList = ({videos , handleVideoSelect}) => {
    if (!videos || !videos.length) {
        return (
            <>
                <VideoItem key="" video="" />
                <VideoItem key="" video="" />
                <VideoItem key="" video="" />
                <VideoItem key="" video="" />
                <VideoItem key="" video="" />
            </>
        )
    }
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='videoListFlexbox'>{renderedVideos}</div>;
};
export default VideoList;