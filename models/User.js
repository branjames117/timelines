import { Schema, models, model } from 'mongoose';

export const userSchema = new Schema({
  username: String,
  email: String,
  description: String,
  joined: Date,
  lastLogin: Date,
  showProfilePicture: Boolean,
});

export const User = models.User || model('User', userSchema);
