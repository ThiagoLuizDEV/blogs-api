'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const tableCategories = sequelize.define('Category', {
    id: DataTypes.INTENGER,
    name: DataTypes.STRING
  }, {
    tableName: 'categories',
    underscored: true,
  })
  return tableCategories;
};