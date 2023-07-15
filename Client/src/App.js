import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';
import axios from 'axios';
import Favorites from './components/Favorites/Favorites';

const App = () => {
	const navigate = useNavigate();
	const [access, setAccess] = useState(false);
	const EMAIL = 'guille@gmail.com';
	const PASSWORD = '1804Dani';

	useEffect(() => {
		!access && navigate('/');
	}, [access, navigate]);

	const login = (userData) => {
		if (userData.password === PASSWORD && userData.username === EMAIL) {
			setAccess(true);
			navigate('/home');
		}
	};

	const logout = () => {
		setAccess(false);
		navigate('/');
	};

	const { pathname } = useLocation();
	const [characters, setCharacters] = useState([]);

	const onSearch = (id) => {
		if (!id) {
			alert('Ingresa un ID');
			return;
		}

		if (characters.find((char) => char.id === parseInt(id))) {
			alert(`Ya existe el personaje con el id ${id}`);
			return;
		}

		axios
			.get(`http://localhost:3001/rickandmorty/character/${id}`)
			.then(({ data }) => {
				if (data.name) {
					setCharacters((oldChars) => [...oldChars, data]);
				}
			})
			.catch((err) => alert(err.response.data.error));
	};

	const onClose = (id) => {
		setCharacters((oldChars) =>
			oldChars.filter((char) => char.id !== Number(id))
		);
	};

	return (
		<div className='App'>
			{pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}

			<Routes>
				<Route
					path='/home'
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path='/about' element={<About />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='*' element={<Error404 />} />
				<Route path='/Favorites' element={<Favorites />} />
				<Route path='/' element={<Form login={login} />} />
			</Routes>
		</div>
	);
};

export default App;
