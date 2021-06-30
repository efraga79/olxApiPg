const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_DIALET}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`)

const modelSchema = sequelize.define('Image', {
	idAd: DataTypes.INTEGER,
	url: DataTypes.INTEGER,
	default: DataTypes.BOOLEAN
})

module.exports = modelSchema
