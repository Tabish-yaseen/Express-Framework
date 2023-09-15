const express=require ('express')

const productController=require('../controllers/product.js')

const router=express.Router()


router.get('/contactus',productController.getContactUs)
router.post('/contactus',productController.postContactUs)
module.exports=router