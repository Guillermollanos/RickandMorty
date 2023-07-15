import React, { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
	const [id, setId] = useState('');
	const handleChange = (event) => {
		//console.log(event.target.value);
		setId(event.target.value);
	};

	return (
		<div className={style.container}>
			<input
				type='search'
				onChange={handleChange}
				placeholder='Ingresa un ID...'
			/>
			<button className={style.button} onClick={() => onSearch(id)}>
				Agregar
			</button>
		</div>
	);
}
