// src/components/CitySearch.js
import React from 'react';
import { useState } from 'react';

const CitySearch = ({ allLocations }) => {
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [query, setQuery] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	const handleInputChanged = (event) => {
		const value = event.target.value;
		const filteredLocations = allLocations
			? allLocations.filter((location) => {
					return (
						location.toUpperCase().indexOf(value.toUpperCase()) > -1
					);
			  })
			: [];

		setQuery(value);
		setSuggestions(filteredLocations);
		setShowSuggestions(true); // to show the list
	};

	const handleItemClicked = (value) => {
		setQuery(value);
		setShowSuggestions(false); // to hide the list
	};

	return (
		<div id="city-search">
			<label htmlFor="citySearchText">Your City</label>
			<input
				id="citySearchText"
				type="text"
				className="city"
				placeholder="Search for a city"
				value={query}
				onFocus={() => setShowSuggestions(true)}
				onChange={handleInputChanged}
			/>
			{showSuggestions ? (
				<ul className="suggestions">
					{suggestions.map((suggestion) => {
						return (
							<li
								onClick={() => handleItemClicked(suggestion)}
								key={suggestion}
							>
								{suggestion}
							</li>
						);
					})}
					<li
						key="See all cities"
						onClick={() => handleItemClicked('See all cities')}
					>
						<b>See all cities</b>
					</li>
				</ul>
			) : null}
		</div>
	);
};

export default CitySearch;
