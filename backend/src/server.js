require('dotenv').config()
const app = require('./app')
require("./database/mongo");
const { appConfig } = require("./config");
const mysql = require('mysql');
const fs = require('fs');
const Sequelize = require('sequelize')
const cCA = fs.readFileSync(`${__dirname}/../pem/DigiCertGlobalRootCA.crt.pem`)


var sequelize = new Sequelize('viogenero', "grupo3", 'Violenciagenero1234', {
    host: process.env.hostname,
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        ssl: {
            ca: cCA
        }
    }
});

sequelize.authenticate()
    .then(() => {
        console.log("Abierta Sequelize")
    })




app.listen(appConfig.port, () => {
    console.log(`serve at http://localhost:${appConfig.port}`);
});
