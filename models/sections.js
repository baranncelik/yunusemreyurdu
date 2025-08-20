const { SELECT } = require("sequelize/lib/query-types");
const sequelize = require("../utility/database");
const {Sequelize, DataTypes, DATE, STRING} = require("sequelize");

const Sections = sequelize.define("sections" , {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    gayemiz_img_url : DataTypes.STRING,
    gayemiz_text : DataTypes.TEXT("long"),
    hedefimiz_img_url : DataTypes.STRING,
    hedefimiz_text : DataTypes.TEXT("long"),
    charity_text : DataTypes.TEXT("long"),
},{timestamps : false});


module.exports = Sections;