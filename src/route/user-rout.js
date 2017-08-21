const express = require('express');
const router = express.Router();
const service = require('../service/user-service');

router.post('/', async (req, res)  => {
    try {
        const name            = req.body['name'];
        const surname         = req.body['surname'];
        const age             = req.body['age'];
        const gender          = req.body['gender']
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res)  => {
    try {
        const skip = req.query['skip'] || 0;
        const limit = req.query['limit'] || 10;
        const UserObj = await service.getList(parseInt(skip), parseInt(limit));
        res.status(200).json(UserObj);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/:id', async (req, res)  => {
    try {
        const id = req.param('id');
        const userObj = await service.getOneUser(id);
        res.status(200).json(userObj);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res)  => {
    try {
        const id               = req.param('id');
        const name             = req.body['name'];
        const surname          = req.body['surname'];
        const age              = req.body['age'];
        const userObj = await service.createUser(id, name, surname, age);
        res.status(200).json(userObj);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res)  => {
    try {
        const id = req.param('id');
        const userObj = await service.remove(id);
        res.status(200).json(userObj);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', async (req, res)  => {
    try {
        const name          = req.body['name'];
        const surname            = req.body['surname'];
        const age             = req.body['age'];
        const userObj = await service.createUser(name, surname, age);
        res.status(200).json(userObj);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res)  => {
    try {
        const skip = req.query['skip'] || 0;
        const limit = req.query['limit'] || 10;
        const userObjects = await service.getList(parseInt(skip), parseInt(limit));
        res.status(200).json(userObjects);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/:id', async (req, res)  => {
    try {
        const id = req.param('id');
        const userObj = await service.getOneUser(id);
        res.status(200).json(userObj);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res)  => {
    try {
        const id               = req.param('id');
        const name            = req.body['name'];
        const surname          = req.body['surname'];
        const age             = req.body['age'];
        const userObj = await service.updateUser(id, name, surname, age);
        res.status(200).json(userObj);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res)  => {
    try {
        const id = req.param('id');
        const userObj = await service.remove(id);
        res.status(200).json(userObj);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;