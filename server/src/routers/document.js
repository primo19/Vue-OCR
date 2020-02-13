const express = require('express')
const bayes = require('bayes')
const router = express.Router();

var whichDoc = bayes();

router.get('/classify', async (req, res) => {
    try {
        await whichDoc.learn("this diploma is awarded to, completed college, bachelor, degree", 'diploma')

        let doc = await whichDoc.categorize("This diploma is given to Aldrin De Guzman as proof of Bachelor's degree")

        console.log("It's a " + doc + " type of doc")
        res.status(201).send({ doc })
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router