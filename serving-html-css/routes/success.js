const express=require('express')
const path=require('path')
const rootDir=require('../utils/path.js')
const router=express.Router()
router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','success.html'))
})
module.exports=router