import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { NavLink } from '../NavLink/NavLink';

export const Nav = ({ onSearch }) => {
	return (
		<div className={style.container}>
			<NavLink to={'/about'}>
				<span>About</span>
			</NavLink>
			<Link to={'/home'}>
				<button>Home</button>
			</Link>
			<SearchBar onSearch={onSearch} />
		</div>
	);
};
