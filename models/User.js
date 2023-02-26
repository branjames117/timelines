import { Schema, models, model } from 'mongoose';

const userSchema = new Schema({
  username: String,
  email: String,
  joined: Date,
  lastLogin: Date,
});

export default models.User || model('User', userSchema);
