const mongoose = require('mongoose')

const documentSchema = mongoose.Schema({
    uploaderName: String,
    typeOfDoc: String,
    score: Number,
    status: {
        type: Boolean,
        default: false
    },
    bookIsbn: {
        type: String
    },
    mainImage: {
        type: Buffer
    },
    mainImageName: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const Document = mongoose.model('Document', documentSchema)

module.exports = Document