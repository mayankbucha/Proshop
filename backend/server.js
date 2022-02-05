// This syntax is from commonJS whereas import is from es modules.
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notfound } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

// This will go to the productRoutes file
app.use('/api/products', productRoutes);

// Error middleware
app.use(notfound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
