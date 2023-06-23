import { useState } from 'react';
import style from './Form.module.css';
import { validation } from './validation';

export const Form = ({ login }) => {
	const [errors, setErrors] = useState({});
	const [userData, setuserData] = useState({
		username: '',
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
		<form onSubmit={handleSubmit}>
			<div className={style.formWrapper}>
				<label htmlFor='userName'>Email:</label>
				<input
					type='text'
					name='username'
					value={userData.username}
					onChange={handleChange}
				/>
				<p>{errors.username}</p>
			</div>
			<div className={style.formWrapper}>
				<label htmlFor='password'>Password:</label>
				<input
					type='text'
					name='password'
					value={userData.password}
					onChange={handleChange}
				/>
				<p>{errors.password}</p>
			</div>
			<div className={style.buttonWrapper}>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
};

export default Form;
