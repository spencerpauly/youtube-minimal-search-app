import React, {Component} from 'react';

import './VideoDetail.css';

export class VideoDetail extends Component {


    getMonth = (monthNumber) => {
        const monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return monthList[monthNumber-1];
    }

    render() {
        let video = this.props.video;

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
        let d = video.snippet.publishedAt.substring(8,10);
        let m = this.getMonth(video.snippet.publishedAt.substring(5,7));
        let y = video.snippet.publishedAt.substring(0,4);

        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} allowFullScreen title='Video player' frameBorder="0" className='playingVideo'/>
                </div>
                <div className="playingVideoDetails">
                    <div className="videoTitle">{video.snippet.title}</div>
                    <div className="publishDate">Uploaded {m} {d}, {y}</div>
                    <hr></hr>
                </div>
            </div>
        )
        
    }








}

export default VideoDetail;