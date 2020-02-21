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

module.exports = router;