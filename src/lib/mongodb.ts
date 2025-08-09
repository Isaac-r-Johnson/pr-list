// This file is used to connect to MongoDB in a Next.js application.
// It handles the connection logic and exports a promise that resolves to the MongoDB client.
// The connection is managed differently in development and production environments to optimize performance.
// In development, it uses a global variable to maintain the client connection.
// In production, it creates a new client for each request to ensure fresh connections.
// Make sure to set the MONGODB_URI environment variable in your .env.local file.
// The URI should point to your MongoDB database, including credentials and options.
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options = {}; 

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to maintain the MongoDB client
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production mode, create a new MongoDB client for each request
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;