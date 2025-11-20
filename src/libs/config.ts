export const AUTH_TIMER = 24;
export const MORGAN_FORMAT = ':method :url :response-time [:status] \n';

import mongoose from "mongoose";
export const shapeIntoMongooseObjectId = (targe: any) => {
    return typeof targe === 'string' ? new mongoose.Types.ObjectId(targe) : targe;
};