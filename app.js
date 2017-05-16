const express = require("express");
const bodyParser = require('body-parser');
const routes = require('./routes/main');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

mongoose.connect(config.databasepath);

const port = 4001;


mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {

  console.log("Database connected");

});

mongoose.connection.on('error', (err) => {

  console.log('error connecting DB');

});

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

var distDir = __dirname + "/public/";
app.use(express.static(distDir));



app.use((error, req, res, next) => {
  console.log(error);//this will help us understand what are the options to display it to user.
  res.send({errcode: 101, message: error.message});
});



app.listen(process.env.PORT || port, () => {
    console.log("Server is listening at port "+ port);
});
