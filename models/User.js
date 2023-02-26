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
  console.log(User);
} catch (err) {
  console.log(err);
  User = model('User', userSchema);
  console.log(User);
}
console.log(User);

export default User;
