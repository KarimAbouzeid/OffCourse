const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const corporateTraineeModel = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CorporateTrainee", corporateTraineeModel);
