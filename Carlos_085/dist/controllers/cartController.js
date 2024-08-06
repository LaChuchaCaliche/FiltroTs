"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const cartsServices_1 = __importDefault(require("../services/cartsServices"));
class CartController {
    static async getAllCarts(req, res) {
        const cartService = tsyringe_1.container.resolve(cartsServices_1.default);
        const carts = await cartService.getAllCarts();
        res.json(carts);
    }
    static async getCartById(req, res) {
        const cartService = tsyringe_1.container.resolve(cartsServices_1.default);
        const cart = await cartService.getCartById(parseInt(req.params.id));
        res.json(cart);
    }
    static async createCart(req, res) {
        const cartService = tsyringe_1.container.resolve(cartsServices_1.default);
        const cart = await cartService.createCart(req.body);
        res.status(201).json(cart);
    }
    static async updateCart(req, res) {
        const cartService = tsyringe_1.container.resolve(cartsServices_1.default);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const cart = await cartService.updateCart(id, updates);
        if (cart) {
            res.status(200).json({
                status: 200,
                message: "Cart was successfully updated",
                data: cart,
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: "Cart not found",
            });
        }
    }
    static async deleteCart(req, res) {
        const cartService = tsyringe_1.container.resolve(cartsServices_1.default);
        const id = parseInt(req.params.id);
        await cartService.deleteCart(id);
        res.status(204).json({
            status: 204,
            message: "Cart was successfully deleted",
        });
    }
}
exports.default = CartController;
