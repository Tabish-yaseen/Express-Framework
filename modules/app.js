const express=require('express')
const bodyParser=require('body-parser')
const adminRoute=require('./routes/admin')
const shopRoute=require('./routes/shop')
const contactRoute=require('./routes/contact.js')
const successRoute=require('./routes/success.js')
const getRoute=require('./routes/getproduct')
const errorController=require('./controllers/error.js')
const { getProducts } = require('./controllers/product')


const app=express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(contactRoute)
app.use(successRoute)
app.use(shopRoute)
app.use(getRoute)
app.use('/admin',adminRoute)
app.use(errorController.get404)

app.listen(7000,()=>{
    console.log('Server is running on port 7000');
})
