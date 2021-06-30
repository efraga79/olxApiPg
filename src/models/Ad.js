const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_DIALET}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`)

const modelSchema = sequelize.define('Ad', {
	idUser: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	state: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	category: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	dateCreated: {
		type: DataTypes.DATE
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	priceNegotiable: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	views: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	status: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
})

module.exports = modelSchema
