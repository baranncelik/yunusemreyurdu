const Sequelize = require("sequelize");

const sequelize = new Sequelize("railway", "root", "WUXXOVcdPvsQNvCHtRqVrLbSIKRRrsgn", {
    dialect: "mysql",
    host: "mysql.railway.internal",
    port: 3306,
    timezone: "+03:00"
});

module.exports = sequelize;
