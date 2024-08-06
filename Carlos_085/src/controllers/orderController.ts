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


    static async createOrder(req: Request, res: Response) {
        const ordersServices = container.resolve(OrdersServices);
        const order = await ordersServices.createOrder(req.body);
        res.status(201).json(order);
    }
    static async updateOrder(req: Request, res: Response) {
        const orderService = container.resolve(OrdersServices);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const order = await orderService.updateOrder(id, updates);
        if (order) {
          res.status(200).json({
            status: 200,
            message: "Order was successfully updated",
            data: order,
          });
        } else {
          res.status(404).json({
            status: 404,
            message: "Order not found",
          });
        }
      }
    
      static async deleteOrder(req: Request, res: Response) {
        const orderService = container.resolve(OrdersServices);
        const id = parseInt(req.params.id);
        await orderService.deleteOrder(id);
        res.status(204).json({
          status: 204,
          message: "Order was successfully deleted",
        });
}}