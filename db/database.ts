import { MongoClient, Db } from 'mongodb';
import getConfig from 'next/config'
import url from 'url'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
const { DATABASE_URL } = serverRuntimeConfig
// Create cached connection variable
let cachedDb: Db | undefined;
const URL = "mongodb + srv: //user_01:user_01@cluster0.4fc5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
export async function getDatabase(): Promise<Db> {
     if (cachedDb) {
          return cachedDb;
     }

     if (!URL) {
          throw new Error('Unable to connect to database, no URI  provided');
     }

     // If no connection is cached, create a new one
     const client = await MongoClient.connect(URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
     });

     // Select the database through the connection,
     // using the database path of the connection string
     const dbName = url.parse(URL).pathname?.substr(1);

     if (!dbName) {
          throw new Error('Unable to derive a dbName to connect to');
     }

     const db = await client.db(dbName);

     // Cache the database connection and return the connection
     cachedDb = db;
     return db;
}
