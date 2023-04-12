'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    }, {
      underscored: true,
      timestamps: false,
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
