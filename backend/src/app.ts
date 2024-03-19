import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
config();

const app = express();

const originUrl = process.env.NODE_ENV === 'production' ? 'https://zilla-chat.onrender.com' : 'http://localhost:5173';

app.use(cors({ origin: originUrl, credentials: true }));
app.use(express.json()); 
app.use(cookieParser(process.env.COOKIE_SECRET)) 

// Only for dev mode. Remove in production
if(process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/v1', appRouter)

export default app; 