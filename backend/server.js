const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const courseRouter = require("./routes/courseRouter");
const adminRouter = require("./routes/adminRouter");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening to PORT", process.env.PORT);
    });
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/courses", courseRouter);
app.use("/api/admin", adminRouter);
