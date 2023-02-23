import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

const connection = async () => mongoose.connect(uri, { useNewUrlParser: true });

export default connection;
