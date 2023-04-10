'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const usersTable = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
  })

  usersTable.associate = (models) => {
    usersTable.hasMany(models.BlogPosts, {
      foreignkey: 'userId',
      as: 'blog_posts'
    })
  }

  return usersTable;
};