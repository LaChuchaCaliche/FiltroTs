import { injectable, inject } from 'tsyringe';
import { Cart } from '../models';
import CartRepository from '../repositories/cartRepository';


@injectable()
export default class CartServices {
    constructor(
        @inject(CartRepository) private cartRepository: CartRepository) {}

    async getAllcarts() {
        return await this.cartRepository.findAll();
    }

    async getCartById(id: number) {
        return await this.cartRepository.findById(id);
    }


    async createCart(cart: Partial<Cart>) {
        return await this.cartRepository.create(cart);
    }
    async updateCart(id:number,updates:Partial<Cart>){
        return await this.cartRepository.update(id,updates);
    }
    async deleteCart(id:number){
        return await this.cartRepository.delete(id);
    }
}