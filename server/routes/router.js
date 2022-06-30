const express = require('express')
const route = express.Router()
const services = require('../services/render.js')
const controller = require('../controller/controller.js')

/*
* @description Root Route
* @method GET/ 
*/
route.get('/', services.homeRoute);

/*
* @description add_user
* @method GET/add_user 
*/
route.get('/add_user', services.addUserRoute);

/*
* @description update_user
* @method GET/update_user 
*/
route.get('/update_user',services.updateUserRoute);


//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;