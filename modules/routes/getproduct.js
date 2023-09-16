const express=require('express')
const router=express.Router()
const productController=require('../controllers/product.js')


router.get('/getproducts',productController.getProducts)
module.exports=router