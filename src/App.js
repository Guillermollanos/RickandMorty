import './App.css';
import { Nav } from './components/NavBar/Nav';
import Cards from './components/Cards/Cards';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import { Detail } from './components/Detail/Detail';
import { Error404 } from './components/Error404/Error404';

function App() {
	const [characters, setCharacters] = useState([]);

	function onSearch(id) {
		if (!id) {
			alert('Ingresa un ID');
			return;
		}

		if (characters.find((char) => char.id === parseInt(id))) {
			alert(`Ya existe el personaje con el id ${id}`);
			return;
		}

		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
				if (data.name) {
					setCharacters((oldChars) => [...oldChars, data]);
				}
			})
			.catch((err) => alert(err.response.data.error));
	}

	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== Number(id)));
	};
	return (
		<div className='App'>
			<Nav onSearch={onSearch} />
			<Routes>
				<Route
					path='/home'
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path='/about' element={<About />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</div>
	);
}
export default App;
