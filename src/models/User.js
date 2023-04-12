'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const usersTable = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  })

  usersTable.associate = (models) => {
    usersTable.hasMany(models.BlogPost, {
      foreignkey: 'userId',
      as: 'blog_posts'
    })
  }

  return usersTable;
};