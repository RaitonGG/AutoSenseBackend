import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import StationModel, {
  StationDocument,
  StationInput,
} from "../models/station.model";
import { databaseResponseTimeHistogram } from "../utils/metrics";

export async function createStation(input: StationInput) {
  const metricsLabels = {
    operation: "createStation",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await StationModel.create(input);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });
    throw e;
  }
}

export async function findStation(
  query: FilterQuery<StationDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "findStation",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    //const result = await StationModel.findOne(query, {}, options);
    const result = await StationModel.find();
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function findAndUpdateStation(
  query: FilterQuery<StationDocument>,
  update: UpdateQuery<StationDocument>,
  options: QueryOptions
) {
  return StationModel.findOneAndUpdate(query, update, options);
}

export async function deleteStation(query: FilterQuery<StationDocument>) {
  return StationModel.deleteOne(query);
}
