import { Schema, models, model, Model } from 'mongoose';

export interface IUser {
  username: string;
  email: string;
  description?: string;
  joined: Date;
  lastLogin: Date;
  showProfilePicture: boolean;
}

export const userSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required.'],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  joined: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  lastLogin: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  showProfilePicture: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const User: Model<IUser> =
  models.User || model<IUser>('User', userSchema);
