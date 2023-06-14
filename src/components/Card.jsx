import React from 'react';
import style from './Card.module.css';

export default function Card({
	id,
	name,
	status,
	species,
	gender,
	origin,
	image,
	onClose,
}) {
	return (
		<div className={style.container}>
			<button className={style.button} onClick={() => onClose(id)}>
				X
			</button>
			<h2 className={style.name}> {id}</h2>
			<h2 className={style.nameCard}> {name}</h2>
			<h2 className={style.nameStatus}> {status}</h2>
			<h2 className={style.name}> {species}</h2>
			<h2 className={style.name}> {gender}</h2>
			<h2 className={style.name}> {origin}</h2>
			<img className={style.image} src={image} alt={name} />
		</div>
	);
}
