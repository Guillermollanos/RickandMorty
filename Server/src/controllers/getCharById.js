const axios = require('axios');
const errorHandler = require('../utils/error');

const URL_BASE = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const response = await axios.get(`${URL_BASE}${id}`);
		const { name, species, status, origin, image, gender } = response.data;
		//console.log(response.data);

		const character = { id, name, species, status, origin, image, gender };

		return res.status(200).json(character);
	} catch (error) {
		errorHandler(res, error);
	}
};

module.exports = getCharById;
