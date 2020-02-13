const mongoose = require('mongoose')

const documentSchema = mongoose.Schema({
    uploaderName: String,
    docName: String,
    score: Number,
    createdAt: Date.now(),
    updatedAt: Date.now(),
})