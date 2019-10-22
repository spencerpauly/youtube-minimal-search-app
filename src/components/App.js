import React from 'react';

import NavigationBar from '../layout/NavigationBar';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
        //
    }

    render() {
        return (
            <>
                <NavigationBar>
                    {/* Nav link items here */}
                </NavigationBar>
                <div className='ui container' style={{marginTop: '1em'}}>
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
                </div>
            </>
        )
    }
}

export default App;