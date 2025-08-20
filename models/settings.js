const sequelize = require("../utility/database");
const {Sequelize, DataTypes} = require("sequelize");

const Settings = sequelize.define("settings",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    site_title : DataTypes.STRING,
    site_description : DataTypes.TEXT("long"),
    logo_url : DataTypes.STRING,
    img_url : DataTypes.STRING,
    footer_text : DataTypes.TEXT("long"),
    iban_title : DataTypes.STRING,
    iban : DataTypes.STRING,
    contact_phone : DataTypes.STRING,
    contact_wp : DataTypes.STRING,

},{timestamps : false});

module.exports = Settings;