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

	const URL = 'http://localhost:3001/rickandmorty/';

	async function login({ email, password }) {
		console.log('Email recibido:', email);
		console.log('Password recibido:', password);
		debugger;
		try {
			const { data } = await axios(
				`${URL}login?email=${email}&password=${password}`
			);

			const { access } = data;

			setAccess(access);

			access && navigate('/home');
		} catch ({ response }) {
			const { data } = response;
			console.log(data);
			alert(data.message);
		}
	}

	useEffect(() => {
		!access && navigate('/');
	}, [access, navigate]);

	const logout = () => {
		setAccess(false);
		navigate('/');
	};

	const { pathname } = useLocation();
	const [characters, setCharacters] = useState([]);

	const onSearch = async (id) => {
		if (!id) {
			alert('Ingresa un ID');
			return;
		}

		if (characters.find((char) => char.id === parseInt(id))) {
			alert(`Ya existe el personaje con el id ${id}`);
			return;
		}

		try {
			const { data } = await axios(`${URL}character/${id}`);

			setCharacters((oldchars) => [...oldchars, data]);
		} catch (error) {
			//console.log(error.response); // ¡Aquí está el log!

			//console.log(error.response.status); // status del error
			//console.log(error.response.data);
			alert(error.response.data);
		}
	};

	function onClose(id) {
		setCharacters(characters.filter((char) => char.id !== id));
	}

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
