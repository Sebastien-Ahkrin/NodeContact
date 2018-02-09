import { insertUser, updateUser, deleteUser } from "../models/contact";

export default class User {

    constructor(nom, prenom, rue, cp, ville, id) {
        this.nom = nom;
        this.prenom = prenom;
        this.rue = rue;
        this.cp = cp;
        this.ville = ville;
        this.id = id;
    }

    insert(){
        return insertUser(this).then(result => {
            this.id = result.insertId;
        });
    }

    save(){
        return updateUser(this.id, this);
    }

    delete(){
        return deleteUser(this.id);
    }

}
