import { Schema, models, model } from 'mongoose';

const userSchema = new Schema({
  username: String,
  email: String,
  joined: Date,
  lastLogin: Date,
});

let User;
try {
  User = models.User;
} catch (err) {
  User = model('User', userSchema);
}

export default User;
