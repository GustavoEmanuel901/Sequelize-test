const User = require('../models/User')

module.exports = {

    async Index(req, res) {
        const Users = await User.findAll()

        //console.log(Users)
        return res.json(Users)
    },

    async Store(req, res) {
        const { name, email } = req.body

        const user = await User.create({ name, email})

        return res.json(user)
    }
}