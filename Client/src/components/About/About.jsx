import style from './About.module.css';

const About = () => {
	return (
		<div className={style.aboutContainer}>
			<h1 className={style.titleAbout}>
				Acerca de la aplicación de Rick and Morty
			</h1>
			<p className={style.textAbout}>
				Esta aplicación fue creada por Guillermo Llanos como proyecto para la
				escuela de programación Henry.
			</p>
			<p className={style.textAbout}>
				La aplicación utiliza la API de Rick and Morty para mostrar información
				sobre los personajes, se realizo con Javascritp, CSS, React.
			</p>
		</div>
	);
};

export default About;
