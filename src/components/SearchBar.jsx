import React, { Component } from 'react';

// Class-based component
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: 'Starting Value' };
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div className="search-bar">
				<input
					// Controlled component:
					// Whenever setState() is called our component immediately re-renders. So when the render function is called again the value 
					// of the input is updated to receive the new value of this.state.term. Finally the component finishes rendering and the new 
					// value of the input is visible on the screen. The take-away here is that when a user types something they did not actually 
					// change the input value - they only triggered an event.
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}
}

// Function-based component
// const SearchBar = () => {
// 	return <input />;
// }

export default SearchBar;