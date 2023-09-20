const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(productid,title, imageUrl, description, price) {
    this.id=productid
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    
  }

  save() {
    // for editing
    if(this.id){
      getProductsFromFile((products)=>{
        const existingProductIndex=products.findIndex((prod)=>{
          return prod.id===this.id
        })
        const updatedPoducts=[...products]
        updatedPoducts[existingProductIndex]=this
        fs.writeFile(p, JSON.stringify(updatedPoducts), err => {
          console.log(err);
        });

      })
    }
    // for saving
    else{
      this.id=Math.random().toString()
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
    }
    
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findProductById(prodId,cb){
    getProductsFromFile((products)=>{
      products.find((element)=>{
       if(element.id==prodId){
        cb(element) 
       }

      })
    })
  }
  static  deleteProductById(prodId){
    getProductsFromFile((products)=>{
      const updatedProducts=products.filter((product)=>{
        return product.id!==prodId
      })
      fs.writeFile(p,JSON.stringify(updatedProducts),(err)=>{
        console.log(err)
      })
     
      })
    
  }
};
