'use strict';
const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // const userIdArray = await queryInterface.sequelize.query('select id from Users', { type: QueryTypes.SELECT })
    // const albumIdArray = await queryInterface.sequelize.query('select id from Albums', { type: QueryTypes.SELECT })
    const data = []
    for (let i = 1; i < 9; ++i) {
      data.push({
        userId: i,
        albumId: i,
        title: `User${i}'s Song`,
        description: `User${i}'s Song Description`,
        url: `http://example.io/song/${i}`,
        imageUrl: `https://loremflickr.com/300/300?random=${i}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    await queryInterface.bulkInsert('Songs', data)
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Songs');
  }
};
