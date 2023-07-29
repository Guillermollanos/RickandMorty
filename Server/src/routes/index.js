// routes/index.js

const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
// routes/index.js

const router = Router();

router.get('/login', login);

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);

router.get('/character/:id', getCharById);

module.exports = router;
