const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
  });
};

exports.postAddProduct = (req, res, next) => {
  const user=req.user
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  user.createProduct({
    title:title,
   price:price,
    imageUrl:imageUrl,
    description:description
  }).then((result)=>{
    console.log('product is created')
    res.redirect('/')
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
Product.findByPk(prodId).then((product)=>{
  res.render('admin/edit-product',{
    pageTitle:'Edit Product',
    path:' ',
    product:product,
    editing:editMode
})



})
}
exports.postEditProduct=(req,res,next)=>{
  const prodId = req.body.productId; 
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
Product.update({
  title:updatedTitle,
  imageUrl:updatedImageUrl,
  description:updatedDescription,
  price:updatedPrice
},{
  where:{
    id:prodId
  }
}
).then((result)=>{
  res.redirect('/admin/products')
}).catch((err)=>{
  console.log(err)
})

}

exports.getProducts = (req, res, next) => {
  const user=req.user
  user.getProducts().then((products)=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
exports.postDeleteProduct=(req,res,next)=>{
  const prodId=req.body.productid
  Product.destroy({
    where:{
      id:prodId
    }
  }).then((result)=>{
    res.redirect('/admin/products')
  })
  

  // delete by first finding the product by id the delete
  // Product.findByPk(prodId)
  // .then((product)=>{
  //  return product.destroy()
  // })
  // .then((result)=>{
  //   res.redirect('/admin/products')

  // }).catch((err)=>{
  //   console.log(err)
  // })

  // directly delete 
  
}
