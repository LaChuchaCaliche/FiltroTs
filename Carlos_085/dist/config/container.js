"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const userService_1 = __importDefault(require("../services/userService"));
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const productRepository_1 = __importDefault(require("../repositories/productRepository"));
const productService_1 = __importDefault(require("../services/productService"));
const ordersRepository_1 = __importDefault(require("../repositories/ordersRepository"));
const ordersServices_1 = __importDefault(require("../services/ordersServices"));
const productCartRepository_1 = __importDefault(require("../repositories/productCartRepository"));
const productCartServices_1 = __importDefault(require("../services/productCartServices"));
const entitiesRepository_1 = __importDefault(require("../repositories/entitiesRepository"));
const entitiesServices_1 = __importDefault(require("../services/entitiesServices"));
const rolesRepository_1 = __importDefault(require("../repositories/rolesRepository"));
const rolesServices_1 = __importDefault(require("../services/rolesServices"));
const cartRepository_1 = __importDefault(require("../repositories/cartRepository"));
const cartsServices_1 = __importDefault(require("../services/cartsServices"));
tsyringe_1.container.registerSingleton(userRepository_1.default);
tsyringe_1.container.registerSingleton(userService_1.default);
tsyringe_1.container.registerSingleton(productRepository_1.default);
tsyringe_1.container.registerSingleton(productService_1.default);
tsyringe_1.container.registerSingleton(ordersRepository_1.default);
tsyringe_1.container.registerSingleton(ordersServices_1.default);
tsyringe_1.container.registerSingleton(productCartRepository_1.default);
tsyringe_1.container.registerSingleton(productCartServices_1.default);
tsyringe_1.container.registerSingleton(entitiesRepository_1.default);
tsyringe_1.container.registerSingleton(entitiesServices_1.default);
tsyringe_1.container.registerSingleton(rolesRepository_1.default);
tsyringe_1.container.registerSingleton(rolesServices_1.default);
tsyringe_1.container.registerSingleton(cartRepository_1.default);
tsyringe_1.container.registerSingleton(cartsServices_1.default);
