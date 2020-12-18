const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 1100
const router = require('./routes/router')
app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})

