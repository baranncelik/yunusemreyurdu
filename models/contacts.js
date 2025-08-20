const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utility/database");

const Contacts = sequelize.define("contacts", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT("long"),
    allowNull: true,
  },
  read: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: "contacts",
  timestamps: false
});

module.exports = Contacts;
