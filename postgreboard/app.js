//var morgan = require('morgan');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(morgan('dev'));

app.use(require('./postgreRouter'));
app.use(handleError);

app.listen(9050);

function handleError(err , req, res, next){
    res.status(err.code).send({msg:err.message});
}
