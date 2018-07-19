const express = require('express');

const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('Got to GET pets router');
    pool.query(`SELECT * FROM "pets";`)
        .then((result)=> {
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR getting pets', error);
            res.sendStatus(500);
        });

});

router.post('/', (req, res) => {
    console.log('Got to POST', req.body)
    pool.query(`INSERT INTO "pets" ("name", "breed", "color", "owner_id")
                VALUES ($1, $2, $3, $4);`, [req.body.name, req.body.breed, req.body.color, req.body.owner_id]) 
        .then((results) => {
            console.log(results);
            res.sendStatus(201);
        })
        .catch((errorFromPG) => {
            console.log(errorFromPG)
            res.sendStatus(500);
        })
})

module.exports = router;