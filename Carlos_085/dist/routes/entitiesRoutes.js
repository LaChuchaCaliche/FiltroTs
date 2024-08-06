"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entitiesRouter = void 0;
const express_1 = require("express");
const entitiesController_1 = __importDefault(require("../controllers/entitiesController"));
exports.entitiesRouter = (0, express_1.Router)();
exports.entitiesRouter.get("/", entitiesController_1.default.getAllEntities);
exports.entitiesRouter.get("/:id", entitiesController_1.default.getEntitieById);
exports.entitiesRouter.post("/", entitiesController_1.default.createEntitie);
exports.entitiesRouter.put("/:id", entitiesController_1.default.updateEntitie);
exports.entitiesRouter.delete("/:id", entitiesController_1.default.deleteEntitie);
