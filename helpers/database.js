const mysql = require("mysql");

let pool = null;

function connect(callback){
    pool = mysql.createPool({
        connectionLimit: 100,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'node_contactdb',
        debug: false
    });
    callback();
}

function getPool(){
    return pool;
}

module.exports = {
    connect, getPool
}
