const Sequelize = require("sequelize");

const sequelize = new Sequelize("railway", "root", "WUXXOVcdPvsQNvCHtRqVrLbSIKRRrsgn", {
    dialect: "mysql",
    host: "shuttle.proxy.rlwy.net",
    port: 44548,
    timezone: "+03:00"
});

module.exports = sequelize;
