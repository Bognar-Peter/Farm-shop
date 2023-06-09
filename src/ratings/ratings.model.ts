import { model, Schema } from "mongoose";

import IRating from "./ratings.interface";

const ratingSchema = new Schema<IRating>(
    {
        star: Number,
        comment: String,
        user_id: {
            ref: "User",
            type: Schema.Types.ObjectId,
        },
        partner_id: {
            ref: "Partner",
            type: Schema.Types.ObjectId,
        },
        product_id: {
            ref: "Product",
            type: Schema.Types.ObjectId,
        },
    },
    { versionKey: false, timestamps: true },
);

const ratingModel = model<IRating>("Rating", ratingSchema, "ratings");

export default ratingModel;
