const express = require('express')
const middleware = express.Router()

middleware.use((req,res,next)=>{
    console.log({
        message:'a request was made',
        status:res.statusCode,
        IP:res.connection.remoteAddress,
        method:req.method,
        date: new Date().toDateString(),
        browser: req.headers,        
    })
    next()
})

module.exports = middleware