const express = require('express');
const userRouter = require('./routers/user')
const docRouter = require('./routers/document')
const port = process.env.PORT
const morgan = require('morgan')
const cors = require('cors')
require('./db/db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(docRouter)
app.use(morgan('combined'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})