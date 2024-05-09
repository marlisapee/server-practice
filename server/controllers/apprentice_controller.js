const { Apprentice, Company, Project } = require('../models');

const getAllApprentices = async (req, res) => {
  try {
    const apprentices = await Apprentice.findAll();
    if (!apprentices) res.status(404).send('apprentices not found...');
    res.status(200).json(apprentices);
  } catch (error) {
    console.error(error);
  }
};

const getOneApprentice = async (req, res) => {
  try {
    const apprenticeId = req.params.apprenticeId;
    const apprentice = await Apprentice.findOne({
      where: { id: apprenticeId },
      include: [Company, Project],
    });
    if (!apprentice) res.status(404).send('apprentice not found...');
    res.status(200).json(apprentice);
  } catch (error) {
    console.error(error);
  }
};

const addApprentice = async (req, res) => {
  try {
    const apprenticeDetails = req.body;
    const checkIfApprenticeExists = await Apprentice.findOne({
      where: { email: apprenticeDetails.email },
    });

    if (!checkIfApprenticeExists) {
      const newApprentice = await Apprentice.create(apprenticeDetails);
      res.status(201).send(newApprentice);
    }
  } catch (error) {
    console.error(error);
  }
};

const updateApprentice = async (req, res) => {
  try {
    const apprenticeId = req.params.apprenticeId;
    const body = req.body;

    const apprentice = await Apprentice.findByPk(apprenticeId);
    if (!apprentice) res.status(404).send('apprentice not found...');

    await apprentice.update(body);
    await apprentice.save();

    res.status(200).send(apprentice);
  } catch (error) {
    console.error(error);
  }
};

const deleteApprentice = async (req, res) => {
  try {
    const apprenticeId = req.params.apprenticeId;
    const apprentice = await Apprentice.findByPk(apprenticeId);

    if (!apprentice) res.status(404).send('apprentice not found...');

    await apprentice.destroy();

    res.status(200).send('apprentice successfully removed...');
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllApprentices,
  getOneApprentice,
  addApprentice,
  updateApprentice,
  deleteApprentice,
};
