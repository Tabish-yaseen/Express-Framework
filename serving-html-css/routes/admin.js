const express=require("express")
 const rootDir=require('../utils/path.js')

const path=require('path')
const router=express.Router()


router.get('/add-products',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','add-product.html'))
})
router.post('/add-products',(req,res,next)=>{
    console.log(req.body.productname)
    console.log(req.body.sizeoftheproduct)
    res.redirect('/')
})
module.exports=router
