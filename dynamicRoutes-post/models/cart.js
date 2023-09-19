const fs=require('fs')
const path=require('path')
const rootDir=require('../util/path')

const pathCreated=path.join(rootDir,'data','cart.json')
module.exports=class Cart{

    static addProduct(prodid,productPrice){
        let cart={
            products:[],
            totalPrice:0
        }

        //fetch the previous cart
        fs.readFile(pathCreated,(err,fileContent)=>{
            
            if(!err){
                cart=JSON.parse(fileContent)
            }
            console.log('Cart before adding product:', cart);
            //Analyzing the cart=>find the existing id
            const existingProductIndex=cart.products.findIndex(( product)=>{
                return product.id===prodid
            })
            const existingProduct=cart.products[existingProductIndex]
            // update existingProduct quantity
            if(existingProduct){
                existingProduct.qty+=1;
            }
            else{
                //create new product 
                let newProduct={id:prodid,qty:1}
                cart.products.push(newProduct)
            } 
            cart.totalPrice+=parseFloat(productPrice);

            console.log('Cart after adding product:', cart);
            fs.writeFile(pathCreated,JSON.stringify(cart),(err)=>{
                console.log(err)
            })

 })
        


    }
}