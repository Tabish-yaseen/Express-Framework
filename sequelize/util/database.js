const Sequelize=require('sequelize').Sequelize;
// DATA BASE,USERNAME,PASSWORD,OPTIONS
const sequelize=new Sequelize('nodejs-','root','loading123',{
    dialect:'mysql',
    host:'localhost',
    
});

module.exports=sequelize;