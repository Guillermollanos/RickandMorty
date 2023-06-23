import React from 'react';
import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { NavLink } from '../NavLink/NavLink';

const Nav = ({ onSearch, logout }) => {
	return (
		<div className={style.container}>
			<NavLink to='/about'>
				<span>About</span>
			</NavLink>
			<Link to='/home'>
				<button>Home</button>
			</Link>
			<SearchBar onSearch={onSearch} />
			<button onClick={logout}>Log out</button>
		</div>
	);
};

export default Nav;
