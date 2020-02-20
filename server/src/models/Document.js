const mongoose = require('mongoose')
const path = require('path')

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

documentSchema.virtual('mainImagePath').get(() => {
    if (this.mainImageName != null) {
        return path.join('/server/uploads/', this.mainImageName)
    }
})

const Document = mongoose.model('Document', documentSchema)

module.exports = Document