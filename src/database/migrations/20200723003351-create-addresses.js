'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('addresses', {
       id: {
         type: sequelize.INTEGER,
         primaryKey: true, 
         autoIncrement: true,
         allowNull: false,
       },
       user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
       },
       zipcode: {
         type: sequelize.STRING,
         allowNull: false, 
       },
       street: {
         type: sequelize.STRING,
         allowNull: false,
       },
       number: {
        type: sequelize.INTEGER,
        allowNull: false
       },
       created_at: {
         type: sequelize.DATE,
         allowNull: false
       },
       updated_at: {
         type: sequelize.DATE,
         allowNull: false,
       },
      });
     
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.dropTable('addresses');

  }
};
