import { Express, Request, Response } from "express";
import {createStationHandler, getStationHandler, updateStationHandler, deleteStationHandler,} from "./controller/station.controller";
import validateResource from "./middleware/validateResource";
import { createStationSchema, deleteStationSchema, getStationSchema, updateStationSchema,} from "./schema/station.schema";

function routes(app: Express) {
  
  //HealthCheck
  app.get("/", (req: Request, res: Response) => res.sendStatus(200));

  //Create Station
  app.post("/api/stations/", validateResource(createStationSchema), createStationHandler);

  // Update Station
  app.put("/api/stations/:id", [validateResource(updateStationSchema)], updateStationHandler);
  
  // Get Stations
  app.get("/api/stations/", validateResource(getStationSchema), getStationHandler);

  // Delete Station
  app.delete("/api/stations/:id",[validateResource(deleteStationSchema)],deleteStationHandler);
}

export default routes;
