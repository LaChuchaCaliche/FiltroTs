import { injectable,inject } from "tsyringe";
import ProductCartRepository from "../repositories/productCartRepository";
import { ProductCart } from "../models";

@injectable()

export default class ProductCartService {
    constructor(@inject(ProductCartRepository) private productCartRepository:ProductCartRepository){}
    async getAllProductCarts(){
        return this.productCartRepository.findAll();
    }
    async getProductCartById(id:number){
        return await this.productCartRepository.findById(id);
    }
    async createProductCart(productCart:Partial<ProductCart>){
        return await this.productCartRepository.create(productCart)
    }
    async updateProductCart(id:number,updates:Partial<ProductCart>){
        return await this.productCartRepository.update(id,updates)
    }
    async deleteProductCart(id:number){
        return await this.productCartRepository.delete(id);
    }
}