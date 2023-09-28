const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const cartlist=sequelize.define('cartlist',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        unique:true
    },
    qnty:{
        type:Sequelize.INTEGER,
        allowNull:false


    }
})

module.exports=cartlist