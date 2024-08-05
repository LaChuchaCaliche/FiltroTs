import ProductRepository from '../repositories/productRepository';
import { injectable, inject } from 'tsyringe';
import { Product } from '../models';

@injectable()
export default class ProductService {
    constructor(
        @inject(ProductRepository) private productRepository: ProductRepository
    ) {}

    async getAllProducts() {
        return await this.productRepository.findAll();
    }

    async getProductById(id: number) {
        return await this.productRepository.findById(id);
    }

    async createProduct(product: Partial<Product>) {
        return await this.productRepository.create(product);
    }
    async updateProduct(id:number,updates:Partial<Product>){
        return await this.productRepository.update(id,updates);
    }
    async deleteProduct(id:number){
        return await this.productRepository.delete(id);
    }
}