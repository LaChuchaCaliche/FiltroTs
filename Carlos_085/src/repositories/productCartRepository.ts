import { injectable } from 'tsyringe';
import { ProductCart } from '../models';


@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class ProductCartRepository {
    async findAll() {
        return await ProductCart.findAll();
    }

    async findById(id: number) {
        return await ProductCart.findByPk(id);
    }

    async create(productCart: Partial<ProductCart>) {
        return await ProductCart.create(productCart);
    }
    async update(id:number, updates: Partial<ProductCart>){
        const productCart = await this.findById(id);
        if(!productCart) throw new Error('ProductCart not found');
        return await productCart.update(updates);
    }
    async delete(id:number){
        const productCart = await this.findById(id);
        if(!productCart) throw new Error('Product not found');
        return await productCart.destroy();
    }
}