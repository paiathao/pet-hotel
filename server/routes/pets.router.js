const express = require('express');

const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('Got to GET pets router');
    pool.query(`SELECT "pets"."id" AS "pet_id", 
                        "pets"."name" AS "pet_name", 
                        "pets"."breed" AS "pet_breed", 
                        "pets"."color" AS "pet_color", 
                        "pets"."owner_id" AS "owner_id",
                        "pets"."check_in" AS "check_in",
                        "owners"."name" AS "owner_name" 
                FROM "owners" JOIN "pets" ON "owners".id = "pets".owner_id;`)
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

router.put('/:id', (req, res) => {
    console.log('in pet router PUT')
    console.log('req.body', req.body);
    pool.query(`UPDATE "pets" SET "name" = $1, "breed" = $2, "color" = $3, "owner_id" = $4, "check_in" = $5
                WHERE "id" = $6;`, [req.body.pet_name, req.body.pet_breed, req.body.pet_color, req.body.owner_id, req.body.check_in, req.params.id]) 
        .then((results) => {
            console.log(results);
            res.sendStatus(201);
        })
        .catch((errorFromPG) => {
            console.log(errorFromPG)
            res.sendStatus(500);
        })
})

router.delete('/:id', (req, res) => {
    console.log('Got to pet router DELETE id: ', req.params.id)
    pool.query('DELETE FROM "pets" WHERE "id" = $1;', [req.params.id])
    .then((result)=> {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('ERROR deleting pets', error);
        res.sendStatus(500);
    });
})

module.exports = router;