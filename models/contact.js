import database from "../helpers/database";

import User from '../objects/User';

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

export function getUsers(){
    return query("select * from contact order by nom, prenom");
}

export function getUser(id){
    return query("select * from contact where id = ?", id).then(
        result => {
            const res = result[0];
            return new User(
                res.nom,
                res.prenom,
                res.ru,
                res.cp,
                res.ville,
                res.id
            );
        }
    );
}

export function deleteUser(id){
    return query("delete from contact where id = ?", id);
}

export function updateUser(id, obj){
    return query("update contact set nom = ?, prenom = ?, rue = ?, cp = ?, ville = ? where id = ?",
        [obj.nom, obj.prenom, obj.rue, obj.cp, obj.ville, id]);
}

export function insertUser(obj){
    return query("insert into contact (nom, prenom, rue, cp, ville) values (?,?,?,?,?)",
        [obj.nom, obj.prenom, obj.rue, obj.cp, obj.ville]);
}
