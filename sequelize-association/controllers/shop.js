const Product = require('../models/product');
const Cart=require('../models/cart.js')

exports.getProducts = (req, res, next) => {
  Product.findAll().then((product)=>{
    res.render('shop/product-list', {
      prods: product,
      pageTitle: 'All Products',
      path: '/products'
    });

  }).catch((err)=>{
    console.log(err)
  })
  
};

exports.getProductDetails=(req,res,next)=>{
  const prodId=req.params.productid
// find  the element by  only primary key
 Product.findByPk(prodId).then((product)=>{
  console.log(product)
  res.render('shop/product-detail',{
   pageTitle:product.title,
    product:product,
    path:'/products'
  })
 }).catch((err)=>{ 
  console.log(err)
 })
 
// find the element by anyything
// Product.findOne({where:{
//   id:prodId,
// }}).then((products)=>{
//   res.render('shop/product-detail',{
//     pageTitle:products.title,
//      product:products[0],
//      path:'/products'
//    })

// })

}

exports.getIndex = (req, res, next) => {
  Product.findAll().then((products)=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });

  }).catch((err)=>{
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
