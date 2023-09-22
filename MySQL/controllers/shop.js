const Product = require('../models/product');
const Cart=require('../models/cart.js')

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows,fileData])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    });
  

  })
  .catch((err)=>{
    console.log(err)
  })
};
exports.getProductDetails=(req,res,next)=>{
  const prodId=req.params.productid
 Product.findProductById(prodId).then(([product,fileData])=>{
  res.render('shop/product-detail',{
   pageTitle:product[0].title,
    product:product[0],
    path:'/products'

  })
 }).catch((err)=>{ 
  console.log(err)
 })
  

}
exports.getIndex = (req, res, next) => {
  Product.fetchAll().then(([rows,fileData])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    });
  

  })
  .catch((err)=>{
    console.log(err)
  })
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};
exports.postCart=(req,res,next)=>{
  const prodId=req.body.productid
  Product.findProductById(prodId,(product)=>{
    Cart.addProduct(prodId,product.price)
    res.redirect('/')
  
  })
  
}



exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
