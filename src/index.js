const express = require('express')

const router = require('./routes/index.js')

port = 8080

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))



router(app)

app.listen(port, () => {
    console.log(`Listen in port ${port}`)
})