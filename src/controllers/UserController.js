const bcrypt = require('bcrypt')
const { validationResult, matchedData } = require('express-validator')
const Ad = require('../models/Ad')
const Category = require('../models/Category')
const State = require('../models/State')
const User = require('../models/User')

module.exports = {
	getStates: async (req, res) => {
		let states = await State.find()
		res.json({states})
	},
	info: async (req, res) => {
		let token = req.query.token
		const user = await User.findOne({token})
		const state = await State.findById(user.state)
		const ad = await Ad.find({idUser: user._id.toString()})

		let adList = []
		for(let i in ad) {

			const cat = await Category.findById(ad[i].category)
			adList.push({ ...ad[i], category: cat.slug })
		}

		res.json({
			name: user.name,
			email: user.email,
			state: state.name,
			ads: adList
		})
	},
	editAction: async (req, res) => {
		const errors = validationResult(req)
		if(!errors.isEmpty()) {
			res.json({error: errors.mapped()})
			return
		}
		const data = matchedData(req)
		let updates = {}

		if(data.name) {
			updates.name = data.name
		}
		if(data.email) {
			const emailCheck = await User.findOne({email: data.email})
			if(emailCheck) {
				res.json({error: 'Email já existente!'})
				return
			}
			updates.email = data.email
		}
		if(data.password) {
			updates.passwordHash = await bcrypt.hash(data.password, 10)
		}
		if(data.state) {
			const stateCheck = await State.findById(data.state)
			if(!stateCheck) {
				res.json({error: 'Estado não Existe'})
				return
			}
			updates.state = data.state
			
		}

		await User.findOneAndUpdate({token: data.token}, {$set: updates})

		res.json({status: true})
	},

}