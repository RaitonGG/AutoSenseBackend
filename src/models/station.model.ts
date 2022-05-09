import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { PumpInput } from "./pump.model";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface StationInput {
  name: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
  pumps: PumpInput[];
}

export interface StationDocument extends StationInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const stationSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => `station_${nanoid()}`,
    },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    pumps: {type: Array, required: true}
  },
  {
    timestamps: true,
  }
);

// stationSchema.pre('save', function(next) {
//   if (this.cardIds.length === 0) {
//     pumps.forEach(async card => {
//       const newCard = new Card({ ...card, user: this })
//       const updateStation = await StationModel.update(
//         { _id: this._id },
//         { $push: { cardIds: saveNewCard._id }}
//       )
//     })
//   }
//   next()
// });

const StationModel = mongoose.model<StationDocument>("Station", stationSchema);

export default StationModel;
