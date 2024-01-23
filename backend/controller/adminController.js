const mongoose = require("mongoose");

const Admin = require("../models/adminModel");
const Instructor = require("../models/instructorModel");
const CorporateTrainee = require("../models/corporateTraineeModel");
const User = require("../models/userModel");
const addAdmin = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;
    const userExists = await User.find({ username: username });
    if (userExists.length > 0) {
      return res
        .status(200)
        .json({ message: "A user with such a username already exists!" });
    }
    const user = await User.create({
      username: username,
      password: password,
    });
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
    const userExists = await User.find({ username: username });
    if (userExists.length > 0) {
      return res
        .status(200)
        .json({ message: "A user with such a username already exists!" });
    }
    const user = await User.create({
      username: username,
      password: password,
    });
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
    const userExists = await User.find({ username: username });
    if (userExists.length > 0) {
      return res
        .status(200)
        .json({ message: "A user with such a username already exists!" });
    }
    const user = await User.create({
      username: username,
      password: password,
    });
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
