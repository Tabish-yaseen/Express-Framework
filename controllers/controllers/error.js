const path=require('path')

exports.get404=(req,res,next)=>{
    res.status(404) 
    res.sendFile(path.join(__dirname,'../',"view",'404.html'))
}