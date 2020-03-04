const express = require('express')
const Score = require('../models/Score')
const router = express.Router()


router.post('/score/add', async (req, res) => {
    try {
        const score = new Score(req.body)
        await score.save()
        res.status(201).send({ score })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.put('/score/update/:id', async (req, res) => {
    try {
        Score.findByIdAndUpdate(req.params.id, req.body, (err, score) => {
            if (err) throw err;
            res.status(201).send(score)
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/score', async (req, res) => {
    try {
        let score = await Score.findOne({ _id: req.body }, score[req.body])
        res.status(201).send({ score })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/scores', async (req, res) => {
    try {
        let scores = await Score.find()
        res.status(201).send({ scores })
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router