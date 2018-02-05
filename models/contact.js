const database = require("../helpers/database");

database.connect(error => {
    if(error) throw error;
});

function getUsers(){
    return new Promise((resolve, reject) => {
        database.getPool().query("select * from contact order by nom, prenom", (error, rows) => {
            if(error) reject(error);
            else resolve(rows);
        });
    });
}

function getUser(id){
    return new Promise((resolve, reject) => {
        database.getPool().query("select * from contact where id = ?", id, (error, rows) => {
            if(error) reject(error);
            else resolve(rows);
        });
    });
}

function deleteUser(id){
    return new Promise((resolve, reject) => {
        database.getPool().query("delete from contact where id = ?", id, (error, result) => {
            if(error) reject(error);
            else resolve(result);
        });
    });
}

function updateUser(id, obj){
    return new Promise((resolve, reject) => {
        database.getPool().query("update contact set nom = ?, prenom = ?, rue = ?, cp = ?, ville = ? where id = ?",
        [obj.nom, obj.prenom, obj.rue, obj.cp, obj.ville, id], (error, results) => {
            if(error) reject(error);
            else resolve(results);
        });
    });
}

function insertUser(obj){
    return new Promise((resolve, reject) => {
        database.getPool().query("insert into contact (nom, prenom, rue, cp, ville) values (?,?,?,?,?)",
            [obj.nom, obj.prenom, obj.rue, obj.cp, obj.ville], (error, results) => {
                if(error) reject(error);
                else resolve(results);
            });
    });
}

module.exports = {
    getUsers,
    getUser,
    insertUser,
    deleteUser,
    updateUser
}
