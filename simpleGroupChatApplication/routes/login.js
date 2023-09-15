const express=require('express')
const fs=require('fs')
const router=express.Router()


router.get('/login',(req,res,next)=>{
    
    res.send(`
    <form  action="/login" method="POST" onSubmit="localStorage.setItem('username',document.getElementById('username').value)">
        <input type="text" name="userName" id="username">
        <br>
        <button type="submit">login</button>
    </form>
`)
})
router.post('/login',(req,res,next)=>{
    res.redirect('/')

})


router.get('/',(req,res,next)=>{
    
fs.readFile('username.txt',(err,data)=>{
    if(err){
        console.error("there is a error in reading the file")
        data='No Chat Exist'
    }
    res.send(`
    ${data}
    <form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
      <input type="text" name="chat">
      <input type="hidden" id="username" name="username">
      <br>
      <button type="submit">Send</button>
    </form>`)
})
    
})
        
    
    router.post('/',(req,res,next)=>{
        console.log(req.body);
        data=`${req.body.username}: ${req.body.chat}, `
        fs.writeFile('username.txt',data ,{flag:'a'},(err)=>{
            if(err){
                console.log("there is problem in writing this file",err)
            }
            else{
                res.redirect('/')
            }

        });
       
    })

module.exports=router