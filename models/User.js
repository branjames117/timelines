import { Schema, models, model } from 'mongoose';

const userSchema = new Schema({
  username: String,
  email: String,
  description: String,
  joined: Date,
  lastLogin: Date,
  showProfilePicture: Boolean,
});

export default models.User || model('User', userSchema);
