import express from 'express';
import { createEmployee, getEmployees, updateEmployee,deleteEmployee, getOneEmployee } from '../service/employeeService.js';

const router=express.Router();

/**
 * @swagger
 * /api/employee:
 *   get:
 *     summary: Get All Employees
 *     tags:
 *       - Employees
 *     responses:
 *       200:
 *         description: Successfully retrieved all employees
 *       404:
 *         description: Employees not found
 */
router.get("/", getEmployees);

/**
 * @swagger
 * /api/employee/{id}:
 *   get:
 *     summary: Get Employee by ID
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Successfully retrieved employee
 *       404:
 *         description: Employee not found
 */
router.get("/:id", getOneEmployee);

/**
 * @swagger
 * /api/employee:
 *   post:
 *     summary: Create New Employee
 *     tags:
 *       - Employees
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ename:
 *                 type: string
 *               epassword:
 *                 type: string
 *               ephone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Employee created successfully
 */
router.post("/", createEmployee);

/**
 * @swagger
 * /api/employee/{id}:
 *   patch:
 *     summary: Update Employee
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ename:
 *                 type: string
 *               epassword:
 *                 type: string
 *               ephone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Employee updated successfully
 */
router.patch("/:id", updateEmployee);

/**
 * @swagger
 * /api/employee/{id}:
 *   delete:
 *     summary: Delete Employee
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 *       404:
 *         description: Employee not found
 */
router.delete("/:id", deleteEmployee);

export default router;

