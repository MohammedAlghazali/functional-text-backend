import express from 'express';
import compression from 'compression';
import cors from 'cors';

import connectDb from './db/connection';
import users from './routes/users';
import environment from './config/environment';

const app: express.Application = express();
const { port } = environment;

connectDb();

app.use(compression());
app.use(cors());
app.disable('x-powered-by');
app.set('port', port);

app.use('/api/v1/users', users);

export default app;
