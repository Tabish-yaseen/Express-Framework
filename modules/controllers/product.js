const path=require('path')
const rootDir=require('../utils/path.js')

const Product=require('../modules/product.js')




exports.getAddProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','add-product.html'))
}

exports.postAddProducts=(req,res,next)=>{
    const product=new Product(req.body.title)// creating instance object of class Product
    product.save()
    res.redirect('/')
}
exports.getProducts=(req,res,next)=>{
    Product.fetch((fetchedElements)=>{
        res.send(fetchedElements)

    })
   
}

exports.getContactUs=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','contactus.html'))
}
exports.postContactUs=(req,res,next)=>{
    res.redirect('/success')

}
exports.getShop=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','shop.html'))
}
exports.postSuccess=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','success.html'))
}