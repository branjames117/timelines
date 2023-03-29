import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

export const dbConnect = async () => {
  if (cached.conn) return cached.conn;
  cached.conn = await mongoose.connect(process.env.MONGODB_URI);
  return cached.conn;
};
