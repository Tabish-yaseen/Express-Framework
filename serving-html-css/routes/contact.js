const express=require ('express')
const rootDir=require('../utils/path.js')
const path=require('path')
const router=express.Router()

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','contactus.html'))
})
router.post('/contactus',(req,res,next)=>{
    res.redirect('/success')

})
module.exports=router