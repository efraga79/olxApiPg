const { checkSchema } = require('express-validator')

module.exports = {
	signin: checkSchema({
		email: {
			isEmail: true,
			normalizeEmail: true,
			notEmpty: true,
			errorMessage: 'Email Inválido'
		},
		password: {
			isLength: {
				options: { min: 3 }
			},
			errorMessage: 'Senha precisa ter pelo menos 3 caracteres'
		}
	}),
	signup: checkSchema({
		name: {
			trim: true,
			isLength: {
				options: { min: 2 }
			},
			errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
		},
		email: {
			isEmail: true,
			normalizeEmail: true,
			notEmpty: true,
			errorMessage: 'Email Inválido'
		},
		password: {
			isLength: {
				options: { min: 3 }
			},
			errorMessage: 'Senha precisa ter pelo menos 3 caracteres'
		},
		state: {
			notEmpty: true,
			errorMessage: 'Estado não preenchido'
		}
	})
}