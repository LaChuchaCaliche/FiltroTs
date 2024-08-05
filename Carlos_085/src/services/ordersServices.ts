import OrdersRepository from '../repositories/ordersRepository';
import { injectable, inject } from 'tsyringe';
import { orders } from '../models';

@injectable()
export default class OrdersServices {
    constructor(
        @inject(OrdersRepository) private orderRepository: OrdersRepository) {}

    async getAllOrders() {
        return await this.orderRepository.findAll();
    }

    async getOrderById(id: number) {
        return await this.orderRepository.findById(id);
    }

    async getOrdersUserId(userId: number) {
        return await this.orderRepository.findByUserId(userId);
    }

    async createOrder(order: Partial<orders>) {
        return await this.orderRepository.create(order);
    }
}