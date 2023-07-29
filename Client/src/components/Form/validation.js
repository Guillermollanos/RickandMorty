const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el email
const passwordRegex = /^(?=.*\d).{6,10}$/; // Expresión regular para validar la contraseña

export const validation = (data) => {
	const errors = {};
	// Validación del nombre de usuario (email)

	if (!data.email) errors.email = 'El nombre de usuario no puede estar vacío.';

	if (data.email.length > 35)
		errors.email = 'El nombre de usuario no puede tener más de 35 caracteres.';

	if (!emailRegex.test(data.email))
		errors.email = 'El nombre de usuario debe ser un email válido.';

	// Validación de la contraseña

	if (!passwordRegex.test(data.password))
		errors.password =
			'La contraseña debe tener al menos un número y tener una longitud entre 6 y 10 caracteres.';

	return errors;
};
