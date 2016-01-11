import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar'

// Youtube API Key
const API_KEY = 'AIzaSyAX2pI3fape_2-ltCLA0I-jgThLLxgzEoU';

// Step 1: Create new component
// const is not going to change. We are never going to reassign App down the line.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Step 2: Take the component's generated HTML and put it on the page (i.e. the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

