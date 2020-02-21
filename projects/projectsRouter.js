  
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

router.post('/', (req, res)=>{
    Projects.add(req.body)
        .then(project=>res.status(200).json(project))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error posting project'})
        })
})

module.exports = router;