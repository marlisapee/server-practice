const { Project, Apprentice } = require('../models');

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    if (!projects) res.status(404).send('projects do not exist...');
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
  }
};

const getOneProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const project = await Project.findByPk(projectId, {
      include: [Apprentice],
    });

    if (!project) res.status(404).send('cannot find project...');

    res.status(200).json(project);
  } catch (error) {
    console.error(error);
  }
};

const addProject = async (req, res) => {
  try {
    const projectDetails = req.body;
    if (!projectDetails) res.status(400).send('request body cannot be null...');
    const newProject = await Project.create(projectDetails);
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
  }
};

const addApprenticeToProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const apprenticeId = req.params.apprenticeId;

    const project = await Project.findByPk(projectId);
    const apprentice = await Apprentice.findByPk(apprenticeId);

    if (!project || !apprentice)
      res.status(404).send('cannot find project or apprentice');

    await project.addApprentice(apprentice);

    res.status(200).json(project);
  } catch (error) {
    console.error(error);
  }
};

const removeApprenticeFromProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const apprenticeId = req.params.apprenticeId;

    const project = await Project.findByPk(projectId);
    const apprentice = await Apprentice.findByPk(apprenticeId);

    if (!project || !apprentice)
      res.status(404).send('cannot find project or apprentice');

    await project.removeApprentice(apprentice);

    res.status(200).json(project);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getOneProject,
  getAllProjects,
  addProject,
  addApprenticeToProject,
  removeApprenticeFromProject,
};
