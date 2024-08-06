"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const carts_1 = require("../models/carts");
let CartRepository = class CartRepository {
    async findAll() {
        return await carts_1.Cart.findAll();
    }
    async findById(id) {
        return await carts_1.Cart.findByPk(id);
    }
    async findByUserId(userId) {
        return await carts_1.Cart.findAll({ where: { userId } });
    }
    async create(cart) {
        return await carts_1.Cart.create(cart);
    }
    async update(id, updates) {
        const cart = await this.findById(id);
        if (!cart)
            throw new Error('Cart not found');
        return await cart.update(updates);
    }
    async delete(id) {
        const cart = await this.findById(id);
        if (!cart)
            throw new Error('Cart not found');
        return await cart.destroy();
    }
};
CartRepository = __decorate([
    (0, tsyringe_1.injectable)() //Significa que la clase es un servicio que puede ser inyectado
], CartRepository);
exports.default = CartRepository;
