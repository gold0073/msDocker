const { Pool } = require("pg");
module.exports.postgre_pool =new Pool({
        host: 'postgresql',
        user: 'postgres',
        password: 'park0070!',
        database: 'monolithic',
        port : '5432'
    });
