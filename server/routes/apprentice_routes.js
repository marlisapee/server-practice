const router = require('express').Router();

// import controllers
const {
  getAllApprentices,
  getOneApprentice,
  addApprentice,
  updateApprentice,
  deleteApprentice,
} = require('../controllers/apprentice_controller');

router.get('/', getAllApprentices);
router.get('/:apprenticeId', getOneApprentice);
router.post('/', addApprentice);
router.put('/:apprenticeId', updateApprentice);
router.delete('/:apprenticeId', deleteApprentice);

module.exports = router;
