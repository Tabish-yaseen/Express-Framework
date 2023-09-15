const rootDir=require('../utils/path.js')

const path=require('path')

exports.getAddProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','add-product.html'))
}

exports.postAddProducts=(req,res,next)=>{
    console.log(req.body.productname)
    console.log(req.body.sizeoftheproduct)
    res.redirect('/')
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