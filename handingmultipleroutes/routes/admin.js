const express=require("express")
const bodyParser=require('body-parser')
const router=express.Router()
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/add-products',(req,res,next)=>{
    res.send('<form action="/admin/add-products" method="POST"><input type="text" name="productname"><input type="number"name="sizeoftheproduct"><button type="submit">Add product</button></form>')
})

router.post('/add-products',(req,res,next)=>{
    console.log(req.body.productname)
    console.log(req.body.sizeoftheproduct)
    res.redirect('/')
})
module.exports=router

