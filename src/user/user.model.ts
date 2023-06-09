import { model, Schema } from "mongoose";

import IAddress from "./address.interface";
import IUser from "./user.interface";

const addressSchema = new Schema<IAddress>(
    {
        city: String,
        country: String,
        street: String,
    },
    { versionKey: false, id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

const userSchema = new Schema<IUser>(
    {
        _id: Schema.Types.ObjectId,
        email: {
            type: String,
            required: true,
        },
        email_verified: {
            type: Boolean,
            required: true,
        },
        auto_login: {
            type: Boolean,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        roles: {
            type: [String], // Array of string
            required: true,
        },
        address: addressSchema,
    },
    { versionKey: false, id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

// userSchema.virtual("recipes", {
//     ref: "Recipe",
//     localField: "_id",
//     foreignField: "user_id", // ref_Field
//     justOne: false,
// });

// userSchema.virtual("author", {
//     ref: "Author",
//     localField: "_id",
//     foreignField: "user_id", // ref_Field
//     justOne: false,
// });

const userModel = model<IUser>("User", userSchema, "users");

export default userModel;
