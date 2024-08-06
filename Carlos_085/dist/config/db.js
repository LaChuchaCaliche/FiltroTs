"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: '5.161.244.18',
    username: 'root',
    password: 'mypassword',
    database: 'admin1',
    models: [models_1.User, models_1.Product, models_1.Order, models_1.Cart, models_1.Entitie, models_1.ProductCart, models_1.Role], // Añade todos tus modelos aquí
});
exports.default = sequelize;
