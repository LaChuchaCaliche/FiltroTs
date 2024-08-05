import { injectable } from 'tsyringe';
import { Product } from '../models';


@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class ProductRepository {
    async findAll() {
        return await Product.findAll();
    }

    async findById(id: number) {
        return await Product.findByPk(id);
    }

    async create(product: Partial<Product>) {
        return await Product.create(product);
    }
    async update(id:number, updates: Partial<Product>){
        const product = await this.findById(id);
        if(!product) throw new Error('Product not found');
        return await product.update(updates);
    }
    async delete(id:number){
        const product = await this.findById(id);
        if(!product) throw new Error('Product not found');
        return await product.destroy();
    }
}