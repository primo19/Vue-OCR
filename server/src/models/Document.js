const mongoose = require('mongoose')

const documentSchema = mongoose.Schema({
    uploaderName: String,
    typeOfDoc: String,
    score: Number,
    createdAt: Date.now(),
    updatedAt: Date.now(),
})

const Document = mongoose.model('Document', documentSchema)

module.exports = Document