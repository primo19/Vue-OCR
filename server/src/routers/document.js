const express = require('express')
const bayes = require('bayes')
const multer = require('multer')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')
const router = express.Router();
const data = require('../assets/data/dataset.json')
const Document = require('../models/Document')

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
                    res.status(201).send({ documentType })
                })
        })


    })
})

module.exports = router