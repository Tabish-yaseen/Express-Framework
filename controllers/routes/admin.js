const express=require("express")
 
const router=express.Router()
const productController=require('../controllers/product.js')



router.get('/add-products',productController.getAddProducts)
router.post('/add-products',productController.postAddProducts)

module.exports=router
