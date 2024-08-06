import { Router } from "express";
import RoleController from "../controllers/roleController";

export const roleRouter = Router();

roleRouter.get("/", RoleController.getAllRoles);
roleRouter.get("/:id", RoleController.getRoleById);
roleRouter.post("/", RoleController.createRole);
roleRouter.put("/:id", RoleController.updateRole);
roleRouter.delete("/:id", RoleController.deleteRole);