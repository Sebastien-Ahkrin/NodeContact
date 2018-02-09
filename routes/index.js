import * as contact from "../models/contact";
import User from '../objects/User';

import express from 'express';
const router = express.Router();

export default router;

router.get('/test', (req, res) => {
    const u = new User();
    u.insert();
    console.log(contact);
});

router.get('/', (request, response, next) => {
    contact.getUsers().then(users =>
        response.render('contact', {
            users
        })
    );
});

router.get('/ajout', (request, response, next) => {
    response.render('ajout');
});

router.post('/ajout', (request, response) => {
    const user = new User(
        request.body.nom,
        request.body.prenom,
        request.body.rue,
        request.body.cp,
        request.body.ville
    );
    user.insert().then(_ => response.redirect('/'))
});
