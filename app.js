require('dotenv').config()
require('./config/db')
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const path = require('path')
const router = require("./routes/index")


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')

app.use(router)

app.listen(port, () => {
    console.log(`server successfully started at port ${port}`)
    console.log(`http://localhost:${port}`)
})



