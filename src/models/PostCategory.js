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
    timestamps: false,
  })

  tablePostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,{
      foreignKey: 'categoryId',
      as: 'posts',
      through: tablePostCategory
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      as: 'categories',
      through: tablePostCategory,
    });
    }
  return tablePostCategory;
};