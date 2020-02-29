const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    diploma: [{
        dipType: String,
        score: Number
    }],
    diplPresent: [{
        diplPresType: String,
        score: Number,
    }],
    tor: {
        desc: String,
        score: Number
    },
    sr: [{
        desc: String,
        score: Number
    }],
    mod: [{
        modPos: String,
        score: Number
    }],
    fpte: [{
        fptePos: String,
        score: Number
    }],
    eppi: [{
        eppiPos: String,
        score: Number
    }],
    cop: {
        desc: String,
        score: Number
    },
    mono: [{
        monoType: String,
        score: Number
    }],
    isbn: {
        desc: String,
        score: Number
    },
    issn: [{
        issnType: String,
        score: Number
    }],
    cot: [{
        cotType: String,
        score: Number
    }],
    cap: [{
        capType: String,
        score: Number
    }],
    expServ: [{
        expType: String,
        score: Number
    }],
    membership: [{
        membType: String,
        score: Number
    }],
    scholarship: [{
        schoType: String,
        score: Number
    }],
    awards: [{
        awardType: String,
        score: Number
    }],
    outreach: {
        name: String,
        score: Number,
    },
    exams: [{
        examType: String,
        score: Number
    }]


})

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score