const database = require("../helpers/database");

database.connect(error => {
    if(error) throw error;
});

function query(query, params) {
    return new Promise((resolve, reject) => {
        database.getPool().query(query , params, (error, results) => {
            if(error) reject(error);
            else resolve(results);
        });
    });
}

function getUsers(){
    return query("select * from contact order by nom, prenom");
}

function getUser(id){
    return query("select * from contact where id = ?", id);
}

function deleteUser(id){
    return query("delete from contact where id = ?", id);
}

function updateUser(id, obj){
    return query("update contact set nom = ?, prenom = ?, rue = ?, cp = ?, ville = ? where id = ?",
        [obj.nom, obj.prenom, obj.rue, obj.cp, obj.ville, id]);
}

function insertUser(obj){
    return query("insert into contact (nom, prenom, rue, cp, ville) values (?,?,?,?,?)",
        [obj.nom, obj.prenom, obj.rue, obj.cp, obj.ville]);
}

module.exports = {
    getUsers,
    getUser,
    insertUser,
    deleteUser,
    updateUser
}
