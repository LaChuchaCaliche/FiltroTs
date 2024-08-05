import { injectable } from 'tsyringe';
import {Order} from '../models/orders';


@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class OrderRepository {
    async findAll() {
        return await Order.findAll();
    }

    async findById(id: number) {
        return await Order.findByPk(id);
    }

    async create(order: Partial<Order>) {
        return await Order.create(order)
    }
    async update(id:number, updates:Partial <Order>){
        const order = await this.findById(id);
        if (!order) throw new Error('Order not found');
        return await order.update(updates);
    }
    async delete(id:number){
        const order = await this.findById(id);
        if(!order) throw new Error('Order not found');
        return await order.destroy();
    }
}