import { Omit } from "lodash";
import { Document } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(
  input: Document<
    Omit<UserDocument, "createdAt" | "updatedAt" | "passwordConfirmation">
  >
  // Omit<UserDocument, "createdAt" | "updatedAt" | "passwordConfirmation">,
) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
