"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const orders_1 = require("../models/orders");
let OrderRepository = class OrderRepository {
    async findAll() {
        return await orders_1.Order.findAll();
    }
    async findById(id) {
        return await orders_1.Order.findByPk(id);
    }
    async create(order) {
        return await orders_1.Order.create(order);
    }
    async update(id, updates) {
        const order = await this.findById(id);
        if (!order)
            throw new Error('Order not found');
        return await order.update(updates);
    }
    async delete(id) {
        const order = await this.findById(id);
        if (!order)
            throw new Error('Order not found');
        return await order.destroy();
    }
};
OrderRepository = __decorate([
    (0, tsyringe_1.injectable)() //Significa que la clase es un servicio que puede ser inyectado
], OrderRepository);
exports.default = OrderRepository;
