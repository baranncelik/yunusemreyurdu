const sequelize = require("../utility/database");
const {Sequelize, DataTypes} = require("sequelize");

const Featured = sequelize.define("featured",{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    title : DataTypes.STRING,
    text : DataTypes.TEXT("long"),
    img_url : DataTypes.STRING,
},{timestamps : false});

module.exports = Featured;