const express = require('express');

const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('Got to POST', req.body.name)

    pool.query(`INSERT INTO "owners" ("name")  
                VALUES ($1);`, [req.body.name])
        .then((results) => {
            console.log(results);
            res.sendStatus(201);
        })
        .catch((errorFromPG) => {
            console.log(errorFromPG)
            res.sendStatus(500);
        })
})

router.get('/', (req, res) => {
    console.log('Got to owner router GET');
    pool.query(`SELECT "owners"."id", "owners"."name", COUNT ("pets"."owner_id") AS "number_of_pets"
                FROM "owners" LEFT OUTER JOIN "pets" ON "owners"."id" = "pets"."owner_id"
                GROUP BY "owners"."id", owners.name;`)
        .then((result)=> {
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR getting owners', error);
            res.sendStatus(500);
        });

});

router.delete('/:id', (req, res) => {
    console.log('Got to owner router DELETE id: ', req.params.id)
    pool.query('DELETE FROM "owners" WHERE "id" = $1;', [req.params.id])
    .then((result)=> {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('ERROR deleting owners', error);
        res.sendStatus(500);
    });
})



module.exports = router;