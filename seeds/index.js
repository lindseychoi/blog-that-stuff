const sequelize = require('../config/connection');
const m1 = require('../models/m1');
const m2 = require('../models/m2');
const m3 = require('../models/m3');
const dishData = require('./seeds1-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await m1.bulkCreate(m1Data, {
    individualHooks: true,
    returning: true,
  });

  await m2.bulkCreate(m2Data, {
    individualHooks: true,
    returning: true,
  });

  await m3.bulkCreate(m3Data, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();