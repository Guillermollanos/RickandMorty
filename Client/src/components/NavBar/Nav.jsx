import React from 'react';
import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { NavLink } from '../NavLink/NavLink';

const Nav = ({ onSearch, logout }) => {
	return (
		<div className={style.container}>
			<NavLink to='/about'>
				<button className={style.buttonHome}>About</button>
			</NavLink>
			<Link to='/home'>
				<button className={style.buttonHome}>Home</button>
			</Link>
			<NavLink to='/Favorites'>
				<button className={style.buttonHome}>Favorites</button>
			</NavLink>
			<SearchBar onSearch={onSearch} />
			<button onClick={logout} className={style.buttonSearch}>
				Log out
			</button>
		</div>
	);
};

export default Nav;
