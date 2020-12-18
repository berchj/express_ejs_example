const express = require('express')
const router = express.Router()
const data = require('../info.json')
const middleware = require('../middleware/middleware')
router.use(middleware)
router.get('/',(req,res)=>{
    res.status(200).render('../public/views/index',{info:data})
})

module.exports = router
