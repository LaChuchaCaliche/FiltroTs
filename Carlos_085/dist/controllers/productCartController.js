"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productCartServices_1 = __importDefault(require("../services/productCartServices"));
;
class ProductCartController {
    static async getAllProductsCart(req, res) {
        const productCartServices = tsyringe_1.container.resolve(productCartServices_1.default);
        const productCarts = await productCartServices.getAllProductCarts();
        res.json(productCarts);
    }
    static async getProductCartById(req, res) {
        const productCartService = tsyringe_1.container.resolve(productCartServices_1.default);
        const productCart = await productCartService.getProductCartById(parseInt(req.params.id));
        res.json(productCart);
    }
    static async createProductCart(req, res) {
        const productCartService = tsyringe_1.container.resolve(productCartServices_1.default);
        const productCart = await productCartService.createProductCart(req.body);
        res.status(201).json(productCart);
    }
    static async updateProductCart(req, res) {
        const productCartService = tsyringe_1.container.resolve(productCartServices_1.default);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const productCart = await productCartService.updateProductCart(id, updates);
        if (productCart) {
            res.status(200).json({
                status: 200,
                message: "ProductCart was successfully updated",
                data: productCart,
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: "Product cart not found",
            });
        }
    }
    static async deleteProductCart(req, res) {
        const productCartService = tsyringe_1.container.resolve(productCartServices_1.default);
        const id = parseInt(req.params.id);
        await productCartService.deleteProductCart(id);
        res.status(204).json({
            status: 204,
            message: "Product cart was successfully deleted",
        });
    }
}
exports.default = ProductCartController;
