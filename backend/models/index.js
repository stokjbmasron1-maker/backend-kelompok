const sequelize = require('../config/database');
const User = require('./User');
const Article = require('./Article');
const Teacher = require('./Teacher');
const Program = require('./Program');
const ProgramFeature = require('./ProgramFeature');
const Contact = require('./Contact');
const FAQ = require('./FAQ');
const Testimonial = require('./Testimonial');
const Subscription = require('./Subscription');

Program.hasMany(ProgramFeature, { foreignKey: 'program_id', as: 'features' });
ProgramFeature.belongsTo(Program, { foreignKey: 'program_id' });

module.exports = {
  sequelize,
  User,
  Article,
  Teacher,
  Program,
  ProgramFeature,
  Contact,
  FAQ,
  Testimonial,
  Subscription,
};
