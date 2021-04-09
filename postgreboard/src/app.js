var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

<<<<<<< HEAD
/*
app.get('/', function(req, res) {
    res.send('hello world');
});
*/

var sample = require('./sample');
app.use(sample);

var postreRouter = require('./postgreRouter');
app.use(postreRouter);


app.use(handleError);

app.listen(3000);
=======
//app.use(require('./postgreRouter'));
app.use(require('./sample'));
app.use(handleError);

app.listen(9050);
>>>>>>> parent of 252c9e2 (commit docker-compose Rest-Api)

function handleError(err , req, res, next){
    res.status(err.code).send({msg:err.message});
}
