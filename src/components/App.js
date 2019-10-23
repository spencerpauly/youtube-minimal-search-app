import React from 'react';

import NavigationBar from '../layout/NavigationBar';
import Header from '../layout/Header';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import {Image} from 'cloudinary-react';

import './App.css';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        showHeader: true,
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items,
            showHeader: false,
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    showHeader = () => {
        if (this.state.showHeader) {
            return (<Header visible="true"/>)
        } else {
            return (<></>)
        }
    }

    render() {
        return (
            <>
                <NavigationBar>
                    {/* Nav link items here */}
                </NavigationBar>
                <Header isVisible={this.state.showHeader ? 'true' : 'false' } />
                <div className="searchFlexbox">
                    <div className="searchImageFlexItem">
                        <Image className="searchImage" cloudName="spencerpauly" publicId="projects/youtubeicon2_v62eb1.png"/>

                    </div>
                    <div className="searchbarFlexItem">
                        <SearchBar handleFormSubmit={this.handleSubmit}/>
                    </div>
                </div>
                <div className="videoFlexbox">
                    <div className="videoSection">
                        <VideoDetail video={this.state.selectedVideo}/>

                    </div>
                    <div className="videoListSection">
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>

                    </div>
                </div>
                {/* <div className='ui container' style={{marginTop: '1em'}}>
                    <SearchBar handleFormSubmit={this.handleSubmit}/>
                    <div className='ui grid'>
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div className="five wide column">
                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                            </div>
                        </div>
                    </div>
                </div> */}
            </>
        )
    }
}

export default App;