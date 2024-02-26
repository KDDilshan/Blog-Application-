'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('categories',[
    {
      name:'Nodejs',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Vuejs',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Reactjs',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Angluler',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'ReactNative',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Larvel',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories',{},null)
  }
};
