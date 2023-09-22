const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null,title, imageUrl, description, price);
  product.save().then((row,fileData)=>{
    res.redirect('/');
  }).catch((err)=>{
    console.log(err)
  })
  
};

exports.getEditProduct=(req,res,next)=>{
  const editMode=req.query.editmode;
  const prodId=req.params.editproduct

  if (!editMode){
    return res.redirect('/')

  }
Product.findProductById(prodId).then(([product])=>{
  res.render('admin/edit-product',{
    pageTitle:'Edit Product',
    path:' ',
    product:product[0],
    editing:editMode
})



})
}
exports.postEditProduct=(req,res,next)=>{
const prodId=req.body.productId
const updatedTitle=req.body.title
const updatedImageUrl=req.body.imageUrl
const  updatedDescription=req.body.description
const updatedPrice=req.body.price

const product=new Product(prodId,updatedTitle,updatedImageUrl,updatedDescription,updatedPrice)
product.updateProduct().then(([row])=>{
  res.redirect('/admin/products')

})

}

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([products])=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
exports.postDeleteProduct=(req,res,next)=>{
  const prodId=req.body.productid
  Product.deleteProductById(prodId).then(([products])=>{
    res.redirect('/admin/products')

  }).catch((err)=>{
    console.log(err)
  })
  
}
