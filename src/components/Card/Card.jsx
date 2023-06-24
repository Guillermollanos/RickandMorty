import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

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
			<div className={style.buttonContainer}>
				<button className={style.button} onClick={() => onClose(id)}>
					X
				</button>
			</div>

			<Link to={`/detail/${id}`}>
				<h2 className={style.nameCard}>{name}</h2>
			</Link>
			<h2 className={style.name}> {id}</h2>
			<h2 className={style.nameStatus}> {status}</h2>
			<h2 className={style.name}> {species}</h2>
			<h2 className={style.name}> {gender}</h2>
			<h2 className={style.name}> {origin}</h2>
			<img className={style.image} src={image} alt={name} />
		</div>
	);
}
