import { useState } from 'react';
import style from './Form.module.css';
import { validation } from './validation';

export const Form = () => {
	const [errors, setErrors] = useState({});
	const [userData, setuserData] = useState({
		username: '',
		password: '',
	});

	const handleChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setErrors(
			validation({ ...userData, [event.target.name]: event.target.value })
		);
		setuserData({ ...userData, [property]: value });
	};

	const submitHandle = (event) => {
		event.preventDefault();
	};
	return (
		<div className={`${style.container} ${style.centered}`}>
			<div className={style.formWrapper}>
				<form onSubmit={submitHandle}>
					<div className={style.formWrapper}>
						<label htmlFor='userName'>
							Email:
							<input
								type='text'
								name='username'
								value={userData.username}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div className={style.formWrapper}>
						<label htmlFor='password'>
							Password:
							<input
								type='text'
								name='password'
								value={userData.password}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div className={style.buttonWrapper}>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
