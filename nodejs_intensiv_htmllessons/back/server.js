import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";

import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3030;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);