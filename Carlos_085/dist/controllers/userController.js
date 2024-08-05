"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    static async getAllUsers(_, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const users = await userService.getAllUsers();
        res.json(users);
    }
    static async getUserById(req, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const user = await userService.getUserById(parseInt(req.params.id));
        res.json(user);
    }
    static async createUser(req, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }
}
exports.default = UserController;
