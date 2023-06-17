import './App.css';
import { Nav } from './components/NavBar/Nav';
import Cards from './components/Cards/Cards';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import { Detail } from './components/Detail/Detail';

function App() {
	const [characters, setCharacters] = useState([]);

	function onSearch(id) {
		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
				if (!characters.find((char) => char.id === data.id)) {
					if (data.name) {
						setCharacters((oldChars) => [...oldChars, data]);
					}
				} else {
					alert(`ya existe el personaje con el id ${id}`);
				}
			})
			.catch(() => window.alert('¡No hay personajes con este ID!'));
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
			</Routes>
		</div>
	);
}
export default App;
