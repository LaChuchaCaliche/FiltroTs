import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RoleService from '../services/rolesServices';

export default class RoleController {
    static async getAllRoles(req: Request, res: Response) {
        const roleService = container.resolve(RoleService);
        const roles = await roleService.getAllRoles();
        res.json(roles);
    }

    static async getRoleById(req: Request, res: Response) {
        const roleService = container.resolve(RoleService);
        const role = await roleService.getRolesById(parseInt(req.params.id));
        res.json(role);
    }


    static async createRole(req: Request, res: Response) {
        const roleService = container.resolve(RoleService);
        const role = await roleService.createRole(req.body);
        res.status(201).json(role);
    }
    static async updateRole(req: Request, res: Response) {
        const roleService = container.resolve(RoleService);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const role = await roleService.updateRole(id, updates);
        if (role) {
          res.status(200).json({
            status: 200,
            message: "Role was successfully updated",
            data: role,
          });
        } else {
          res.status(404).json({
            status: 404,
            message: "Role not found",
          });
        }
      }
    
      static async deleteRole(req: Request, res: Response) {
        const productService = container.resolve(RoleService);
        const id = parseInt(req.params.id);
        await productService.deleteRole(id);
        res.status(204).json({
          status: 204,
          message: "Role was successfully deleted",
        });
      }
}