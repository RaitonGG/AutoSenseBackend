import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { number } from "yup";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface ProductInput {
  name: string;
  gasprice: number;
  dieselprice: number;
  electricityprice: number;
  latitude: number;
  longitude: number;
}

export interface ProductDocument extends ProductInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      default: () => `product_${nanoid()}`,
    },
    name: { type: String, required: true },
    gasprice: { type: Number, required: true },
    dieselprice: { type: Number, required: true },
    electricityprice: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;
