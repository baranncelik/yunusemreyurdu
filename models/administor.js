const sequelize = require("../utility/database");
const {Sequelize , DataTypes} = require("sequelize");

const Administor = sequelize.define("administor" , {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name : DataTypes.STRING,
  password : DataTypes.STRING
},{timestamps : false});

module.exports = Administor;