const bcrypt = require('bcrypt');

'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Вспомогательный метод для определения ассоциаций.
     * Этот метод не является частью жизненного цикла Sequelize.
     * Файл `models/index` автоматически вызовет этот метод.
     */
    static associate(models) {
      // здесь определяются ассоциации
    }

    /**
     * Хеширует пароль пользователя перед его сохранением в базу данных.
     */
    static async hashPassword(user) {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }
  }

  User.init({
    firstName: {
      type: DataTypes.STRING(128),
      field: 'first_name',
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING(128),
      field: 'last_name',
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    passwordRepeat: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    picturePath: {
      type: DataTypes.STRING,
      field: 'picture_path',
      validate: {
        notEmpty: true
      }
    },
    isMale: {
      type: DataTypes.BOOLEAN,
      field: 'is_male'
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
    hooks: {
      beforeCreate: User.hashPassword,
      beforeUpdate: User.hashPassword
    }
  });

  return User;
};