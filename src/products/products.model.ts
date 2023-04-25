import { model, Schema } from "mongoose";

import IProduct from "./products.interface";

const productSchema = new Schema<IProduct>(
    {
        name: String,
        price: Number,
        type: String,
        description: String,
        picture: String,
    },
    { versionKey: false, timestamps: true },
);

const productModel = model<IProduct>("Product", productSchema, "products");

export default productModel;