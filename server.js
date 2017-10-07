var express = require('express'),
var cors = require('cors');
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
users = require('./api/models/userModel'),
debts = require('./api/models/debtModel'); //created model loading here
credits = require('./api/models/creditModel'); //created model loading here


bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds115671.mlab.com:15671/shivanandbuddarthi'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:'https://shivanandbuddarthi.github.io'}))


var routes = require('./api/routes/appRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('RESTful API server started on: ' + port);