import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// Youtube API Key
// "const" means that a variable is not going to be change or reassigned further down the road.
const API_KEY = 'AIzaSyAX2pI3fape_2-ltCLA0I-jgThLLxgzEoU';

// Step 1: Create new component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: []
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // equivalent to "videos: videos"
    });
  }

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
			</div>
		);
	}	
}

// Step 2: Take the component's generated HTML and put it on the page (i.e. the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
