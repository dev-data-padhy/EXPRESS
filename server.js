import express from 'express';
import employeeRouter from './controller/employeeController.js';
import { connectDB } from './repository/employeeRepository.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use('/api/employee', employeeRouter);

app.listen(3000, () => {
  console.log(`Server http://localhost:3000`);
});
