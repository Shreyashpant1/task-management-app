const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.post('/', (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = async () => {
            await newTask.save();
            res.status(201).json(savedTask);
        };
        res.status(201).json(savedTask);
    } 
    catch (error) {
        res.status(500).json({message : error.message});   
    }
});

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find(req.query);
        res.status(200).json(tasks);
    } 
    catch (error) {
        res.status(500).json({message : error.message});   
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(updatedTask);
    } 
    catch (error) {
        res.status(500).json({message : error.message});   
    }
});  

router.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedTask);
    } 
    catch (error) {
        res.status(500).json({message : error.message});   
    }
});

module.exports = router;


