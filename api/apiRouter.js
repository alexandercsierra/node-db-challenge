const express = require('express');
const projectsRouter = require("../projects/projectsRouter");
const tasksRouter = require("../tasks/tasksRouter");
const resourcesRouter = require("../resources/resourcesRouter");

const router = express.Router();


router.use('/projects', projectsRouter);
router.use('/tasks', tasksRouter);
router.use('/resources', resourcesRouter);

module.exports = router;