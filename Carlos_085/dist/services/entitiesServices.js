"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const entitiesRepository_1 = __importDefault(require("../repositories/entitiesRepository"));
let EntitieServices = class EntitieServices {
    constructor(entitieRepository) {
        this.entitieRepository = entitieRepository;
    }
    async getAllentities() {
        return await this.entitieRepository.findAll();
    }
    async getEntitieById(id) {
        return await this.entitieRepository.findById(id);
    }
    async createEntitie(entitie) {
        return await this.entitieRepository.create(entitie);
    }
    async updateEntitie(id, updates) {
        return await this.entitieRepository.update(id, updates);
    }
    async deleteEntitie(id) {
        return await this.entitieRepository.delete(id);
    }
};
EntitieServices = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(entitiesRepository_1.default)),
    __metadata("design:paramtypes", [entitiesRepository_1.default])
], EntitieServices);
exports.default = EntitieServices;