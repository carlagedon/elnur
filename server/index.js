require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const modele = require("./models/models.js");
const cors = require("cors");
const fileUpload = require('express-fileupload')
const router = require("./routes/index");
const errorHandler = require("./meddleware/ErrorHandlingMiddleweare");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}))
app.use("/api", router);

// обратная ошибка, последний M  iddleweare
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //start server
  } catch (e) {
    console.log(e);
  }
};

start();
