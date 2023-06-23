import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Detail = () => {
	const { id } = useParams();
	const [characterDetail, setcharacterDetail] = useState({});
	useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${id}`).then(
			({ data }) => {
				if (data.name) {
					setcharacterDetail(data);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			}
		);
		return setcharacterDetail({});
	}, [id]);
	return (
		<div>
			<h4>{characterDetail.name}</h4>
			<h4>{characterDetail.status}</h4>
			<h4>{characterDetail.species}</h4>
			<h4>{characterDetail.origin?.name}</h4>
			<img src={characterDetail.image} alt={characterDetail.name} />
		</div>
	);
};

export default Detail;
