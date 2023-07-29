const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index');
const cors = require('cors');

const server = express();
server.use(morgan('dev'));
server.use(cors());
const PORT = 3001;

// Parseo del body a JSON
server.use(express.json());

// Agrega /rickandmorty a cada ruta
server.use('/rickandmorty', router);

// ...

server.listen(PORT, () => {
	console.log(`Server raised in port: ${PORT}`);
});
