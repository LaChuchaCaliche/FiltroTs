"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ordersServices_1 = __importDefault(require("../services/ordersServices"));
class orderController {
    static async getAllOrders(req, res) {
        const orderService = tsyringe_1.container.resolve(ordersServices_1.default);
        const orders = await orderService.getAllOrders();
        res.json(orders);
    }
    static async getOrderById(req, res) {
        const orderService = tsyringe_1.container.resolve(ordersServices_1.default);
        const order = await orderService.getOrderById(parseInt(req.params.id));
        res.json(order);
    }
    static async createOrder(req, res) {
        const ordersServices = tsyringe_1.container.resolve(ordersServices_1.default);
        const order = await ordersServices.createOrder(req.body);
        res.status(201).json(order);
    }
    static async updateOrder(req, res) {
        const orderService = tsyringe_1.container.resolve(ordersServices_1.default);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const order = await orderService.updateOrder(id, updates);
        if (order) {
            res.status(200).json({
                status: 200,
                message: "Order was successfully updated",
                data: order,
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: "Order not found",
            });
        }
    }
    static async deleteOrder(req, res) {
        const orderService = tsyringe_1.container.resolve(ordersServices_1.default);
        const id = parseInt(req.params.id);
        await orderService.deleteOrder(id);
        res.status(204).json({
            status: 204,
            message: "Order was successfully deleted",
        });
    }
}
exports.default = orderController;
