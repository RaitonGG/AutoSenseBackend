import {Request, Response} from "express";
import {CreateStationInput, UpdateStationInput} from "../schema/station.schema";
import {createStation, deleteStation, findAndUpdateStation, findStation} from "../service/station.service";

export async function createStationHandler(req: Request<{}, {}, CreateStationInput["body"]>, res: Response) {
  const body = req.body;
  const station = await createStation({...body});

  return res.send(station);
}

export async function updateStationHandler(req: Request<UpdateStationInput["params"]>, res: Response) {
  const id = req.params.id;
  const update = req.body;
  const station = await findStation({ id });

  if (!station) {
    return res.sendStatus(404);
  }

  const updatedStation = await findAndUpdateStation({ id }, update, {
    new: true,
  });

  return res.send(updatedStation);
}

export async function getStationHandler(req: Request<UpdateStationInput["params"]>, res: Response) {
  const id = req.params.id;
  const station = await findStation({ id });
  if (!station) {
    return res.sendStatus(404);
    
  }

  return res.send(station);
}

export async function deleteStationHandler(req: Request<UpdateStationInput["params"]>, res: Response) {
  const id = req.params.id;
  const station = await findStation({ id });

  if (!station) {
    return res.sendStatus(404);
  }

  await deleteStation({ id });

  return res.sendStatus(200);
}
