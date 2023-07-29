let myFavorites = [];

const postFav = (req, res) => {
	const character = req.body;

	myFavorites.push(character);
	console.log(myFavorites);

	return res.status(201).json(myFavorites);
};

const deleteFav = (req, res) => {
	const { id } = req.params;

	myFavorites = myFavorites.filter((character) => character.id !== id);
	console.log(myFavorites);

	return res.status(204).json(myFavorites);

	// O res.status(204).json(myFavorites) si no se envía contenido.
};

module.exports = {
	postFav,
	deleteFav,
};
