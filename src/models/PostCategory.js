'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const tablePostCategory = sequelize.define('PostCategory',{
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    tableName: 'post_categories',
    underscored: true,
  })
  return tablePostCategory;
};