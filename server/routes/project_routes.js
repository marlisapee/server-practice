const {
  getAllProjects,
  getOneProject,
  addProject,
  addApprenticeToProject,
  removeApprenticeFromProject,
} = require('../controllers/projects_controller');

const router = require('express').Router();

router.get('/', getAllProjects);
router.get('/:projectId', getOneProject);
router.post('/', addProject);
router.put('/:projectId/:apprenticeId', addApprenticeToProject);
router.delete('/:projectId/:apprenticeId', removeApprenticeFromProject);

module.exports = router;
