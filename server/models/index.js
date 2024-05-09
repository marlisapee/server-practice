const Company = require('./Company');
const Apprentice = require('./Apprentice');
const Project = require('./Project');

Company.hasMany(Apprentice); //Apprentice(many) -> foreignKey companyID -> OneId

Apprentice.belongsTo(Company);

Apprentice.belongsToMany(Project, { through: 'ApprenticeProjects' });
Project.belongsToMany(Apprentice, { through: 'ApprenticeProjects' });

module.exports = { Company, Apprentice, Project };
