import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  /* if in development mode, use a global variable so the value is
  preserved across module reloads caused by Hot Module Replacement */
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  /* if in production mode, best not to use global variable */
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// export module-scoped MongoClient promise
export default clientPromise;
