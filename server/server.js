const express = require('express');
const app = express();
const petsRouter = require('./routes/pets.router.js');
const ownersRouter = require('./routes/owners.router.js');

const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Routes
app.use('/pets', petsRouter);
app.use('/owners', ownersRouter);


//Listen
app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
})