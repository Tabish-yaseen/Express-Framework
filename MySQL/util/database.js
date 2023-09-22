const mysql=require('mysql2');


const pool=mysql.createPool({
    host:'localhost',
    database:'nodejs-',
    user:'root',
    password:'loading123'
})
module.exports=pool.promise()