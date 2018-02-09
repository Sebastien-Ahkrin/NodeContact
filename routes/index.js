const contact = require("../models/contact");
const User = require('../objects/User')

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
    let user = new User(
        request.body.nom,
        request.body.prenom,
        request.body.rue,
        request.body.cp,
        request.body.ville
    );
    user.insert().then(result => response.redirect('/'))
});

module.exports = router;
