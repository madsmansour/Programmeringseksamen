'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
    building: DataTypes.STRING,
    room: DataTypes.STRING,
    temperature: DataTypes.INTEGER,
    humidity: DataTypes.INTEGER,
    c02: DataTypes.INTEGER,
    airquality: DataTypes.INTEGER,
    lightlevel: DataTypes.INTEGER,
    lightcolor: DataTypes.INTEGER
  }, {});
  Customers.associate = function(models) {
    // associations can be defined here
  };
  return Customers;
};
