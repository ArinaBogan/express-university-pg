const express = require('express');
const { getAllData, getUsersById,createUser ,updateUser} = require('../service/user.service');

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllData();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await getUsersById(id)
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { birth, city, age, name, surname } = req.body;
        const data = await createUser(birth, city, age, name, surname)
        res.status(201).send(data);
    } catch (error) {
        res.status(401).send(error.message)
    }
});

route.put('/', async (req, res) => {
    try {
        const { birth, city, age, name, surname } = req.body;
        const data = await updateUser( birth, city, age, name, surname)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
});

module.exports = route;