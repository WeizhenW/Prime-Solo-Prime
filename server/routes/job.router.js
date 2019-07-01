const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// route to post a new job to db
router.post('/new', (req, res) => {
    // console.log(req.body);
    const newJob = req.body;
    console.log('req.user', req.user);
    pool.query(`INSERT INTO "job" ("title", "post_url", "company", "status_id", "user_id")
    VALUES($1, $2, $3, $4, $5);`, [newJob.jobTitle, newJob.postUrl, newJob.companyName, newJob.status_id, req.user.id])
    .then(() => res.sendStatus(200))
    .catch(error => {
        console.log('error with post new job', error);
        res.sendStatus(500);
    })
});

//route to get all jobs to apply
router.get('/toapply', (req, res) => {
    pool.query(`SELECT * FROM "job" WHERE "status_id" = 1;`)
    .then((result) => res.send(result.rows))
    .catch(error => {
        console.log('error with get new jobs list', error);
        res.sendStatus(500);
    })
})

//route to delete one job
router.delete('/delete', (req, res) => {
    pool.query(`DELETE FROM "job" WHERE "id"=$1;` [req.body.id])
    .then(() => res.sendStatus(200))
    .catch(error => {
        console.log('error with delete job', error);
        res.sendStatus(500);
    })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;