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

//GETPROJECT ACTIONS 
router.get('/:id/actions', (req, res) => {
    const projectId = req.params.id;
    console.log('Get projects actions is working');

    projectDb
    .getProjectActions(projectId)
    .then(projectActions => {
        res.status(200).json(projectActions);
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'Could not find the list of actions associated with this project.'})
    })

})



//POST
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

//UPDATE
router.put('/:id',  (req, res) => {
    const id = req.params.id;
    const projectInfo = req.body;
    console.log('id, profectInfo');

    // if(!id) {
    //     res.status(404).json({ error: err, message: 'Null, project id not found.'})
    // }

    projectDb
    .update(id, projectInfo)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(error => {
        res.status(500).json({ error: err, message: "The project information could not be modified."})
    })
})


//REMOVE
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('id');

    projectDb
    .remove(id)
    .then(deleted => {
        res.status(200).end();
    })
    .catch(error => {
        res.status(500).json({ error: err, message: 'The project couls not be removed'})
    })
})









module.exports = router;