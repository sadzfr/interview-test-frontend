import React, { useState } from 'react';
import Search from './Search';

const SearchContainer = ({ onSearch }: { onSearch: any }) => {
	const [searchValue, setSearchValue] = useState('');
	const onSearchChange = (e: any) => {
		setSearchValue(e.target.value)
	}
	const handleSearchSubmit = () => {
		onSearch(searchValue)
	}

	return <Search
		searchValue={searchValue}
		onSearchChange={onSearchChange}
		handleSearchSubmit={handleSearchSubmit}
	/>;
};

export default SearchContainer;
