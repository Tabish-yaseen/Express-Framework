const express=require('express')
const adminRoute=require('./routes/admin')
const shopRoute=require('./routes/shop')

const app=express()
app.use(shopRoute)
app.use('/admin',adminRoute)
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(7000,()=>{
    console.log('Server is running on port 7000');
})
