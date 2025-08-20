const sequelize = require("../utility/database");
const {Sequelize, DataTypes, Model} = require("sequelize");

const Announcements = sequelize.define("announcements",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    img1_url : {
        type : DataTypes.STRING,
        allowNull : true
    },
    img2_url : {
        type : DataTypes.STRING,
        allowNull : true
    },
    img3_url : {
        type : DataTypes.STRING,
        allowNull : true
    },
    img4_url : {
        type : DataTypes.STRING,
        allowNull : true
    },
    text : DataTypes.TEXT("long"),
    status : DataTypes.BOOLEAN

    
},{timestamps : false});

module.exports = Announcements;