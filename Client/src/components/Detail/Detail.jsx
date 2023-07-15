import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './Detail.module.css';

export const Detail = () => {
	const { id } = useParams();
	const [characterDetail, setCharacterDetail] = useState({});

	useEffect(() => {
		axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
			({ data }) => {
				if (data.name) {
					setCharacterDetail(data);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			}
		);
	}, [id]);

	return (
		<div className={style.container}>
			<h4 className={`${style.text} ${style.name}`}>{characterDetail.name}</h4>
			<div className={style.ImgText}>
				<div className={style.textContainer}>
					<h4 className={style.text}>{characterDetail.status}</h4>
					<h4 className={style.text}>{characterDetail.species}</h4>
					<h4 className={style.text}>{characterDetail.origin?.name}</h4>
				</div>
				<img
					src={characterDetail.image}
					alt={characterDetail.name}
					className={style.imgContainer}
				/>
			</div>
		</div>
	);
};

export default Detail;
