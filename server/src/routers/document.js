const express = require('express')
const bayes = require('bayes')
const multer = require('multer')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')
const router = express.Router();
const data = require('../assets/data/dataset.json')
// const Document = require('../models/Document')

const { createWorker } = require("tesseract.js");
const worker = createWorker({
    logger: m => console.log(m)
});

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

router.post('/classify', async (req, res) => {
    try {
        upload(req, res, err => {
            //res.json({ file: req.file })

            fs.readFile(`./uploads/${req.file.originalname}`, async (err, file) => {
                if (err) return console.log(err)
                try {
                    //Use Tesseractjs
                    await worker.load();
                    await worker.loadLanguage('eng');
                    await worker.initialize('eng');
                    const { data: { text } } = await worker.recognize(file);
                    console.log(text)
                    await worker.terminate()
                    for (var i = 0; i < data.doc.length; i++) {
                        await whichDoc.learn(data.doc[i].description, data.doc[i].label)
                    }
                    let documentType = await whichDoc.categorize(text)
                    console.log(documentType)
                    return res.status(201).send(documentType)
                } catch (e) {
                    console.log(e)
                }

            })

        })
    } catch (e) {
        console.log(e)
    }
})

module.exports = router