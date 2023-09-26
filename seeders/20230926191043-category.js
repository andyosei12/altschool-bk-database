'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'shoe',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'shirt',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'trouser',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
