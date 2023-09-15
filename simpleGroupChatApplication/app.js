const express=require('express')
const bodyParser=require('body-parser')
const loginRoute=require('./routes/login.js')

const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(loginRoute)

app.listen(8000,()=>{
    console.log('server is running on 8000')
})