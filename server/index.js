require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const PORT = process.env.PORT || 5000;

const app = express();


const start = async () => {
    try{

    } catch (e) {
        
    }
}


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))