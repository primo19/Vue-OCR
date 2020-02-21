const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    category: String,
    score: Number
})

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score