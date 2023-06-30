import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

export const Favorites = ({ myFavorites }) => {
	return (
		<div>
			{myFavorites.map((char) => (
				<Card
					key={char.id}
					id={char.id}
					name={char.name}
					status={char.status}
					species={char.species}
					gender={char.gender}
					origin={char.origin?.name}
					image={char.image}
					onClose={char.onClose}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

export default connect(mapStateToProps)(Favorites);
