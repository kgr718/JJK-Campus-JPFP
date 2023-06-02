// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Campuses = require("./models/campuses");
const Students = require("./models/Students")


// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)
Students.belongsTo(Campuses);
Campuses.hasMany(Students);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Campuses,
  Students,

};