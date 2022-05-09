import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("0123456789", 5);

export interface PumpInput {
    fuel_type: string;
    price: number;
    available: boolean;
}

export interface PumpDocument extends PumpInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const pumpSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      default: () => `pump_${nanoid()}`,
    },
    fuel_type: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const PumpModel = mongoose.model<PumpDocument>("Pump", pumpSchema);

export default PumpModel;
