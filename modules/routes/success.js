const express=require('express')
const productController=require('../controllers/product.js')

const router=express.Router()
router.post('/success',productController.postSuccess)
module.exports=router