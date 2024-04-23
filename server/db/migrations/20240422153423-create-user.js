'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(128),
        field: 'first_name',
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      lastName: {
        type: Sequelize.STRING(128),
        field: 'last_name',
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: Sequelize.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Password cannot be empty'
          },
          len: {
            args: [16], 
            msg: 'Password must be at least 8 characters long'
          }
        }
        
      },
      passwordRepeat: {
        type: Sequelize.STRING(128),
        field: 'password_repeat',
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Password cannot be empty'
          },
          len: {
            args: [16], 
            msg: 'Password must be at least 8 characters long'
          }
        }
      },
      picturePath: {
        type: Sequelize.STRING,
        field: 'picture_path',
        validate: {
          notEmpty: true
        }
      },
      isMale: {
        type: Sequelize.BOOLEAN,
        field: 'is_male'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};