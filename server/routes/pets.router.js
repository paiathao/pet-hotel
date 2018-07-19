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



module.exports = router;