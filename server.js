import express from 'express';
import employeeRouter from './controller/employeeController.js';

const app = express();

app.use('/api/employee', employeeRouter);

app.listen(3000, () => {
  console.log(`Server http://localhost:3000`);
});
