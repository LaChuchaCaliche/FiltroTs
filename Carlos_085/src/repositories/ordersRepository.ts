import { injectable } from 'tsyringe';
import {orders} from '../models/orders';


@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class ordersRepository {
    async findAll() {
        return await orders.findAll();
    }

    async findById(id: number) {
        return await orders.findByPk(id);
    }

    async findByUserId(userId: number) {
        return await orders.findAll({ where: { userId } });
    }

    async create(order: Partial<orders>) {
        return await orders.create(order)
    }
}