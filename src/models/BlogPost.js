'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const tableBlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false,
  });

  tableBlogPost.associate = (models) => {
    tableBlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  }
  return tableBlogPost;
};