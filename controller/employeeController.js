import express from 'express';
import { createEmployee, getEmployees, updateEmployee,deleteEmployee } from '../service/employeeService.js';

const router=express.Router();

router.route("/").get(getEmployees);
router.route("/").post(createEmployee);
router.route("/").put(updateEmployee);
router.route("/").delete(deleteEmployee);

export default router;

