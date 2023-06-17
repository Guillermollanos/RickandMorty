import style from './About.module.css';

const About = () => {
	return (
		<div className={style.aboutContainer}>
			<h1>Acerca de la aplicación de Rick and Morty</h1>
			<p>
				Esta aplicación fue creada por Guillermo Llanos como proyecto para la
				escuela de programación Henry.
			</p>
			<p>
				La aplicación utiliza la API de Rick and Morty para mostrar información
				sobre los personajes.
			</p>
		</div>
	);
};

export default About;
