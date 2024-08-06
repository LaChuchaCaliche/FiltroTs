"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const entities_1 = require("../models/entities");
let EntitieRepository = class EntitieRepository {
    async findAll() {
        return await entities_1.Entitie.findAll();
    }
    async findById(id) {
        return await entities_1.Entitie.findByPk(id);
    }
    async create(entitie) {
        return await entities_1.Entitie.create(entitie);
    }
    async update(id, updates) {
        const entitie = await this.findById(id);
        if (!entitie)
            throw new Error('Entitie not found');
        return await entitie.update(updates);
    }
    async delete(id) {
        const entitie = await this.findById(id);
        if (!entitie)
            throw new Error('Entitie not found');
        return await entitie.destroy();
    }
};
EntitieRepository = __decorate([
    (0, tsyringe_1.injectable)() //Significa que la clase es un servicio que puede ser inyectado
], EntitieRepository);
exports.default = EntitieRepository;
