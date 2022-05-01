import mongoose from 'mongoose';
import environment from '../config/environment';

const { database, nodeEnv } = environment;

let dbUri = database.uri;

if (nodeEnv === 'test') {
  dbUri = database.testUri;
}

const connectDb = () => {
  mongoose.connect(dbUri);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Database Connection Error'));
  db.once('open', () => {
    console.log('Connected To The Mongo Database Successfully');
  });
};

export default connectDb;
