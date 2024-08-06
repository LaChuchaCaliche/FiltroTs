import { Router } from "express";
import EntitiesController from "../controllers/entitiesController";

export const entitiesRouter = Router();

entitiesRouter.get("/", EntitiesController.getAllEntities);
entitiesRouter.get("/:id", EntitiesController.getEntitieById);
entitiesRouter.post("/", EntitiesController.createEntitie);
entitiesRouter.put("/:id", EntitiesController.updateEntitie);
entitiesRouter.delete("/:id", EntitiesController.deleteEntitie);