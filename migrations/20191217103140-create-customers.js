'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      building: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.STRING
      },
      temperature: {
        type: Sequelize.INTEGER
      },
      humidity: {
        type: Sequelize.INTEGER
      },
      c02: {
        type: Sequelize.INTEGER
      },
      airquality: {
        type: Sequelize.INTEGER
      },
      lightlevel: {
        type: Sequelize.INTEGER
      },
      lightcolor: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};