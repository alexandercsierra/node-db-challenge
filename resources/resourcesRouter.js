const express = require('express');
const Resources = require('./resourcesModel');

const router = express.Router();

router.get('/', (req, res)=>{
    Resources.getResources()
        .then(resources => res.status(200).json(resources))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error getting resources'})
        })
})

router.post('/', (req, res)=>{
    Resources.add(req.body)
        .then(resource=>res.status(201).json(resource))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error posting resource'})
        })
})

router.put('/:id', (req, res)=>{
    Resources.update(req.body, req.params.id)
        .then(resource=>res.status(200).json(resource))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error updating resource'})
        })
})

router.delete('/:id', (req, res)=>{
    Resources.remove(req.params.id)
        .then(resource=>res.status(200).json(resource))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'error deleting resource'})
        })
})

module.exports = router;