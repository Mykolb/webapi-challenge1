//imports
const express = require('express');
const projectDb = require('../data/helpers/projectModel');

//router
const router = express.Router();


//REQUESTS FOR PROJECTS
//GET

router.get('/', (req, res) => {
    projectDb
    .get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'Project information could not be found'})
    })
})











module.exports = router;