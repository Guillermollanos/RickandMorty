import React from 'react';
import style from './Nav.module.css';
import SearchBar from './SearchBar';

export const Nav = ({ onSearch }) => {
	return (
		<div className={style.container}>
			<SearchBar onSearch={onSearch} />
		</div>
	);
};
