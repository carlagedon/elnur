require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const modele = require('./models/models.js')
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const router = require('./routers/index.js')

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
  try {
      await sequelize.authenticate()
      await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //start server
  } catch (e) {
    console.log(e);
  }
};

start();
