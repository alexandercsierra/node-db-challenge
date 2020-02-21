  
const express = require('express');
const Projects = require('./projectsModel')

const router = express.Router();

router.get('/', (req, res)=>{
    Projects.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error getting projects'})
        })
})

module.exports = router;