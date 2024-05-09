//import instance, models
const sequelize = require('./db')
// const Apprentice = require('../models/Apprentice')
// const Company = require('../models/Company')

//import my newly associated model
const { Company, Apprentice, Project } = require('../models/index')

const apprenticeData = require('../seeds/apprentice_data')
const companyData = require('../seeds/company_data')
const projectData = require('../seeds/project_data')

//Test to see if models sync to our db
//.sync() - helps us sync all models to our db
/* 
Refactor:
    - Wrap everything up in a function seedDB [x]
    - Everytime we restart our server -> clean out data and refresh our tables to preven dupelicate data [x]
    - If the sync was successful -> create an entry for Apprentice data + Company Data
    - Resolve all promises or else the transaction will hang (Pending Promise - will output in your terminal)
    - Chain our promise - indicate our seeding was successful
    - Define error log if not
    - Export seedDB
*/

function seedDB(){
    sequelize.sync({ force: true }).then(() => {
        //indicate to our console that our db has been cleared and recreated
        console.log('All tables were successfully dropped and recreated')

        //create the apprentice and companies entries for our db
        //model.create() -> Promise -> const apprenticePromises = [{promise Pending},{promise Pending},{promise Pending}]
        //iterate through our data -> Apprentice.create(apprentice)
        const apprenticePromises = apprenticeData.map((apprentice) => {
            //Apprentice.create(apprentice)
            return Apprentice.create(apprentice)
        })

        const companyPromises = companyData.map((company) => {
            return Company.create(company)
        })

        const projectPromises = projectData.map((project) => {
            return Project.create(project)
        })

        //resolve all the promises from apprenticePromises + companyPromises 
        return Promise.all([...apprenticePromises, ...companyPromises, ...projectPromises])

    }).then(() => {
        console.log('All apprentices and companies have been created and seeded successfully')
    })
    .catch((error) => {
        console.error("Error syncing our models or problem with seeding our database", error)
    })
} 

//invoke the function to seed information into our database
seedDB()

//export
module.exports = seedDB