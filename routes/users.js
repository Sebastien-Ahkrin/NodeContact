import * as contact from "../models/contact";

import User from '../objects/User';

import express from 'express';
const router = express.Router();

export default router;

router.get('/edit/:id', (request, response) => {

    contact.getUser(request.params.id).then(
        user => {
            response.render('edit', user);
        }
    );

});

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

    const u = contact.getUser(request.body.id).then(
        user => {
            user.nom = request.body.nom;
            user.rue = request.body.rue;
            user.prenom = request.body.prenom;
            user.cp = request.body.cp;
            user.ville = request.body.ville;

            user.save().then(_ => response.redirect('/'));
        }
    );

});
