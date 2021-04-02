var express = require('express');
var router = express.Router();

const { Client } = require("pg");
const Query = require('pg').Query;

var client = new Client(
    { 
        host: 'localhost',
        user: 'postgres',
        password: 'park0070!',
        database: 'monolithic',
        port : '5432'
    }
);

client.connect(err => { if (err) { console.error('connection error', err.stack) } else { console.log('success!') } });



router.get('/read', function(req, res, next) { 
    //전체리스트
    var pg_query = 
    ` SELECT * FROM CONTENT CT 
        INNER JOIN USERS U on U.user_id = CT.user_id 
        ORDER BY CT.created_at DESC
    `;

    console.log("Query ==>",pg_query);

    const query = new Query(pg_query);
    client.query(query);
    var rows = []; 
    query.on("row",row=>{ rows.push(row); });
    
    query.on('end', () => { 
        console.log(rows); 
        console.log('query done'); 
        res.send(rows); res.status(200).end(); 
    }); 

    query.on('error', err => { 
        console.error(err.stack) 
    });
});




/*   PostgresDB  */
//const configjs = require("./config")
//const pool = configjs.postgre_pool;


/*
//Search list
router.get('/ms_contentlist', contentlist);

//Search Id
router.get('/ms_contentlist_id', contentlist_id);

//add Movie
router.post('/ms_addContent' , addContent);

//update Movie
router.post('/ms_updateContent' , updateContent);

//DeleteMovie
router.delete('/deleteContent',deleteContent);



//Find Type1
function contentlist(req,res,next){ 
    var response = {
        key: params.key,
        errorcode: 0,
        errormessage: "success"
    };

    //전체리스트
    const pg_query = 
    ` SELECT * FROM CONTENT CT 
        INNER JOIN USERS U on U.user_id = CT.user_id 
        ORDER BY CT.created_at DESC
    `;
    console.log("Query ==>",pg_query);

    pool.query(pg_query, (error, results) => {
        if (error || results.rowCount == 0) {
            response.errorcode = 1;
            response.errormessage = error ? error : "no data";
            console.log("Data ===>","No data");
        } else {
            response.results = results.rows;
        }
        next(response);
    });

}

function contentlist_id(req,res,next){ 
    
    pg.connect(con, function(err, client) 
    {
        var param_contentid = req.body["content_id"] || req.body.content_id || params.content_id;
       
        var pg_query = 
            ` SELECT * FROM CONTENT CT 
            INNER JOIN USERS U on U.user_id = CT.user_id 
            WHERE CT.content_id = $1`;

        var query = client.query(pg_query,[param_contentid]); 
        var rows = []; 
        query.on('row', function(row){ 
            rows.push(row); 
        }); 
        
        query.on('end', function(row,err){ 
            response.render('index', { 
                title: 'Express', data:rows 
            }); 
        }); 
        
        query.on('error', function(error) { 
            console.log("ERROR!!" + error); 
            response.render('index', {
                title: title, data: null, message: "ERROR is occured!" 
            }); 
        });
        
    });
}

function addContent(req, res , next ){
    var param_title = req.body.title || req.param.title;
    var param_context = req.body.context || req.param.context;
    var param_userid = req.body.user_id || req.param.user_id;
    
    pg.connect(con, function(err, client) { 

        var pg_query = 
        ` INSERT INTO CONTENT
        (user_id,title,context,created_at,update_at)
        values ($1, $2, $3,now(),null)`;

        var query = client.query(pg_query,[param_title, param_context, param_userid]); 

        query.on('end', function(row,err) { response.redirect("/"); }); 

        query.on('error', function(error) { 
            console.log("ERROR!"); response.render('index', {
                 title: "ERROR", data: null, message: "ERROR is occured!" 
            });
        });
    });
}

function updateContent(req, res , next ){
    var param_title = req.body.title || req.param.title;
    var param_context = req.body.context || req.param.context;
    var param_contentid = req.body.content_id || req.param.content_id;
    
    pg.connect(con, function(err, client) { 

       //업데이트
       var pg_query = " UPDATE CONTENT SET title = $1, context = $2 WHERE content_id = $3;";

        var query = client.query(pg_query,[param_title, param_context, param_contentid]); 

        query.on('end', function(row,err) { response.redirect("/"); }); 

        query.on('error', function(error) { 
            console.log("ERROR!"); response.render('index', {
                 title: "ERROR", data: null, message: "ERROR is occured!" 
            });
        });
    });
}

function deleteContent(req , res , next){
    var content_id = req.body.content_id || req.param.content_id;
    
    pg.connect(con, function(err, client) { 

        //업데이트
        const pg_query = `delete from content where content_id = $1`;

        var query = client.query(pg_query,[content_id]); 

        query.on('end', function(row,err) { response.redirect("/"); }); 

        query.on('error', function(error) { 
            console.log("ERROR!"); response.render('index', {
                 title: "ERROR", data: null, message: "ERROR is occured!" 
            });
        });
    });
}
*/

module.exports = router;