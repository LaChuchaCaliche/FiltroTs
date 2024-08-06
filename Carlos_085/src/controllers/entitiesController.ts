import { Request, Response } from 'express';
import { container } from 'tsyringe';
import EntitieServices from '../services/entitiesServices';

export default class EntitiesController {
    static async getAllEntities(req: Request, res: Response) {
        const entitiesServices = container.resolve(EntitieServices);
        const entities = await entitiesServices.getAllentities();
        res.json(entities);
    }

    static async getEntitieById(req: Request, res: Response) {
        const entitiesServices = container.resolve(EntitieServices);
        const entitie = await entitiesServices.getEntitieById(parseInt(req.params.id));
        res.json(entitie);
    }


    static async createEntitie(req: Request, res: Response) {
        const entitieService = container.resolve(EntitieServices);
        const entitie = await entitieService.createEntitie(req.body);
        res.status(201).json(entitie);
    }
    static async updateEntitie(req: Request, res: Response) {
        const entitieService = container.resolve(EntitieServices);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const entitie = await entitieService.updateEntitie(id, updates);
        if (entitie) {
          res.status(200).json({
            status: 200,
            message: "Entitie was successfully updated",
            data: entitie,
          });
        } else {
          res.status(404).json({
            status: 404,
            message: "Entitie not found",
          });
        }
      }
    
      static async deleteEntitie(req: Request, res: Response) {
        const entitieService = container.resolve(EntitieServices);
        const id = parseInt(req.params.id);
        await entitieService.deleteEntitie(id);
        res.status(204).json({
          status: 204,
          message: "Entitie was successfully deleted",
        });
      }
}