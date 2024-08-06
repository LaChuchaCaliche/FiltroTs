import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ProductCartService from '../services/productCartServices';
;

export default class ProductCartController {
    static async getAllProductsCart(req: Request, res: Response) {
        const productCartServices = container.resolve(ProductCartService);
        const productCarts = await productCartServices.getAllProductCarts();
        res.json(productCarts);
    }

    static async getProductCartById(req: Request, res: Response) {
        const productCartService = container.resolve(ProductCartService);
        const productCart = await productCartService.getProductCartById(parseInt(req.params.id));
        res.json(productCart);
    }


    static async createProductCart(req: Request, res: Response) {
        const productCartService = container.resolve(ProductCartService);
        const productCart = await productCartService.createProductCart(req.body);
        res.status(201).json(productCart);
    }
    static async updateProductCart(req: Request, res: Response) {
        const productCartService = container.resolve(ProductCartService);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const productCart = await productCartService.updateProductCart(id, updates);
        if (productCart) {
          res.status(200).json({
            status: 200,
            message: "ProductCart was successfully updated",
            data: productCart,
          });
        } else {
          res.status(404).json({
            status: 404,
            message: "Product cart not found",
          });
        }
      }
    
      static async deleteProductCart(req: Request, res: Response) {
        const productCartService = container.resolve(ProductCartService);
        const id = parseInt(req.params.id);
        await productCartService.deleteProductCart(id);
        res.status(204).json({
          status: 204,
          message: "Product cart was successfully deleted",
        });
      }
}