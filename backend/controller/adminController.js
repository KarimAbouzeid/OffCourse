const mongoose = require("mongoose");

const Admin = require("../models/adminModel");
const Instructor = require("../models/instructorModel");
const CorporateTrainee = require("../models/corporateTraineeModel");
const addAdmin = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;
    const admin = await Admin.create({
      username: username,
      password: password,
    });
    res.status(200).json({ admin: admin });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const addInstructor = async (req, res) => {
  try {
    const { username, password } = req.body;
    const instructor = await Instructor.create({
      username: username,
      password: password,
    });
    res.status(200).json(instructor);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const addCorporateTrainee = async (req, res) => {
  try {
    const { username, password } = req.body;
    const corporateTrainee = await CorporateTrainee.create({
      username: username,
      password: password,
    });
    res.status(200).json(corporateTrainee);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  addAdmin,
  addInstructor,
  addCorporateTrainee,
};
