const contact = require("../models/contact");

var express = require('express');
var router = express.Router();

router.get('/', async (request, response, next) => {

    let users = null;

    try{
        users = await contact.getUsers();
    }catch(error){
        throw error;
    }

    response.render('contact', {
        users: users
    });

});

router.get('/ajout', (request, response, next) => {
    response.render('ajout');
});

router.post('/ajout', (request, response) => {
    contact.insertUser({
        nom: request.body.nom,
        prenom: request.body.prenom,
        rue: request.body.rue,
        cp: request.body.cp,
        ville: request.body.ville
    }).then(result => response.redirect('/')).catch(error => { throw error; });
});

module.exports = router;
