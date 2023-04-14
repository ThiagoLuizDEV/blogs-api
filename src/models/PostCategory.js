'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const tablePostCategory = sequelize.define('PostCategory',{
    postId:{
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
     },
     categoryId: {
       type: DataTypes.INTEGER,
       allowNull: false,
      primaryKey: true,
     }
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  })

  tablePostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,{
      foreignKey: 'postId',
      as: 'posts',
      through: tablePostCategory
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId',
      as: 'categories',
      through: tablePostCategory,
    });
    }
  return tablePostCategory;
};
