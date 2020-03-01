const mongoose = require('mongoose')
const path = require('path')
const User = require('../models/User')

const documentSchema = mongoose.Schema({
    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    typeOfDoc: String,
    initialScore: Number,
    finalScore: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "Pending"
    },
    note: {
        type: String
    },
    bookIsbn: {
        type: String
    },
    mainDoc: {
        type: String
    },
    mainDocName: {
        type: String
    },
    mainDocType: {
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