import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export const Nav = ({ onSearch }) => {
	return (
		<div className={style.container}>
			<Link to={'/about'}>
				<button>About</button>
			</Link>
			<Link to={'/home'}>
				<button>Home</button>
			</Link>
			<SearchBar onSearch={onSearch} />
		</div>
	);
};
