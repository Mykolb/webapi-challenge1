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
        res.status(500).json({ error: err, message: 'Project information could not be found.'})
    })
})

router.post('/', (req, res) => {
    const projectInfo = req.body;
    console.log('projectInfo');


    projectDb
    .insert(projectInfo)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'New project could not be created.'})
    })
})









module.exports = router;