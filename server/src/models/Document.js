const mongoose = require('mongoose')
const path = require('path')

const documentSchema = mongoose.Schema({
    uploaderName: String,
    college: String,
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
        type: String
    },
    mainImageName: {
        type: String
    },
    mainImageType: {
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

documentSchema.virtual('mainImagePath').get(function () {
    if (this.mainImage != null && this.mainImageType) {
        return `data:${this.mainImageType};charset=utf-8;base64,${this.mainImage.toString('base64')}`
    }
})

const Document = mongoose.model('Document', documentSchema)

module.exports = Document