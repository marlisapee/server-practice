const router = require('express').Router();

const {
  getAllCompanies,
  getOneCompany,
  addCompany,
} = require('../controllers/company_controller');

router.get('/', getAllCompanies);
router.get('/:companyId', getOneCompany);
router.post('/', addCompany);

module.exports = router;
