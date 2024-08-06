import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ProductService from '../services/productService';

export default class ProductController {
    static async getAllProducts(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const products = await productService.getAllProducts();
        res.json(products);
    }

    static async getProductById(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const product = await productService.getProductById(parseInt(req.params.id));
        res.json(product);
    }


    static async createProduct(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    }
    static async updateProduct(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const product = await productService.updateProduct(id, updates);
        if (product) {
          res.status(200).json({
            status: 200,
            message: "Product was successfully updated",
            data: product,
          });
        } else {
          res.status(404).json({
            status: 404,
            message: "Product not found",
          });
        }
      }
    
      static async deleteProduct(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const id = parseInt(req.params.id);
        await productService.deleteProduct(id);
        res.status(204).json({
          status: 204,
          message: "Product was successfully deleted",
        });
      }
}