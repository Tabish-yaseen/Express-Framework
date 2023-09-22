const db=require('../util/database')


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
    const query='Insert Into products(title,imageUrl,description,price) Values (?,?,?,?)'
    const values=[this.title,this.imageUrl,this.description,this.price]
    return db.execute(query,values)
    
    
  }

  static fetchAll() {
     return db.execute('Select * from products')

    
  }

  static findProductById(prodId){
   
   return  db.execute('select * from products where products.id=?',[prodId])
    
  }
  static  deleteProductById(prodId){
    return db.execute('Delete from products where products.id=?',[prodId])
    
  }
   updateProduct(){
    const query=`Update products
    SET
    title = ?,
        imageUrl = ?,
        description = ?,
        price = ?
      WHERE
        id = ?
`
const values=[this.title,this.imageUrl,this.description,this.price,this.id]
return db.execute(query, values);
  }

};
