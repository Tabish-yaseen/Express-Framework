const express=require('express')
const bodyParser=require('body-parser')
const adminRoute=require('./routes/admin')
const shopRoute=require('./routes/shop')
const contactRoute=require('./routes/contact.js')
const successRoute=require('./routes/success.js')
const path=require('path')

const app=express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(contactRoute)
app.use(successRoute)
app.use(shopRoute)
app.use('/admin',adminRoute)
app.use((req,res,next)=>{
    res.status(404) 
    res.sendFile(path.join(__dirname,'../',"view",'404.html'))
})

app.listen(7000,()=>{
    console.log('Server is running on port 7000');
})
