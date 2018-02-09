import * as contact from "../models/contact";

import express from 'express';
const router = express.Router();

export default router;

/* GET users listing. */
router.get('/edit/:id', (request, response) => {

    contact.getUser(request.params.id).then(
        user => {
            response.render('edit', user);
        }
    );

});

/*
contact.getUser(1).then(user => {
    console.log(user);
});
*/

router.get("/delete/:id", (request, response) => {

    contact.getUser(request.params.id).then(
        user => {
            user.delete().then(
                _ => {
                    response.redirect("/");
                }
            );
        }
    );

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
