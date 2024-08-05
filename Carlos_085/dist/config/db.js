"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'by9zklrqidsc3qcr74ju-mysql.services.clever-cloud.com',
    username: 'uvdeb2pilorhfwqw',
    password: 'bug3uGJ3kgEtoTFnRsoM',
    database: 'by9zklrqidsc3qcr74ju',
    models: [models_1.User, models_1.Product], // Añade todos tus modelos aquí
});
exports.default = sequelize;
