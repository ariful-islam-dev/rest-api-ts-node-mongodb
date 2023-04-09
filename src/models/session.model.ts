import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface schemaDocument extends mongoose.Document {
  user: UserDocument["_id"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema = new mongoose.Schema(
  {
    email: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    valid: {
      type: Boolean,
      default: true,
    },
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
);

const SessionModel = mongoose.model("Session", sessionSchema);
export default SessionModel;
