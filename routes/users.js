const contact = require("../models/contact");

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/edit/:id', async (request, response) => {

    let user = null;

    try{
        user = await contact.getUser(request.params.id);
    }catch(error){
        throw error;
    }

    response.render('edit', user[0]);
});

router.get("/delete/:id", async (request, response) => {

    contact.deleteUser(request.params.id)
        .then(result => {
            response.redirect('/');
        }).catch(error => { throw error; });

});

router.post('/edit', (request, response) => {
    contact.updateUser(request.body.id, {
        nom: request.body.nom,
        prenom: request.body.prenom,
        rue: request.body.rue,
        cp: request.body.cp,
        ville: request.body.ville
    }).then(result => response.redirect('/')).catch(error => { throw error; });
});

module.exports = router;
