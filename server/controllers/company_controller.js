const { Company, Apprentice, Project } = require('../models');

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll({ include: [Apprentice] });
    if (!companies) res.status(404).send('companies not found...');
    res.status(200).json(companies);
  } catch (error) {
    console.error(error);
  }
};

const getOneCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const company = await Company.findOne({
      where: { id: companyId },
      include: [Apprentice],
    });

    if (!company) res.status(404).send('company not found...');

    res.status(200).json(company);
  } catch (error) {
    console.error(error);
  }
};

const addCompany = async (req, res) => {
  try {
    const companyDetails = req.body;
    const checkIfCompanyExists = await Company.findOne({
      where: { name: companyDetails.name },
    });

    if (!checkIfCompanyExists) {
      const newCompany = await Company.create(companyDetails);
      res.status(201).send(newCompany);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllCompanies,
  getOneCompany,
  addCompany,
};
