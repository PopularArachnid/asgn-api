let express = require('express');
let app = express();
let routes = require('./asgn-router');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var port = 8080;

app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost/assignments-api', {
    useNewUrlParser: true
});

var db = mongoose.connection;

if (!db) {
    console.log("Error connecting to the database");
} else {
    console.log("Connected to database.")
}

app.use('/api', routes);

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running Assignments API on port " + port);
});