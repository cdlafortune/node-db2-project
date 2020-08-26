const express = require('express');
const knex = require('knex');
const db = require('../data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.json(await db('car-dealer'))
    } catch (err) {
        next(err)
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const car = await db('car-dealer').where({id}).first();

        res.json(car);
    } catch (err) {
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const [id] = await db('car-dealer').insert(req.body);
        const newCar = await db('car-dealer').where({id}).first();

        res.status(201).json(newCar);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        await db('car-dealer').update(req.body).where({id});

        const updatedCar = await db('car-dealer').where({id}).first();
        res.status(200).json(updatedCar);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await db('car-dealer').where('id', req.params.id).del();

        res.status(204).end();

    } catch (err) {
        next(err);
    }
});

module.exports = router;