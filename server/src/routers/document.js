const express = require('express')
const bayes = require('bayes')
const multer = require('multer')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')
const router = express.Router();
const data = require('../assets/data/dataset.json')
const Document = require('../models/Document')
const imageMimeTypes = ['image/jpeg', 'image/png']

const Tesseract = require('tesseract.js')

var whichDoc = bayes();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage }).single('file')

// const upload = multer({
//     dest: './uploads/'
// })

router.post('/classify', (req, res) => {
    upload(req, res, err => {
        //res.json({ file: req.file })
        fs.readFile(`./uploads/${req.file.originalname}`, (err, image) => {
            if (err) return console.log(err)
            Tesseract.recognize(image, 'eng', { logger: m => console.log(m) })
                .then(async ({ data: { text } }) => {
                    console.log(text)
                    for (var i = 0; i < data.doc.length; i++) {
                        await whichDoc.learn(data.doc[i].description, data.doc[i].label)
                    }
                    let documentType = await whichDoc.categorize(text)
                    let docFilename = req.file.originalname
                    res.status(201).send({ documentType, docFilename })
                })
        })
    })
})

router.post('/upload', async (req, res) => {
    try {
        const doc = new Document(req.body)
        await doc.save()
        res.status(201).send({ doc })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/upload/eq', async (req, res) => {
    try {
        const doc = new Document(req.body)
        doc.save();
        res.status(201).send({ doc })
    } catch (e) {
        res.status(400).send(e)
    }

})

router.post('/upload/els', async (req, res) => {
    try {
        const doc = new Document(req.body)
        doc.save();
        res.status(201).send({ doc })
    } catch (e) {
        res.status(400).send(e)
    }

})

router.post('/upload/pdah', async (req, res) => {
    try {
        const doc = new Document(req.body)
        doc.save();
        res.status(201).send({ doc })
    } catch (e) {
        res.status(400).send(e)
    }

})

router.post('/add/isbn', async (req, res) => {
    try {
        const doc = new Document(req.body)
        await doc.save()
        res.status(201).send({ doc })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/documents', async (req, res) => {
    try {
        const docs = await Document.find();
        res.status(201).send({ docs })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/document', async (req, res) => {
    try {
        const doc = await Document.findOne({ _id: req.body })
        res.status(201).send({ doc })
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router