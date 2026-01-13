import express from 'express';
import { createEmployee, getEmployees, updateEmployee,deleteEmployee, getOneEmployee } from '../service/employeeService.js';

const router=express.Router();

router.route("/").get(getEmployees);
router.route("/:id").get(getOneEmployee);
router.route("/").post(createEmployee);
router.route("/:id").patch(updateEmployee);
router.route("/:id").delete(deleteEmployee);

export default router;

