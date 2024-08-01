require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors')
const router = require('./routers/routes')
require("./DB/connection")


app.use(cors())
app.use(express.json())


app.use('/api/', router)

const server = app.listen(port , (err) => {
    if(err)
        console.log(err.message)
    console.log("server running on port " + port)
})

