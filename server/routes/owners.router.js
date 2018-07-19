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
    console.log('Got to GET owner router');
    pool.query(`SELECT * FROM "owners";`)
        .then((result)=> {
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR getting owners', error);
            res.sendStatus(500);
        });

});



module.exports = router;