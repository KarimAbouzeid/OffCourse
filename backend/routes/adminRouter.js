const express = require("express");
const router = express.Router();
const {
  addAdmin,
  addInstructor,
  addCorporateTrainee,
} = require("../controller/adminController");

// CREATE A NEW ADMIN
router.post("/addAdmin", addAdmin);

// CREATE A NEW INSTRUCTOR
router.post("/addInstructor", addInstructor);

router.post("/addCorporateTrainee", addCorporateTrainee);

module.exports = router;
