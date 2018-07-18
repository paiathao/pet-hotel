//get express
const express = require('express')

//get body-parser
const bodyParser = require('body-parser');

const petRouter = require('./routes/pets.router.js');

//make a server application
const app = express();
const PORT = process.env.PORT || 5000;

// serve our static assets
app.use(express.static('server/public'));

//set up body-parser
app.use(bodyParser.urlencoded({ extended : true}));

// angular use
app.use(bodyParser.json());

//Routes
app.use('/pets', petRouter);

// listen at an address
app.listen(PORT, function(){
    console.log('server is running on port:', PORT)
})