import { Request, Response } from 'express';
import { container } from 'tsyringe';
import OrdersServices from '../services/ordersServices';

export default class orderController {
    static async getAllOrders(req: Request, res: Response) {
        const orderService = container.resolve(OrdersServices);
        const orders = await orderService.getAllOrders();
        res.json(orders);
    }

    static async getOrderById(req: Request, res: Response) {
        const orderService = container.resolve(OrdersServices);
        const order = await orderService.getOrderById(parseInt(req.params.id));
        res.json(order);
    }

    static async getOrdersByUserId(req: Request, res: Response) {
        const orderService = container.resolve(OrdersServices);
        const order = await orderService.getOrdersUserId(parseInt(req.params.userId));
        res.json(order);
    }

    static async createOrder(req: Request, res: Response) {
        const ordersServices = container.resolve(OrdersServices);
        const order = await ordersServices.createOrder(req.body);
        res.status(201).json(order);
    }
}