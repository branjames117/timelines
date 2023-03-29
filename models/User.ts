import { Schema, models, model, Model } from 'mongoose';

export interface IUser {
  username?: string;
  email: string;
  description?: string;
  joined?: string;
  lastLogin?: string;
  showProfilePicture?: boolean;
}

export const userSchema = new Schema<IUser>({
  username: String,
  email: {
    type: String,
    required: true,
  },
  description: String,
  joined: Date,
  lastLogin: Date,
  showProfilePicture: Boolean,
});

export const User: Model<IUser> =
  models.User || model<IUser>('User', userSchema);
