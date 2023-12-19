import express from 'express';
import { config } from 'dotenv'; 

const app = express();

app.listen(7000, () => console.log('Server is up and running...'))
