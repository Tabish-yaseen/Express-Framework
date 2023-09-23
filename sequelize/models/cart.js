const fs=require('fs')
const path=require('path')
const rootDir=require('../util/path')

const pathCreated=path.join(rootDir,'data','cart.json')
module.exports=class Cart{

    static addProduct(prodid,productPrice){
        
        //fetch the previous cart
        fs.readFile(pathCreated,(err,fileContent)=>{
            let cart={
                products:[],
                totalPrice:0
            }
    
            
            if(!err){
                cart=JSON.parse(fileContent)
            }
            
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

            
            fs.writeFile(pathCreated,JSON.stringify(cart),(err)=>{
                console.log(err)
            })

 })
        


    }
}