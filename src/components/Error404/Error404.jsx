import style from './Error.module.css';

export const Error404 = () => {
	return (
		<div className={style.containerError}>
			<h1 className={style.textError}>Error 404</h1>
		</div>
	);
};

export default Error404;
