import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://andy:g3D8aES6pzHKq5r8@cluster0.wgp93.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client
}
