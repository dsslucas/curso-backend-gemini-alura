import { MongoClient } from 'mongodb';

export default async function connectingDatabase(connectionString) {
  let mongoClient;

  try {
      mongoClient = new MongoClient(connectionString);
      console.log('Connecting to database cluster...');
      await mongoClient.connect();
      console.log('Connected at MongoDB Atlas!');

      return mongoClient;
  } catch (erro) {
      console.error('Failure: not connected to database!');
      console.error(erro)
      process.exit();
  }
}