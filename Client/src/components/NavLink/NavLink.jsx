import { NavLink as NavLinkComp } from 'react-router-dom';
import style from './NavLink.module.css';

export const NavLink = ({ to, children, ...props }) => {
	return (
		<NavLinkComp
			{...props}
			to={to}
			className={({ isActive }) => (isActive ? style.isActive : style.inactive)}
		>
			{children}
		</NavLinkComp>
	);
};

export default NavLink;
