const express=require('express')
const router=express.Router()
router.get('/',(req,res,next)=>{
    res.send("<html>hello from express.js")
})
module.exports=router
