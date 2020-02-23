const express = require('express');
const userRouter = require('./routers/user')
const docRouter = require('./routers/document')
const scoreRouter = require('./routers/score')
const port = process.env.PORT
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./db/db')

const app = express()

app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(docRouter)
app.use(scoreRouter)
app.use(morgan('combined'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})