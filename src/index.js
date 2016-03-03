import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

// Youtube API Key
// "const" means that a variable is not going to be change or reassigned further down the road.
const API_KEY = 'AIzaSyAX2pI3fape_2-ltCLA0I-jgThLLxgzEoU';

// Step 1: Create new component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }); // equivalent to "videos: videos"
    });
  }

	render() {
		return (
			<div>
				<SearchBar />
        <VideoList videos={this.state.videos} />
			</div>
		);
	}	
}

// Step 2: Take the component's generated HTML and put it on the page (i.e. the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
