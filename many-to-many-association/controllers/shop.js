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
  const user=req.user
  user.getCart()
  .then((cart)=>{
    cart.getProducts().then((products)=>{
         res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products:products
          });
      
        })
    
      }).catch(err=>{
        console.log(err)
      })



    //
};
exports.postCartDeleteItem=(req,res,next)=>{
  const prodId=req.body.productId
  const user=req.user
  user.getCart()
  .then((cart)=>{
   return cart.getProducts({where:{id:prodId}})

  })
  .then((products)=>{
    const product=products[0]
   return  product.cartlist.destroy()

  })
  .then((result)=>{
    res.redirect('/cart')
  }).catch((err)=>{
    console.log(err)
  })

}
 

exports.postCart = (req, res, next) => {
  const prodId = req.body.productid;
  const user = req.user;
  let usersCart;
  let newQuantity = 1; 

  user.getCart()
    .then((cart) => {
      usersCart = cart;
      return usersCart.getProducts({where:{id:prodId}});
    })
    .then((products) => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }      
      if (product) {
        let oldquantity=product.cartlist.qnty
        newQuantity = oldquantity + 1;
        return product
      }

      return Product.findByPk(prodId);
    })
    .then((product) => {
      return usersCart.addProduct(product, {
        through: { qnty: newQuantity },
      });
    })
    .then(()=>{
      res.redirect('/cart')
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
