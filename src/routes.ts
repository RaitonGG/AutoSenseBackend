import { Express, Request, Response } from "express";
import {createProductHandler, getProductHandler, updateProductHandler, deleteProductHandler,} from "./controller/product.controller";
import validateResource from "./middleware/validateResource";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema,} from "./schema/product.schema";

function routes(app: Express) {
  
  //HealthCheck
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  //Create Station
  app.post("/api/products", validateResource(createProductSchema), createProductHandler);

  // Update Station
  app.put("/api/products/:productId", [validateResource(updateProductSchema)], updateProductHandler);
  
  // Get Stations
  app.get("/api/products/", validateResource(getProductSchema), getProductHandler);

  // Delete Station
  app.delete("/api/products/:productId",[validateResource(deleteProductSchema)],deleteProductHandler);
}

export default routes;
