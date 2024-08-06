"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const models_1 = require("../models");
let ProductRepository = class ProductRepository {
    async findAll() {
        return await models_1.Product.findAll();
    }
    async findById(id) {
        return await models_1.Product.findByPk(id);
    }
    async create(product) {
        return await models_1.Product.create(product);
    }
    async update(id, updates) {
        const product = await this.findById(id);
        if (!product)
            throw new Error('Product not found');
        return await product.update(updates);
    }
    async delete(id) {
        const product = await this.findById(id);
        if (!product)
            throw new Error('Product not found');
        return await product.destroy();
    }
};
ProductRepository = __decorate([
    (0, tsyringe_1.injectable)() //Significa que la clase es un servicio que puede ser inyectado
], ProductRepository);
exports.default = ProductRepository;
