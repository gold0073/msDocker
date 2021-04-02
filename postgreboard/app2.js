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




const { Client } = require("pg"); 
const Query = require('pg').Query;

var client = new Client({host: 'localhost',
user: 'postgres',
password: 'park0070!',
database: 'monolithic',
port : '5432' });

client.connect(err => { if (err) { console.error('connection error', err.stack) } else { console.log('success!') } });

router.get('/read', function(req, res, next) { 

    //console.log("aaa"); 

    var asdf =" asdf ";
    console.log("asdf"); 

    const a1 = "a";
    console.log(a1);

    //전체리스트
    var pg_query = 
    ` SELECT * FROM CONTENT CT 
        INNER JOIN USERS U on U.user_id = CT.user_id 
        ORDER BY CT.created_at DESC
    `;

    console.log("Query ==>",pg_query);

    /*
    client.query(pg_query);
    var rows = []; 
    query.on("row",row=>{ rows.push(row); });
     
    query.on('end', () => { 
        console.log(rows); 
        console.log('query done'); 
        res.send(rows); res.status(200).end(); 
    }); 

    query.on('error', err => { console.error(err.stack) });
    */

    }
)


function handleError(err , req, res, next){
    res.status(err.code).send({msg:err.message});
}