import { useState } from 'react';
import style from './Form.module.css';
import { validation } from './validation';

export const Form = ({ login }) => {
	const [errors, setErrors] = useState({});
	const [userData, setuserData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		setuserData({ ...userData, [property]: value });
		setErrors(validation(userData));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login(userData);
	};

	return (
		<div className={style.form}>
			<form onSubmit={handleSubmit}>
				<div className={style.inputContainer}>
					<label htmlFor='userName' className={style.LabelForm}>
						Email:
					</label>
					<input
						type='text'
						name='email'
						value={userData.email}
						onChange={handleChange}
						className={style.containerInput}
					/>
					<p className={style.textError}>{errors.email}</p>
				</div>
				<div className={style.inputContainer}>
					<label htmlFor='password' className={style.LabelForm}>
						Password:
					</label>
					<input
						type='password'
						name='password'
						value={userData.password}
						onChange={handleChange}
						className={style.containerInput}
					/>
					<p className={style.textError}>{errors.password}</p>
				</div>
				<div className={style.buttonContainer}>
					<button type='submit' className={style.buttonForm}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
