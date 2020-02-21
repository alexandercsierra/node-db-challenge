  
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
        .then(project=>res.status(201).json(project))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error posting project'})
        })
})

router.put('/:id', (req, res)=>{
    Projects.update(req.body, req.params.id)
        .then(project=>res.status(200).json(project))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error updating project'})
        })
})

router.delete('/:id', (req, res)=>{
    Projects.remove(req.params.id)
        .then(project=>res.status(200).json(project))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error deleting project'})
        })
})





module.exports = router;