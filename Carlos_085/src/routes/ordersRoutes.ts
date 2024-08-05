import { Router } from 'express';
import OrderController from '../controllers/orderController';

export const orderRouter = Router();

orderRouter.get('/', OrderController.getAllOrders);
orderRouter.get('/:id', OrderController.getOrderById);
orderRouter.post('/', OrderController.createOrder);