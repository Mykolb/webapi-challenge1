//imports
const express = require('express');
const actionDb = require('../data/helpers/actionModel');

//router
const router = express.Router();




//REQUESTS FOR PROJECTS
//GET
router.get('/', (req, res) => {

    actionDb
    .get()
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => {
        res.status(500).json({ error: err, message: 'Action information could not be found.'})
    })
})





//POST




//UPDATE



//REMOVE 




module.exports = router;