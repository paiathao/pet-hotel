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

module.exports = router;