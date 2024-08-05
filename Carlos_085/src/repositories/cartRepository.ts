import { injectable } from 'tsyringe';
import {Cart} from '../models/carts';


@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class CartRepository {
    async findAll() {
        return await Cart.findAll();
    }

    async findById(id: number) {
        return await Cart.findByPk(id);
    }

    async findByUserId(userId: number) {
        return await Cart.findAll({ where: { userId } });
    }

    async create(cart: Partial<Cart>) {
        return await Cart.create(cart)
    }
    async update(id:number,updates:Partial<Cart>){
        const cart = await this.findById(id);
        if(!cart) throw new Error('Cart not found')
        return await cart.update(updates)
    }
    async delete(id:number){
        const cart = await this.findById(id);
        if(!cart) throw new Error('Cart not found');
        return await cart.destroy();
    }
}