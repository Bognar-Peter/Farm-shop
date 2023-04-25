// import { Type } from "class-transformer";
import { Schema } from "mongoose";
export default interface IOrderDetail {
    _id?: Schema.Types.ObjectId;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    users_id: Schema.Types.ObjectId;
}
