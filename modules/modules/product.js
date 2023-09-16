const fs=require('fs')
const path=require('path')
const rootDir=require('../utils/path')

const pathcreated=path.join(rootDir,'data','products.json')

const getProductFromFile=(cb)=>{
    fs.readFile(pathcreated,(err,data)=>{
        if(err){
            const arr=[]
            return cb(arr)
        }
        let product=JSON.parse(data)
        cb(product)
    })

}

module.exports=class{
    constructor(t){
        this.title=t
    }

    save(){
        getProductFromFile((products)=>{
            products.push(this)
            fs.writeFile(pathcreated,JSON.stringify(products),(err)=>{
                console.log(err)
            })

        })         
    }

    static fetch(cb){
        getProductFromFile(cb)
  }
}