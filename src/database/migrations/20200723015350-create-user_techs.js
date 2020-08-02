'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('user_techs', {
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
       techs_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: { model: 'techs', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
  
    await queryInterface.dropTable('user_techs');

  }
};
