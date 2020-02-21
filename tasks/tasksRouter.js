const express = require('express');
const Tasks = require('./tasksModel');

const router = express.Router();

router.get('/', (req, res)=>{
    Tasks.getTasks()
        .then(tasks => res.status(200).json(tasks))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error getting tasks'})
        })
})

router.post('/', (req, res)=>{
    Tasks.add(req.body)
        .then(task=>res.status(200).json(task))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error posting task'})
        })
})

module.exports = router;