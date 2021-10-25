const routes = require('express').Router()

//Routes
routes.get('/', function(req,res){
    res.send('Starting route')
});


module.exports = routes;