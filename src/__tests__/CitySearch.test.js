// src/__tests__/CitySearch.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
	let CitySearchComponent;
	beforeEach(() => {
		CitySearchComponent = render(<CitySearch />);
	});
	test('renders text input', () => {
		const cityTextBox = CitySearchComponent.queryByRole('textbox');
		expect(cityTextBox).toBeInTheDocument();
		expect(cityTextBox).toHaveClass('city');
	});

	test('suggestions list is hidden by default', () => {
		const suggestionList = CitySearchComponent.queryByRole('list');
		expect(suggestionList).not.toBeInTheDocument();
	});

	test('renders a list of suggestions when city textbox gains focus', async () => {
		const user = userEvent.setup();
		const cityTextBox = CitySearchComponent.queryByRole('textbox');
		fireEvent.focus(cityTextBox);
		const suggestionList = CitySearchComponent.queryByRole('list');
		expect(suggestionList).toBeInTheDocument();
		expect(suggestionList).toHaveClass('suggestions');
	});
});
