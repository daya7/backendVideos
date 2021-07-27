//SERVER
import express from 'express';
import config from './config';

import morgan from 'morgan';
import cors from 'cors';
import videoRoutes from './routes/Video.routes';

const app= express();
//settings
app.set('port', config.PORT);
//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(videoRoutes);

export default app;
