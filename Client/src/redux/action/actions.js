import { ADD_FAV, REMOVE_FAV } from './action_types';

// Action creator para agregar un favorito
export const addFav = (character) => {
	return {
		type: ADD_FAV,
		payload: character,
	};
};

// Action creator para eliminar un favorito
export const removeFav = (id) => {
	return {
		type: REMOVE_FAV,
		payload: id,
	};
};
