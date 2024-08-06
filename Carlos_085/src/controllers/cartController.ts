import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CartServices from '../services/cartsServices';

export default class CartController {
    static async getAllCarts(req: Request, res: Response) {
        const cartService = container.resolve(CartServices);
        const carts = await cartService.getAllCarts();
        res.json(carts);
    }

    static async getCartById(req: Request, res: Response) {
        const cartService = container.resolve(CartServices);
        const cart = await cartService.getCartById(parseInt(req.params.id));
        res.json(cart);
    }


    static async createCart(req: Request, res: Response) {
        const cartService = container.resolve(CartServices);
        const cart = await cartService.createCart(req.body);
        res.status(201).json(cart);
    }
    static async updateCart(req: Request, res: Response) {
        const cartService = container.resolve(CartServices);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const cart = await cartService.updateCart(id, updates);
        if (cart) {
          res.status(200).json({
            status: 200,
            message: "Cart was successfully updated",
            data: cart,
          });
        } else {
          res.status(404).json({
            status: 404,
            message: "Cart not found",
          });
        }
      }
    
      static async deleteCart(req: Request, res: Response) {
        const cartService = container.resolve(CartServices);
        const id = parseInt(req.params.id);
        await cartService.deleteCart(id);
        res.status(204).json({
          status: 204,
          message: "Cart was successfully deleted",
        });
      }
}