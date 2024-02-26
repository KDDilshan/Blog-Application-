'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('addresses',[
      {
        address:"331/10,kerewaalapitiya hendala",
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address:"510/10,kerewaalapitiya hendala wattala",
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
