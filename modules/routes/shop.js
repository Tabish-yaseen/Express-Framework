const express=require('express')

const productController=require('../controllers/product.js')

const router=express.Router()
router.get('/',productController.getShop)
module.exports=router