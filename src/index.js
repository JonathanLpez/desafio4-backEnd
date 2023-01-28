const express = require('express')
const router = require('./routes/index.js')
const morgan = require('morgan')

port = 8080

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))


router(app)

app.listen(port, () => {
    console.log(`Listen in port ${port}`)
})