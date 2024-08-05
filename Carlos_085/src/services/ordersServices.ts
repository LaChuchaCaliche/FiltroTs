import OrdersRepository from '../repositories/ordersRepository';
import { injectable, inject } from 'tsyringe';
import { Order} from '../models';

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

    async createOrder(order: Partial<Order>) {
        return await this.orderRepository.create(order);
    }

    async updateOrder(id:number, updates:Partial<Order>){
        return await this.orderRepository.update(id,updates);
    }
    async deleteGame(id:number){
        return await this.orderRepository.delete(id);
    }
}