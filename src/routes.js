const express = require("express")

const UserController = require("./controllers/UserController")
const AddressesController = require("./controllers/AddressesController")
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

const routes = express.Router()

routes.get('/list', UserController.Index)
routes.post('/users', UserController.Store)

routes.post('/users/:user_id/addresses', AddressesController.Store)
routes.get('/users/:user_id/addresses', AddressesController.index)

routes.post('/users/:user_id/techs', TechController.store)
routes.get('/users/:user_id/techs', TechController.index)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/report', ReportController.show)

module.exports = routes