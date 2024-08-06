"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const rolesServices_1 = __importDefault(require("../services/rolesServices"));
class RoleController {
    static async getAllRoles(req, res) {
        const roleService = tsyringe_1.container.resolve(rolesServices_1.default);
        const roles = await roleService.getAllRoles();
        res.json(roles);
    }
    static async getRoleById(req, res) {
        const roleService = tsyringe_1.container.resolve(rolesServices_1.default);
        const role = await roleService.getRolesById(parseInt(req.params.id));
        res.json(role);
    }
    static async createRole(req, res) {
        const roleService = tsyringe_1.container.resolve(rolesServices_1.default);
        const role = await roleService.createRole(req.body);
        res.status(201).json(role);
    }
    static async updateRole(req, res) {
        const roleService = tsyringe_1.container.resolve(rolesServices_1.default);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const role = await roleService.updateRole(id, updates);
        if (role) {
            res.status(200).json({
                status: 200,
                message: "Role was successfully updated",
                data: role,
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: "Role not found",
            });
        }
    }
    static async deleteRole(req, res) {
        const productService = tsyringe_1.container.resolve(rolesServices_1.default);
        const id = parseInt(req.params.id);
        await productService.deleteRole(id);
        res.status(204).json({
            status: 204,
            message: "Role was successfully deleted",
        });
    }
}
exports.default = RoleController;
