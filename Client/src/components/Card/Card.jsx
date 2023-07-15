import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/action/actions';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Card({
	id,
	name,
	status,
	species,
	gender,
	origin,
	image,
	onClose,
	addFav,
	removeFav,
	myFavorites,
}) {
	const { pathname } = useLocation();
	const [isFav, setIsFav] = useState(false);
	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			removeFav(id);
		} else {
			setIsFav(true);
			addFav({ id, name, status, species, gender, origin, image });
		}
	};
	return (
		<div className={style.container}>
			<div className={style.buttonContainer}>
				{pathname === '/home' && (
					<button className={style.button} onClick={() => onClose(id)}>
						X
					</button>
				)}
			</div>
			{isFav ? (
				<button onClick={handleFavorite}>❤️</button>
			) : (
				<button onClick={handleFavorite}>🤍</button>
			)}

			<Link to={`/detail/${id}`}>
				<h2 className={style.nameCard}>{name}</h2>
			</Link>
			<h2 className={style.name}> {id}</h2>
			<h2 className={style.nameStatus}> {status}</h2>
			<h2 className={style.name}> {species}</h2>
			<h2 className={style.name}> {gender}</h2>
			<h2 className={style.name}> {origin}</h2>
			<img className={style.image} src={image} alt={name} />
			<button className={style.favButton} onClick={handleFavorite}>
				{isFav ? 'Remove from Favorites' : 'Add to Favorites'}
			</button>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};
export function mapDispatchToProps(dispatch) {
	return {
		addFav: function (characters) {
			dispatch(addFav(characters));
		},
		removeFav: function (id) {
			dispatch(removeFav(id));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
