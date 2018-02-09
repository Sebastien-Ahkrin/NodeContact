const contact = require("../models/contact");

module.exports = class User {

    constructor(nom, prenom, rue, cp, ville) {
        this.nom = nom;
        this.prenom = prenom;
        this.rue = rue;
        this.cp = cp;
        this.ville = ville;
    }

    insert(){
        return contact.insertUser(this).then(result => {
            this.id = result.insertId;
        });
    }

    save(){
        return contact.updateUser(this.id, this);
    }

}
