const Sequelize = require("sequelize");

const sequelize = new Sequelize("dormitory_db","root","BaranCelik!48650913",{
    dialect : "mysql",
    host : "localhost",
    timezone : "+03:00"
});

module.exports = sequelize;