const express = require('express');
const router = express.Router();
const emailService = require('../service/email-service');

router.post('/', async (req, res)  => {
    try {
        const email            = req.body['email'];
        const subject          = req.body['subject'];
        const body             = req.body['body'];
        const scheduleDateTime = req.body['scheduleDateTime'];
        const emailObj = await emailService.create(email, subject, body, scheduleDateTime);
        res.status(200).json(emailObj);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res)  => {
    try {
        const skip = req.query['skip'] || 0;
        const limit = req.query['limit'] || 10;
        const emailObjects = await emailService.getList(parseInt(skip), parseInt(limit));
        res.status(200).json(emailObjects);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/:id', async (req, res)  => {
    try {
        const id = req.param('id');
        const emailObj = await emailService.getOne(id);
        res.status(200).json(emailObj);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res)  => {
    try {
        const id = req.param('id');
        const email            = req.body['email'];
        const subject          = req.body['subject'];
        const body             = req.body['body'];
        const scheduleDateTime = req.body['scheduleDateTime'];
        const emailObj = await emailService.update(id, email, subject, body, scheduleDateTime);
        res.status(200).json(emailObj);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res)  => {
    try {
        const id = req.param('id');
        const emailObj = await emailService.remove(id);
        res.status(200).json(emailObj);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;