"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const entitiesServices_1 = __importDefault(require("../services/entitiesServices"));
class EntitiesController {
    static async getAllEntities(req, res) {
        const entitiesServices = tsyringe_1.container.resolve(entitiesServices_1.default);
        const entities = await entitiesServices.getAllentities();
        res.json(entities);
    }
    static async getEntitieById(req, res) {
        const entitiesServices = tsyringe_1.container.resolve(entitiesServices_1.default);
        const entitie = await entitiesServices.getEntitieById(parseInt(req.params.id));
        res.json(entitie);
    }
    static async createEntitie(req, res) {
        const entitieService = tsyringe_1.container.resolve(entitiesServices_1.default);
        const entitie = await entitieService.createEntitie(req.body);
        res.status(201).json(entitie);
    }
    static async updateEntitie(req, res) {
        const entitieService = tsyringe_1.container.resolve(entitiesServices_1.default);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const entitie = await entitieService.updateEntitie(id, updates);
        if (entitie) {
            res.status(200).json({
                status: 200,
                message: "Entitie was successfully updated",
                data: entitie,
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: "Entitie not found",
            });
        }
    }
    static async deleteEntitie(req, res) {
        const entitieService = tsyringe_1.container.resolve(entitiesServices_1.default);
        const id = parseInt(req.params.id);
        await entitieService.deleteEntitie(id);
        res.status(204).json({
            status: 204,
            message: "Entitie was successfully deleted",
        });
    }
}
exports.default = EntitiesController;
