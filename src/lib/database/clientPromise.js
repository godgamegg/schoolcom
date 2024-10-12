import { MongoClient } from 'mongodb';
import { NODE_ENV, MONGODB_CONNECTION_STRING } from '$env/static/private';

if (!MONGODB_CONNECTION_STRING) {
 throw new Error('MongoDB String 발견하지 못함!');
}

const uri = MONGODB_CONNECTION_STRING;
const options = {};

let client;
let clientPromise;

if (NODE_ENV === 'development') {
 if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
 }
 clientPromise = global._mongoClientPromise;
} else {
 client = new MongoClient(uri, options);
 clientPromise = client.connect();
}
export default clientPromise;


